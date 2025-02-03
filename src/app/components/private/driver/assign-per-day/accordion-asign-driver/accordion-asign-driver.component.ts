import { Component, Input, input, OnInit, output } from '@angular/core';
import { assignService } from '../../../../../core/models/coordinator/coordinator.interface';
import { DriverService } from '../../../../../core/services/driver/driver.service';
import {
  service,
  startOrEnd,
} from '../../../../../core/models/driver/driver.interface';
import { BodyResponse } from '../../../../../core/models/shared/body-response.interface';
import { SessionStorageItems } from '../../../../../core/enums/session-storage';
import { SharedService } from '../../../../../core/services/shared/shared.service';

@Component({
  selector: 'app-accordion-asign-driver',
  templateUrl: './accordion-asign-driver.component.html',
  styleUrl: './accordion-asign-driver.component.css',
})
export class AccordionAsignDriverComponent implements OnInit {
  isCollapsed = false; // Estado inicial
  handleEndJourney = true;
  license_plate_number: string = '';
  data = input.required<assignService>();
  tab = input.required<string>();
  handle = output<boolean>();
  @Input() handleButtons: boolean = false;
  constructor(
    public sharedService: SharedService,
    private driverService: DriverService
  ) {}
  ngOnInit() {
    this.license_plate_number =
      sessionStorage.getItem(SessionStorageItems.CAR_ID) ?? '';
    this.handleButtons = this.data().estado_servicio === 'confirmado';
    this.handleButtonsJourney();
  }

  handleButtonsJourney() {
    if (this.data().inicio_viaje !== null) {
      this.handleEndJourney = false;
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  acceptService(handle: boolean) {
    const payload: service = {
      id_servicio: [this.data().id_servicio],
      placa_movil: this.data().placa_movil,
      confirmar_servicio: handle,
    };
    this.driverService.confirmedService(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        this.handleButtons = true;
        this.handle.emit(true);
      },
      error: () => {},
      complete: () => {},
    });
  }
  acceptServiceOrpah(handle: boolean) {
    const payload: startOrEnd = {
      id_servicio: this.data().id_servicio,
      placa_movil: this.data().placa_movil || this.license_plate_number,
    };
    this.driverService.confirmedServiceOrphan(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        this.handleButtons = true;
        this.handle.emit(true);
      },
      error: () => {},
      complete: () => {},
    });
  }
  startJourney() {
    const payload: startOrEnd = {
      id_servicio: this.data().id_servicio,
      placa_movil: this.data().placa_movil,
    };
    this.driverService.startJourney(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        this.handleEndJourney = false;
        this.handle.emit(true);
      },
      error: () => {},
      complete: () => {},
    });
  }

  endJourney() {
    const payload: startOrEnd = {
      id_servicio: this.data().id_servicio,
      placa_movil: this.data().placa_movil,
    };
    this.driverService.endJourney(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        this.handleEndJourney = true;
        this.handle.emit(true);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
