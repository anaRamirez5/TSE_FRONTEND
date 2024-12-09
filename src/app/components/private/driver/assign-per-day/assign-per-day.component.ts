import { Component } from '@angular/core';
import { HistoryTable } from '../../../../models/admin/admin.interface';
import { FormGroup } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BodyResponse } from '../../../../models/shared/body-response.interface';
import { DriverService } from '../../../../services/driver/driver.service';
import { SharedService } from '../../../../services/shared/shared.service';
import { Filter } from '../../../../models/shared/shared.interface';

@Component({
  selector: 'app-assign-per-day',
  templateUrl: './assign-per-day.component.html',
  styleUrl: './assign-per-day.component.css',
})
export class AssignPerDayComponent {
  historyTable: HistoryTable[] = [];
  filter!: Filter;
  totalItems: number = 0;
  handle = false;
  finalResponse: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 1;
  yesterday: string = '';
  handleRoute: boolean = false;
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
    yesterday.setDate(today.getDate());

    // Formatear la fecha al formato deseado (opcional)
    this.yesterday = yesterday.toISOString().split('T')[0];
    console.log;
    this.getHistoryData(1, 10);
  }
  filterPayload!: Filter;
  getHistoryData(page: number, page_size: number) {
    if (this.filter && this.handle) {
      this.filterPayload = {
        date: this.filter.date || '',
        license_plate_number: this.filter.license_plate_number || '',
        id_servicio: this.filter.id_servicio || '',
        city: this.filter.city || '',
        page: page,
        page_size: page_size,
      };
    } else {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate());
      this.yesterday = yesterday.toISOString().split('T')[0];
      this.filterPayload = {
        date: this.yesterday,
        license_plate_number: '',
        id_servicio: '',
        city: '',
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
    const formattedDate = this.sharedService.formatDate(this.filter.date);
    this.filter.date = this.filter.date ? formattedDate : '';
    this.handle = true;
    this.pageIndex = 1;

    this.getHistoryData(this.pageIndex, this.pageSize);
  }
  acceptRoute() {
    this.handleRoute = true;
  }
}
