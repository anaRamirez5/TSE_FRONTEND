import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../models/auth/auth.interface';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { environment } from '../../../environments/environment';
import { EndPointRoute } from '../../../enums/routes.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(payload: ILogin) {
    return this.http.post<BodyResponse<string>>(
      `${environment.API_PUBLIC}${EndPointRoute.LOGIN}`,
      payload
    );
  }
}
