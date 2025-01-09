import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { DriverService } from '../../../../core/services/driver/driver.service';
import { SharedService } from '../../../../core/services/shared/shared.service';
import {
  Filter,
  FilterDriver,
} from '../../../../core/models/shared/shared.interface';
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
  filter!: Filter;
  idsServices: number[] = [];
  finalResponse: boolean = true;
  handleRoute: boolean = false;
  handle: boolean = false;
  tomorrow: string = '';
  license_plate_number: string = '';
  dateSave: string | null = '';
  pageSize: number = 10;
  pageIndex: number = 1;
  constructor(
    private driverService: DriverService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.initializeData();
    this.getAssignedServices({
      date: this.tommorrowDate(),
    });
    this.updateActiveRoutes();
  }

  initializeData(): void {
    this.license_plate_number =
      sessionStorage.getItem(SessionStorageItems.CAR_ID) ?? '';
  }

  updateActiveRoutes() {
    const activeTrip = this.assignedServices.find(
      (service) => service.inicio_viaje && !service.fin_viaje
    );
    if (activeTrip) {
      const activeRoute = activeTrip.sector_ruta;
      this.assignedServices.forEach((service) => {
        service.isButtonEnabled = this.shouldEnableButton(service, activeRoute);
      });
    } else {
      this.assignedServices.forEach((service) => {
        service.isButtonEnabled = false;
      });
    }
  }
  shouldEnableButton(
    service: assignService,
    activeSector: string | null
  ): boolean {
    if (service.sector_ruta === null) {
      return true;
    } else if (service.sector_ruta === activeSector) {
      if (service.inicio_viaje !== null) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  tommorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  async getAssignedServices(payload: FilterDriver) {
    this.finalResponse = true;
    try {
      const response: BodyResponse<assignService[]> = await firstValueFrom(
        this.driverService.getAssignedServices(payload)
      );
      if (response.code === 200) {
        this.processAssignedServices(response.data);
        this.finalResponse = false;
      }
    } catch (err) {
      this.finalResponse = false;
    }
  }
  processAssignedServices(services: assignService[]): void {
    this.assignedServices = services;
    this.idsServices = services
      .filter((item) => item.estado_servicio === 'asignado')
      .map((item) => item.id_servicio);

    this.handleRoute = this.idsServices.length === 0;
    this.updateActiveRoutes();
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
    const payload: FilterDriver = {
      date: this.filter.date,
    };

    this.getAssignedServices(payload);
  }
  refresh(handle: boolean) {
    if (handle) {
      this.dateSave = this.filter.date || null;
      if (!this.dateSave) {
        this.ngOnInit();
      } else {
        this.getAssignedServices({ date: this.dateSave });
      }
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
