import { HttpClient } from '@angular/common/http';
import { CSP_NONCE, Injectable } from '@angular/core';
import { ILogin } from '../../models/auth/auth.interface';
import { BodyResponse } from '../../models/shared/body-response.interface';
import { environment } from '../../../../environments/environment';
import { EndPointRoute, RoutesApp } from '../../enums/routes.enum';
import { SessionStorageItems } from '../../enums/session-storage';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient, private router: Router) {}
  refreshThreshold = 110 * 1000;
  login(payload: ILogin) {
    return this.http.post<BodyResponse<string>>(
      `${environment.API_PUBLIC}${EndPointRoute.LOGIN}`,
      payload
    );
  }
  setToken(token: string) {
    sessionStorage.setItem(SessionStorageItems.SESSION, '');
    sessionStorage.setItem(SessionStorageItems.SESSION, token);
    this.tokenSubject.next(token);
  }

  isAuthenticated() {
    const sessionToken = sessionStorage.getItem(SessionStorageItems.SESSION);
    return !!sessionToken;
  }
  getToken(): string | null {
    return sessionStorage.getItem(SessionStorageItems.SESSION);
  }
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = new Date(payload.expire.replace(' ', 'T'));
    expirationDate.setHours(expirationDate.getHours() - 5);
    return expirationDate < new Date();
  }
  refreshToken(token: string) {
    return this.http.post<BodyResponse<any>>(
      `${environment.API_PUBLIC}${EndPointRoute.REFRESH_TOKEN}`,
      { token: token }
    );
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate([RoutesApp.LOGIN]);
    this.tokenSubject.next(null);
  }
}
