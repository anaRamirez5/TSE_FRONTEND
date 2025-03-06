import { Component } from '@angular/core';
import { orphanService } from '../../../../core/models/driver/driver.interface';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { SessionStorageItems } from '../../../../core/enums/session-storage';
import { DriverService } from '../../../../core/services/driver/driver.service';
import { SharedService } from '../../../../core/services/shared/shared.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-services-additional',
  templateUrl: './services-additional.component.html',
  styleUrl: './services-additional.component.css',
})
export class ServicesAdditionalComponent {
  assignedServices: orphanService[] = [];
  finalResponse: boolean = true;
  idsServices: number[] = [];
  city: string = '';
  handle = false;
  totalItems: number = 0;
  pageSize: number = 10;
  pageIndex: number = 1;
  license_plate_number: string = '';

  constructor(
    private driverService: DriverService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getAssignedServices(1, 10);
    this.license_plate_number =
      sessionStorage.getItem(SessionStorageItems.CAR_ID) ?? '';
    this.city = sessionStorage.getItem(SessionStorageItems.CITY) ?? '';
  }
  tommorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
  handlePageEvent(e: PageChangedEvent) {
    this.pageSize = e.itemsPerPage;
    this.pageIndex = e.page;
    this.getAssignedServices(this.pageIndex, this.pageSize);
  }

  getAssignedServices(page: number, page_size: number) {
    this.finalResponse = true;
    const payload = {
      service_date: new Date().toISOString().split('T')[0],
      // city: this.city,
      page: page,
      page_size: page_size,
    };
    this.driverService.getOrphanServices(payload).subscribe({
      next: (response: BodyResponse<orphanService[]>) => {
        if (response.code === 200) {
          this.assignedServices = response.data;
          this.totalItems = response.data[0].total_records;
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
      this.getAssignedServices(1, 10);
    }
  }
}
