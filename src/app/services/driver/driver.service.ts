import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointRoute } from '../../../enums/routes.enum';
import { environment } from '../../../environments/environment';
import { HistoryTable } from '../../models/admin/admin.interface';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { Filter } from '../../models/shared/shared.interface';

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
}
