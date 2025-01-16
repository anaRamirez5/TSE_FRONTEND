import { Component } from '@angular/core';
import { orphanService } from '../../../../core/models/driver/driver.interface';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { SessionStorageItems } from '../../../../core/enums/session-storage';
import { DriverService } from '../../../../core/services/driver/driver.service';
import { SharedService } from '../../../../core/services/shared/shared.service';

@Component({
  selector: 'app-services-additional',
  templateUrl: './services-additional.component.html',
  styleUrl: './services-additional.component.css',
})
export class ServicesAdditionalComponent {
  assignedServices: orphanService[] = [];
  finalResponse: boolean = true;
  idsServices: number[] = [];
  handle = false;
  license_plate_number: string = '';

  constructor(
    private driverService: DriverService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getAssignedServices();
    this.license_plate_number =
      sessionStorage.getItem(SessionStorageItems.CAR_ID) ?? '';
  }
  tommorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
  getAssignedServices() {
    this.finalResponse = true;
    const payload = {
      service_date: new Date().toISOString().split('T')[0],
    };
    console.log(payload);
    this.driverService.getOrphanServices(payload).subscribe({
      next: (response: BodyResponse<orphanService[]>) => {
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
  refresh(handle: boolean) {
    if (handle) {
      this.getAssignedServices();
    }
  }
}
