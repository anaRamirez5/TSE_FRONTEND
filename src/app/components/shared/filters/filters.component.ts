import { Component, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  City,
  Filter,
  Inform,
  Status,
} from '../../../core/models/shared/shared.interface';
import { BodyResponse } from '../../../core/models/shared/body-response.interface';
import { SharedService } from '../../../core/services/shared/shared.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit {
  role = input.required<string>();
  filterForm = output<FormGroup>();
  clean = output<boolean>();
  filterGroup!: FormGroup;
  citys: City[] = [];
  status: Status[] = [];
  tommorow: string = '';
  handleToast: boolean = false;
  yesterday: string = '';
  bsConfig = {
    containerClass: 'theme-blue', // Tema predefinido
    dateInputFormat: 'YYYY-MM-DD',
    locale: 'es', // Formato deseado
  };
  ngOnInit() {
    const today = new Date();
    const tommorow = new Date(today);
    const yesterday = new Date(today);
    tommorow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);
    this.tommorow = tommorow.toISOString().split('T')[0];
    this.yesterday = yesterday.toISOString().split('T')[0];
    console.log(this.yesterday);
    this.getCity();
    this.getStatus();
  }
  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.filterGroup = this.fb.group({
      date: [null],
      license_plate_number: [null],
      id_servicio: [null],
      city: [null],
      status: [null],
    });
  }
  submitFilter() {
    this.filterForm.emit(this.filterGroup);
  }
  cleanFilter() {
    this.filterGroup.reset();
    this.clean.emit(true);
  }
  getInform(payload: Filter) {
    this.handleToast = false;
    let date = '';
    console.log(payload);
    if (this.filterGroup.get('date')?.value !== null) {
      date = this.filterGroup.get('date')?.value.toISOString().split('T')[0];
    } else {
      console.log('no hya nada en el filtro');
      console.log(this.yesterday, this.tommorow);
      if (
        this.role() === 'programmer_assign' ||
        this.role() === 'driver-assign'
      ) {
        date = this.tommorow;
        console.log('es assign');
      } else if (this.role() === 'admin' || this.role() === 'driver-history') {
        date = this.yesterday;
        console.log('es historial');
      }
    }

    console.log(date, this.role());
    const payloadInform: Filter = {
      service_date: date,
      id_servicio: payload.id_servicio,
      license_plate_number: payload.license_plate_number,
      city: payload.city,
    };
    this.sharedService.getInform(payloadInform).subscribe({
      next: (response: BodyResponse<Inform>) => {
        if (response.code === 200) {
          const byteCharacters = atob(response.data.base64);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = response.data.file_name;
          link.click();
          URL.revokeObjectURL(link.href);
        } else {
          this.handleToast = true;
        }
      },
      error: () => {},
      complete: () => {},
    });
  }
  getCity() {
    this.sharedService.getCitys().subscribe({
      next: (response: BodyResponse<City[]>) => {
        if (response.code === 200) {
          this.citys = response.data;
        } else {
          this.citys = [];
        }
      },
      error: () => {
        this.citys = [];
      },
      complete: () => {},
    });
  }
  getStatus() {
    this.sharedService.getStatus().subscribe({
      next: (response: BodyResponse<Status[]>) => {
        if (response.code === 200) {
          this.status = response.data;
        } else {
          this.status = [];
        }
      },
      error: () => {
        this.status = [];
      },
      complete: () => {},
    });
  }
}
