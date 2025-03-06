import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import {
  ILogin,
  ISession,
  roleRoute,
} from '../../../core/models/auth/auth.interface';
import { BodyResponse } from '../../../core/models/shared/body-response.interface';
import { SessionStorageItems } from '../../../core/enums/session-storage';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../core/enums/routes.enum';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  rol: string = '';
  response: number = 0;
  content: string = '';
  openDialog: boolean = false;
  roleRoutes: roleRoute = {
    1: `/${RoutesApp.LAYOUT}/${RoutesApp.COORDINATOR}`,
    2: `/${RoutesApp.LAYOUT}/${RoutesApp.COORDINATOR}`,
    3: `/${RoutesApp.DRIVER}`,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  login(payload: ILogin) {
    this.authService.login(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        if (response.code === 200) {
          this.openDialog = true;
          this.response = response.code;
          this.content = response.code
            ? 'Inicio de Sesion exitoso'
            : response.data;
          sessionStorage.setItem(SessionStorageItems.SESSION, response.data);
          this.decodedToken(response.data);

          setTimeout(() => {
            this.openDialog = false;
            const targetRoute: string =
              this.roleRoutes[Number(this.rol) as 1 | 2 | 3];
            if (targetRoute) {
              this.router.navigate([targetRoute]);
            }
          }, 2000);
        } else {
          this.openDialog = true;
          this.response = response.code;
          this.content = response.data;
          setTimeout(() => {
            this.openDialog = false;
          }, 2000);
        }
      },
    });
  }

  decodedToken(data: string) {
    const decodedToken: ISession = jwtDecode(data);
    console.log(decodedToken);
    this.rol = decodedToken.role_id;
    const sessionData = {
      [SessionStorageItems.USER_ID]: decodedToken.user_id,
      [SessionStorageItems.ROL]: this.rol,
      [SessionStorageItems.USER_NAME]: decodedToken.user_name,
      [SessionStorageItems.USER_MAIL]: decodedToken.user_mail,
      [SessionStorageItems.CAR_ID]: decodedToken.car_id,
      [SessionStorageItems.CITY]: decodedToken.city,
      [SessionStorageItems.DOC_ID]: decodedToken.doc_id,
    };

    Object.entries(sessionData).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  }
}
