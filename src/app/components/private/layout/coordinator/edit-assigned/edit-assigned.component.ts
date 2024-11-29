import { Component, input, Input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-edit-assigned',
  templateUrl: './edit-assigned.component.html',
  styleUrl: './edit-assigned.component.css',
})
export class EditAsignComponent {
  closeModal = output<boolean>();
  error: boolean = false;

  constructor() {}

  closeModalFn() {
    this.closeModal.emit(true);
  }
  editDriver() {
    this.closeModal.emit(true);
  }
}
