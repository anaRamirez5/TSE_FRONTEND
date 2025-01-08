import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HistoryTable } from '../../../../core/models/admin/admin.interface';
import { AdminService } from '../../../../core/services/admin/admin.service';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Filter } from '../../../../core/models/shared/shared.interface';
import { SharedService } from '../../../../core/services/shared/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  historyTable: HistoryTable[] = [];
  service!: HistoryTable;
  filter!: Filter;
  filterPayload!: Filter;
  totalItems: number = 0;
  handle = false;
  handleDetail: boolean = false;
  finalResponse: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 1;
  yesterday: string = 's';
  constructor(
    private adminService: AdminService,
    public sharedService: SharedService
  ) {}
  ngOnInit(): void {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    this.yesterday = yesterday.toISOString().split('T')[0];
    this.getHistoryTable(1, 10);
  }

  handlePageEvent(e: PageChangedEvent) {
    this.pageSize = e.itemsPerPage;
    this.pageIndex = e.page;
    this.getHistoryTable(this.pageIndex, this.pageSize);
  }
  getHistoryTable(page: number, page_size: number) {
    if (this.filter && this.handle) {
      this.filterPayload = {
        date: this.filter.date || null,
        license_plate_number: this.filter.license_plate_number || null,
        id_servicio: this.filter.id_servicio || null,
        city: this.filter.city || null,
        page: page,
        page_size: page_size,
      };
    } else {
      this.filterPayload = {
        date: this.yesterday,
        license_plate_number: null,
        id_servicio: null,
        city: null,
        page: page,
        page_size: page_size,
      };
    }
    this.finalResponse = true;
    this.adminService.getHistoryTable(this.filterPayload).subscribe({
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
    this.getHistoryTable(this.pageIndex, this.pageSize);
  }
  openDialogDetail(data: HistoryTable) {
    this.handleDetail = true;
    this.service = data;
  }
  closeDialogDetail(event: boolean) {
    this.handleDetail = !event;
  }
}
