import { Component, Input, input, OnInit, output } from '@angular/core';
import { HistoryTable } from '../../../../../models/admin/admin.interface';
import { SharedService } from '../../../../../services/shared/shared.service';
import { assignService } from '../../../../../models/coordinator/coordinator.interface';
import { DriverService } from '../../../../../services/driver/driver.service';
import {
  service,
  startOrEnd,
} from '../../../../../models/driver/driver.interface';
import { BodyResponse } from '../../../../../models/shared/body-response.interface';

@Component({
  selector: 'app-accordion-asign-driver',
  templateUrl: './accordion-asign-driver.component.html',
  styleUrl: './accordion-asign-driver.component.css',
})
export class AccordionAsignDriverComponent implements OnInit {
  isCollapsed = false; // Estado inicial
  handleEndJourney = true;
  data = input.required<assignService>();
  tab = input.required<string>();
  handle = output<boolean>();
  @Input() handleButtons: boolean = false;
  constructor(
    public sharedService: SharedService,
    private driverService: DriverService
  ) {}
  ngOnInit(): void {
    if (this.data().estado_servicio === 'confirmado') {
      this.handleButtons = true;
    } else {
      this.handleButtons = false;
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
        console.log(response);
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
        console.log('incio de viaje');
        this.handleEndJourney = false;
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
        console.log('fin de viaje');
        this.handleEndJourney = true;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
