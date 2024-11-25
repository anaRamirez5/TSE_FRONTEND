import { Component, OnInit } from '@angular/core';
import { Filter, HistoryTable } from '../../../../models/admin/admin.interface';
import { DriverService } from '../../../../services/driver/driver.service';
import { BodyResponse } from '../../../../models/shared/body-response.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-history-per-driver',
  templateUrl: './history-per-driver.component.html',
  styleUrl: './history-per-driver.component.css',
})
export class HistoryPerDriverComponent implements OnInit {
  historyTable: HistoryTable[] = [];
  filter!: Filter;
  ngOnInit(): void {
    const payload: Filter = {
      date: '',
      license_plate_number: '',
      department: '',
      city: '',
      page: 0,
      page_size: 0,
    };
    this.getHistoryData(payload);
  }

  constructor(private driverService: DriverService) {}
  getHistoryData(payload: Filter) {
    this.driverService.getHistoryTable(payload).subscribe({
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
    const date = new Date(this.filter.date);
    const day = String(date.getDate()).padStart(2, '0'); // Asegura que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const year = date.getFullYear();

    // Formatear la fecha
    const formattedDate = `${day}-${month}-${year}`;
    const payload: Filter = {
      date: formattedDate,
      license_plate_number: '',
      department: '',
      city: '',
      page: 0,
      page_size: 0,
    };

    this.getHistoryData(payload);
  }
}
