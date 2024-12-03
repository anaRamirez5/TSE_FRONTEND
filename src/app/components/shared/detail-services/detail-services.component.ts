import { Component, input, output } from '@angular/core';
import { HistoryTable } from '../../../models/admin/admin.interface';

@Component({
  selector: 'app-detail-services',
  templateUrl: './detail-services.component.html',
  styleUrl: './detail-services.component.css',
})
export class DetailServicesComponent {
  closeModal = output<boolean>();
  cancelToast = output<boolean>();
  handleCancel = input.required<boolean>();
  data = input.required<HistoryTable>();
  error: boolean = false;
  closeModalFn() {
    this.closeModal.emit(true);
  }
  cancelService() {
    this.cancelToast.emit(true);
    this.closeModal.emit(true);
  }
}
