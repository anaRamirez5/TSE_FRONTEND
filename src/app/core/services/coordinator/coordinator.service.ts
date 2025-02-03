import { Injectable } from '@angular/core';
import { Filter, stadisticget } from '../../models/shared/shared.interface';
import { HttpClient } from '@angular/common/http';
import { EndPointRoute } from '../../enums/routes.enum';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { HistoryTable } from '../../models/admin/admin.interface';
import { environment } from '../../../../environments/environment';
import {
  assignService,
  stadistic,
} from '../../models/coordinator/coordinator.interface';
import { startOrEnd } from '../../models/driver/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class CoordinatorService {
  constructor(private http: HttpClient) {}

  getAssignTable(payload: Filter) {
    return this.http.post<BodyResponse<assignService[]>>(
      `${environment.API_PUBLIC}${EndPointRoute.ASSIGN_SERVICES_PROGRAMMER}`,
      payload
    );
  }
  updateDriver(payload: startOrEnd) {
    return this.http.post<BodyResponse<string>>(
      `${environment.API_PUBLIC}${EndPointRoute.UPDATE_ASIGN_SERVICES}`,
      payload
    );
  }
  getStadictic(payload: stadisticget) {
    return this.http.post<BodyResponse<stadistic>>(
      `${environment.API_PUBLIC}${EndPointRoute.STADISTIC}`,
      payload
    );
  }
}
