import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointRoute } from '../../../enums/routes.enum';
import { environment } from '../../../environments/environment';
import { HistoryTable } from '../../models/admin/admin.interface';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { Filter } from '../../models/shared/shared.interface';
import { assignService } from '../../models/coordinator/coordinator.interface';
import { service, startOrEnd } from '../../models/driver/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getHistoryTable(payload: Filter) {
    return this.http.post<BodyResponse<HistoryTable[]>>(
      `${environment.API_PUBLIC}${EndPointRoute.HISORY_TABLE_DRIVER}`,
      payload
    );
  }
  getAssignedServices() {
    return this.http.post<BodyResponse<assignService[]>>(
      `${environment.API_PUBLIC}${EndPointRoute.ASSIGN_SERVICES_DRIVER}`,
      null
    );
  }
  confirmedService(payload: service) {
    return this.http.post<BodyResponse<string>>(
      `${environment.API_PUBLIC}${EndPointRoute.CONFIRM_SERVICES}`,
      payload
    );
  }
  startJourney(payload: startOrEnd) {
    return this.http.post<BodyResponse<string>>(
      `${environment.API_PUBLIC}${EndPointRoute.START_JOURNEY}`,
      payload
    );
  }
  endJourney(payload: startOrEnd) {
    return this.http.post<BodyResponse<string>>(
      `${environment.API_PUBLIC}${EndPointRoute.END_JOURNEY}`,
      payload
    );
  }
}
