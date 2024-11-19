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
      date: [null],
      license_plate_number: [null],
      departament: [null],
      city: [null],
    });
  }
  submitFilter() {
    this.filterForm.emit(this.filterGroup.value);
  }
  cleanFilter() {
    this.filterGroup.reset();
  }
}
