import { Component, OnInit } from '@angular/core';
import { HistoryTable } from '../../../../../models/admin/admin.interface';
import { CoordinatorService } from '../../../../../services/coordinator/coordinator.service';
import { Filter } from '../../../../../models/shared/shared.interface';
import { BodyResponse } from '../../../../../models/shared/body-response.interface';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { assignService } from '../../../../../models/coordinator/coordinator.interface';
import { FormGroup } from '@angular/forms';
import { SharedService } from '../../../../../services/shared/shared.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent implements OnInit {
  handleModalEdit: boolean = false;
  handleModalDetail: boolean = false;
  handleToast: boolean = false;
  action: string = '';
  dataDetail!: assignService;
  finalResponse: boolean = true;
  pageSize: number = 10;
  pageIndex: number = 1;
  totalItems: number = 0;
  filter!: Filter;
  handle = false;
  filterPayload!: Filter;
  tommorow: string = 's';
  datalist: assignService[] = [];
  constructor(
    private programmerService: CoordinatorService,
    public sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.getAssignedService(1, 10);
    const today = new Date();
    const tommorow = new Date(today);
    tommorow.setDate(today.getDate() + 1);
    this.tommorow = tommorow.toISOString().split('T')[0];
  }
  getAssignedService(page: number, page_size: number) {
    if (this.filter && this.handle) {
      this.filterPayload = {
        date: this.filter.date || null,
        license_plate_number: this.filter.license_plate_number || null,
        id_servicio: this.filter.id_servicio || null,
        city: this.filter.city || null,
        status: Number(this.filter.status) || null,
        page: page,
        page_size: page_size,
      };
    } else {
      this.filterPayload = {
        date: null,
        license_plate_number: null,
        id_servicio: null,
        city: null,
        status: null,
        page: page,
        page_size: page_size,
      };
    }
    this.finalResponse = true;
    this.programmerService.getAssignTable(this.filterPayload).subscribe({
      next: (response: BodyResponse<assignService[]>) => {
        if (response.code === 200) {
          this.datalist = response.data;
          this.totalItems = response.data[0].total_records;
        } else {
          this.datalist = [];
        }
      },
      error: () => {
        this.datalist = [];
        this.finalResponse = false;
      },
      complete: () => {
        this.finalResponse = false;
      },
    });
  }
  extractFilterData(event?: FormGroup) {
    if (event) {
      this.filter = event.value;
    }
    const formattedDate = this.sharedService.formatDate(this.filter.date || '');
    this.filter.date = this.filter.date ? formattedDate : '';
    this.handle = true;
    this.pageIndex = 1;
    this.getAssignedService(this.pageIndex, this.pageSize);
  }
  editDriverAssign() {
    this.handleModalEdit = true;
  }
  closeModalEdit(event: boolean) {
    this.handleModalEdit = !event;
  }
  editToastHandle(event: boolean) {
    this.handleToast = event;
    this.action = 'reassignment';
    setTimeout(() => {
      this.handleToast = false;
    }, 3000);
  }
  openDialogDetail(data: assignService) {
    this.handleModalDetail = true;
    this.dataDetail = data;
  }

  closeModalCancel(event: boolean) {
    this.handleModalDetail = !event;
  }
  handlePageEvent(e: PageChangedEvent) {
    this.pageSize = e.itemsPerPage;
    this.pageIndex = e.page;
    this.getAssignedService(this.pageIndex, this.pageSize);
  }
  handleClean(event: boolean) {
    if (event) {
      this.handle = false;
      this.ngOnInit();
    }
  }
}
