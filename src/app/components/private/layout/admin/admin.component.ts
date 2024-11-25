import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Filter, HistoryTable } from '../../../../models/admin/admin.interface';
import { AdminService } from '../../../../services/admin/admin.service';
import { BodyResponse } from '../../../../models/shared/body-response.interface';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  historyTable: HistoryTable[] = [];
  filter!: Filter;

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
    const payload: Filter = {
      date: '',
      license_plate_number: '',
      department: '',
      city: '',
      page: 0,
      page_size: 0,
    };
    this.getHistoryTable(payload);
  }
  getHistoryTable(payload: Filter) {
    this.adminService.getHistoryTable(payload).subscribe({
      next: (response: BodyResponse<HistoryTable[]>) => {
        if (response.code === 200) {
          this.historyTable = response.data;
        } else {
          this.historyTable = [];
        }
      },
    });
  }
  handleClean(event: boolean) {
    if (event) {
      this.ngOnInit();
    }
  }
  extractFilterData(event?: FormGroup) {
    if (event) {
      this.filter = event.value;
    }
    const payload: Filter = {
      date: this.filter.date,
      license_plate_number: this.filter.license_plate_number,
      department: this.filter.department,
      city: this.filter.city,
      page: 0,
      page_size: 0,
    };

    this.getHistoryTable(payload);
  }
}
