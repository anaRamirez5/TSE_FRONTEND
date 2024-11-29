import { Component, output } from '@angular/core';

@Component({
  selector: 'app-cancel-services',
  templateUrl: './cancel-services.component.html',
  styleUrl: './cancel-services.component.css',
})
export class CancelServicesComponent {
  closeModal = output<boolean>();
  error: boolean = false;
  closeModalFn() {
    this.closeModal.emit(true);
  }
  cancelService() {
    this.closeModal.emit(true);
  }
}
