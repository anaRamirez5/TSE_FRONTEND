import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HistoryTable } from '../../../../models/admin/admin.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  data: HistoryTable[] = [
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
    {
      date: '23/12/2024',
      license_plate_number: 'asdasd',
      hour_end: '07:30',
      hour_start: '06:30',
      adress_end: 'asdasd',
      adress_start: 'adasdasd',
      departament: 'asdsad',
      city: 'asdasd',
      municipality: 'asdasdasd',
    },
  ];
  extractFilterData(event: FormGroup) {
    console.log(event);
  }
}
