import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointRoute } from '../../../enums/routes.enum';
import { environment } from '../../../environments/environment';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { City, Status } from '../../models/shared/shared.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
  formatDate(date: string) {
    const date_filter = new Date(date);
    const day = String(date_filter.getDate()).padStart(2, '0');
    const month = String(date_filter.getMonth() + 1).padStart(2, '0');
    const year = date_filter.getFullYear();
    return `${year}-${month}-${day}`;
  }

  convertTo12HourFormat(hour24: string): string {
    let [hours, minutes] = hour24.split(':').map(Number);
    const isAM = hours < 12;
    let period = isAM ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    let formattedTime = `${hours}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${period}`;
    return formattedTime;
  }
  getCitys() {
    const payload = {
      entity: 'ciudades',
    };
    return this.http.post<BodyResponse<City[]>>(
      `${environment.API_PUBLIC}${EndPointRoute.CATALOGS}`,
      payload
    );
  }
  getStatus() {
    const payload = {
      entity: 'estados',
    };
    return this.http.post<BodyResponse<Status[]>>(
      `${environment.API_PUBLIC}${EndPointRoute.CATALOGS}`,
      payload
    );
  }
}
