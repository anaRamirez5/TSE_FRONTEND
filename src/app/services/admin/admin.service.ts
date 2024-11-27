import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter, HistoryTable } from '../../models/admin/admin.interface';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { environment } from '../../../environments/environment';
import { EndPointRoute } from '../../../enums/routes.enum';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getHistoryTable(payload: Filter) {
    return this.http.post<BodyResponse<HistoryTable[]>>(
      `${environment.API_PUBLIC}${EndPointRoute.HISORY_TABLE_ADMIN}`,
      payload
    );
  }
}
