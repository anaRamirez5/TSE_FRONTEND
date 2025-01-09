import { Component, OnInit } from '@angular/core';
import { HistoryTable } from '../../../../core/models/admin/admin.interface';
import { DriverService } from '../../../../core/services/driver/driver.service';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { FormGroup } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { SharedService } from '../../../../core/services/shared/shared.service';
import { FilterDriver } from '../../../../core/models/shared/shared.interface';

@Component({
  selector: 'app-history-per-driver',
  templateUrl: './history-per-driver.component.html',
  styleUrl: './history-per-driver.component.css',
})
export class HistoryPerDriverComponent implements OnInit {
  historyTable: HistoryTable[] = [];
  filter!: FilterDriver;
  totalItems: number = 0;
  handle = false;
  finalResponse: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 1;
  yesterday: string = '';
  constructor(
    private driverService: DriverService,
    private sharedService: SharedService
  ) {}

  handlePageEvent(e: PageChangedEvent) {
    this.pageSize = e.itemsPerPage;
    this.pageIndex = e.page;
    this.getHistoryData(this.pageIndex, this.pageSize);
  }

  ngOnInit(): void {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Formatear la fecha al formato deseado (opcional)
    this.yesterday = yesterday.toISOString().split('T')[0];
    this.getHistoryData(1, 10);
  }
  filterPayload!: FilterDriver;
  getHistoryData(page: number, page_size: number) {
    if (this.filter && this.handle) {
      this.filterPayload = {
        date: this.filter.date || null,
        page: page,
        page_size: page_size,
      };
    } else {
      this.filterPayload = {
        date: this.yesterday,
        page: page,
        page_size: page_size,
      };
    }
    this.finalResponse = true;
    this.driverService.getHistoryTable(this.filterPayload).subscribe({
      next: (response: BodyResponse<HistoryTable[]>) => {
        if (response.code === 200) {
          this.historyTable = response.data;
          this.totalItems = response.data[0].total_records;
        } else {
          this.historyTable = [];
        }
      },
      error: () => {
        this.historyTable = [];
        this.finalResponse = false;
      },
      complete: () => {
        this.finalResponse = false;
      },
    });
  }
  handleClean(event: boolean) {
    if (event) {
      this.handle = false;
      this.ngOnInit();
    }
  }
  extractFilterData(event?: FormGroup) {
    if (event) {
      this.filter = event.value;
    }
    const formattedDate = this.sharedService.formatDate(this.filter.date || '');
    this.filter.date = this.filter.date ? formattedDate : null;
    this.handle = true;
    this.pageIndex = 1;

    this.getHistoryData(this.pageIndex, this.pageSize);
  }
}
