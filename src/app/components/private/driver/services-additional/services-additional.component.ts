import { Component } from '@angular/core';
import {
  assignService,
  service,
} from '../../../../models/driver/driver.interface';
import { BodyResponse } from '../../../../models/shared/body-response.interface';
import { FormGroup } from '@angular/forms';
import { SessionStorageItems } from '../../../../../enums/session-storage';
import { Filter } from '../../../../models/shared/shared.interface';
import { DriverService } from '../../../../services/driver/driver.service';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
  selector: 'app-services-additional',
  templateUrl: './services-additional.component.html',
  styleUrl: './services-additional.component.css',
})
export class ServicesAdditionalComponent {
  assignedServices: any[] = [];
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

  ngOnInit(): void {
    this.license_plate_number =
      sessionStorage.getItem(SessionStorageItems.CAR_ID) ?? '';
    this.tomorrow = this.tommorrowDate();
    this.getAssignedServices();
  }
  tommorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
  getAssignedServices() {
    this.finalResponse = true;
    this.driverService.getAssignedServices().subscribe({
      next: (response: BodyResponse<assignService[]>) => {
        if (response.code === 200) {
          this.assignedServices = response.data;

          this.assignedServices.forEach((service) => {
            if (service.estado_servicio === 'asignado') {
              this.idsServices.push(service.id_servicio);
            } else {
            }
          });
        } else {
          this.assignedServices = [];
        }
      },
      error: () => {
        this.assignedServices = [];
        this.finalResponse = false;
      },
      complete: () => {
        this.finalResponse = false;
      },
    });
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
      this.getAssignedServices();
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
        console.log(response);
        this.handleRoute = true;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
