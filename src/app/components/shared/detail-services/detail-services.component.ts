import { Component, input, output } from '@angular/core';
import { HistoryTable } from '../../../models/admin/admin.interface';
import { assignService } from '../../../models/coordinator/coordinator.interface';

@Component({
  selector: 'app-detail-services',
  templateUrl: './detail-services.component.html',
  styleUrl: './detail-services.component.css',
})
export class DetailServicesComponent {
  closeModal = output<boolean>();
  handleCancel = input.required<boolean>();
  data = input.required<assignService | HistoryTable>();
  error: boolean = false;
  closeModalFn() {
    this.closeModal.emit(true);
  }
}
