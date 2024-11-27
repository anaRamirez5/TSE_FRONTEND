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
  formatDate(date: string) {
    const date_filter = new Date(date);
    const day = String(date_filter.getDate()).padStart(2, '0');
    const month = String(date_filter.getMonth() + 1).padStart(2, '0');
    const year = date_filter.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
