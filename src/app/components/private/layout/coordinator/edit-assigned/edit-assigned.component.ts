import { Component, input, Input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoordinatorService } from '../../../../../core/services/coordinator/coordinator.service';
import { BodyResponse } from '../../../../../core/models/shared/body-response.interface';
import { startOrEnd } from '../../../../../core/models/driver/driver.interface';

@Component({
  selector: 'app-edit-assigned',
  templateUrl: './edit-assigned.component.html',
  styleUrl: './edit-assigned.component.css',
})
export class EditAsignComponent {
  closeModal = output<boolean>();
  handleToastEdit = output<boolean>();
  id = input.required<number>();
  error: boolean = false;
  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private programmerService: CoordinatorService
  ) {
    this.updateForm = this.fb.group({
      placa_movil: [null, Validators.required],
    });
  }

  closeModalFn() {
    this.closeModal.emit(true);
  }
  editDriver() {
    const payload: startOrEnd = {
      id_servicio: this.id(),
      placa_movil: this.updateForm.get('placa_movil')?.value,
    };
    this.programmerService.updateDriver(payload).subscribe({
      next: (response: BodyResponse<string>) => {},
      error: () => {},
      complete: () => {},
    });

    this.handleToastEdit.emit(true);
    this.closeModal.emit(true);
  }
}
