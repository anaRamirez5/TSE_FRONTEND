import { Component, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { esDoLocale } from 'ngx-bootstrap/chronos';
import {
  BsDatepickerConfig,
  BsDatepickerDirective,
  BsDaterangepickerDirective,
  BsLocaleService,
} from 'ngx-bootstrap/datepicker';
import { SharedService } from '../../../services/shared/shared.service';
import { City, Status } from '../../../models/shared/shared.interface';
import { BodyResponse } from '../../../models/shared/body-response.interface';

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
  bsConfig = {
    containerClass: 'theme-blue', // Tema predefinido
    dateInputFormat: 'YYYY-MM-DD',
    locale: 'es', // Formato deseado
  };
  ngOnInit() {
    this.getCity();
    this.getStatus();
  }
  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.filterGroup = this.fb.group({
      date: [''],
      license_plate_number: [''],
      id_servicio: [''],
      city: [''],
      status: [''],
    });
  }
  submitFilter() {
    this.filterForm.emit(this.filterGroup);
  }
  cleanFilter() {
    this.filterGroup.reset();
    this.clean.emit(true);
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
