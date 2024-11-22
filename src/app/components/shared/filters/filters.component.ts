import { Component, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as bootstrap from 'bootstrap';

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
  ngOnInit() {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  constructor(private fb: FormBuilder) {
    this.filterGroup = this.fb.group({
      date: [''],
      license_plate_number: [''],
      department: [''],
      city: [''],
    });
  }
  submitFilter() {
    this.filterForm.emit(this.filterGroup);
  }
  cleanFilter() {
    this.filterGroup.reset();
    this.clean.emit(true);
  }
}
