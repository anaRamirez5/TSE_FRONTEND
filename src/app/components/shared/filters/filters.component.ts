import { Component, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { esDoLocale } from 'ngx-bootstrap/chronos';
import {
  BsDatepickerConfig,
  BsDatepickerDirective,
  BsDaterangepickerDirective,
  BsLocaleService,
} from 'ngx-bootstrap/datepicker';

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
  bsConfig = {
    containerClass: 'theme-blue', // Tema predefinido
    dateInputFormat: 'YYYY-MM-DD',
    locale: 'es', // Formato deseado
  };
  ngOnInit() {}
  constructor(private fb: FormBuilder) {
    this.filterGroup = this.fb.group({
      date: [''],
      license_plate_number: [''],
      id_servicio: [''],
      city: [''],
    });
  }
  submitFilter() {
    console.log(this.filterGroup.value);
    this.filterForm.emit(this.filterGroup);
  }
  cleanFilter() {
    this.filterGroup.reset();
    this.clean.emit(true);
  }
}
