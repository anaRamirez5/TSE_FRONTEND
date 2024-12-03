import { Component } from '@angular/core';
import { HistoryTable } from '../../../../../models/admin/admin.interface';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent {
  handleModalEdit: boolean = false;
  handleModalDetail: boolean = false;
  handleToast: boolean = false;
  handleToastEdit: boolean = false;
  action: string = '';
  data: HistoryTable = {
    id_servicio: 123123,
    name_applicant: 'asdasd',
    total_records: 12,
    adress_end: 'asdasd',
    adress_start: 'sadsa',
    hour_end: 'asdas',
    hour_start: 'asdasd',
    product_code: 'asaddsa',
    product_city: 'asdasd',
    product_name: 'asdas',
    date: 'asdasd',
    license_plate_number: 'asdasd',
    requirements: 'asdasd',
    city: 'asdasd',
    name_driver: 'asdasd',
    type_car: 'asdasd',
    type_document: 'asdasd',
  };

  editDriverAssign() {
    this.handleModalEdit = true;
    console.log('entro');
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
  openDialogDetail() {
    this.handleModalDetail = true;
  }
  cancelToastHandle(event: boolean) {
    this.handleToast = event;
    this.action = 'cancel';
    setTimeout(() => {
      this.handleToast = false;
    }, 3000);
  }
  closeModalCancel(event: boolean) {
    this.handleModalDetail = !event;
  }
}
