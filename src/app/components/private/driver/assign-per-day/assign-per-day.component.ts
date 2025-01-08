import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { DriverService } from '../../../../core/services/driver/driver.service';
import { SharedService } from '../../../../core/services/shared/shared.service';
import { Filter } from '../../../../core/models/shared/shared.interface';
import { assignService } from '../../../../core/models/coordinator/coordinator.interface';
import { service } from '../../../../core/models/driver/driver.interface';
import { SessionStorageItems } from '../../../../core/enums/session-storage';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-assign-per-day',
  templateUrl: './assign-per-day.component.html',
  styleUrl: './assign-per-day.component.css',
})
export class AssignPerDayComponent implements OnInit {
  assignedServices: assignService[] = [];
  finalResponse: boolean = true;
  idsServices: number[] = [];
  handle = false;
  tomorrow: string = '';
  license_plate_number: string = '';
  handleRoute: boolean = false;
  pageSize: number = 10;
  filter!: Filter;
  pageIndex: number = 1;
  constructor(
    private driverService: DriverService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.license_plate_number =
      sessionStorage.getItem(SessionStorageItems.CAR_ID) ?? '';
    this.tomorrow = this.tommorrowDate();
    this.getAssignedServices().then(() => {
      this.assignedServices.forEach((item) => {
        console.log(item.estado_servicio);
      });
      if (this.idsServices.length > 0) {
        this.handleRoute = false;
      } else {
        this.handleRoute = true;
      }
      this.updateActiveRoutes();
    });
  }

  updateActiveRoutes() {
    const viajeIniciado = this.assignedServices.find(
      (service) => service.inicio_viaje != null && service.fin_viaje === null
    );

    if (viajeIniciado) {
      const rutaActiva = viajeIniciado.sector_ruta;
      this.assignedServices.forEach((service) => {
        if (service.sector_ruta === null) {
          service.isButtonEnabled = true;
        } else if (service.sector_ruta === rutaActiva) {
          if (service.inicio_viaje !== null) {
            service.isButtonEnabled = true;
          } else {
            service.isButtonEnabled = false;
          }
        } else {
          service.isButtonEnabled = true;
        }
      });
    } else {
      this.assignedServices.forEach((service) => {
        service.isButtonEnabled = false;
        if (service.inicio_viaje !== null && service.fin_viaje !== null) {
          service.isButtonEnabled = true;
          return;
        }
      });
    }
  }

  tommorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
  async getAssignedServices() {
    this.finalResponse = true;
    try {
      const response: BodyResponse<assignService[]> = await firstValueFrom(
        this.driverService.getAssignedServices()
      );
      if (response.code === 200) {
        this.assignedServices = response.data;
        this.assignedServices.forEach((service) => {
          if (service.estado_servicio === 'asignado') {
            this.idsServices.push(service.id_servicio);
          }
        });
        this.finalResponse = false;
      }
    } catch (err) {
      this.finalResponse = false;
    }
  }
  handleClean(event: boolean) {
    if (event) {
      this.handle = false;
      this.ngOnInit();
    }
  }
  extractFilterData(event?: FormGroup) {
    if (event) {
      this.filter = event.value;
    }
    const formattedDate = this.sharedService.formatDate(this.filter.date || '');
    this.filter.date = this.filter.date ? formattedDate : '';
    this.handle = true;
    this.pageIndex = 1;

    this.getAssignedServices();
  }
  refresh(handle: boolean) {
    if (handle) {
      this.ngOnInit();
    }
  }
  acceptRoute(handle: boolean) {
    const payload: service = {
      id_servicio: this.idsServices,
      placa_movil: this.license_plate_number,
      confirmar_servicio: handle,
    };
    this.driverService.confirmedService(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        this.handleRoute = true;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
