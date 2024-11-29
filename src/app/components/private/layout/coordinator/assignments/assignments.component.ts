import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent {
  handleModalEdit: boolean = false;
  handleModalCancel: boolean = false;
  handleToast: boolean = false;

  editDriverAssign() {
    this.handleModalEdit = true;
    console.log('entro');
  }
  closeModalEdit(event: boolean) {
    this.handleModalEdit = !event;
    this.handleToast = event;
    setTimeout(() => {
      this.handleToast = false;
    }, 3000);
  }
  cancelSerive() {
    this.handleModalCancel = true;
  }
  closeModalCancel(event: boolean) {
    this.handleModalCancel = !event;
    this.handleToast = event;
    setTimeout(() => {
      this.handleToast = false;
    }, 3000);
  }
}
