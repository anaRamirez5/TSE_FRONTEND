import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import {
  ILogin,
  ISession,
  roleRoute,
} from '../../../models/auth/auth.interface';
import { BodyResponse } from '../../../models/shared/body-response.interface';
import { SessionStorageItems } from '../../../../enums/session-storage';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../../enums/routes.enum';
import { ModalInformativeComponent } from '../../shared/modal-informative/modal-informative.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  rol: string = '';
  roleRoutes: roleRoute = {
    1: `/${RoutesApp.LAYOUT}/${RoutesApp.ADMIN}`,
    2: `/${RoutesApp.LAYOUT}/${RoutesApp.COORDINATOR}`,
    3: `/${RoutesApp.DRIVER}`,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  login(payload: ILogin) {
    this.authService.login(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        if (response.data) {
          this.openDialog(
            response.code,
            response.code === 200
              ? 'Inicio sesion correctamente'
              : response.data
          );
          sessionStorage.setItem(SessionStorageItems.SESSION, response.data);
          this.decodedToken(response.data);
          const targetRoute: string =
            this.roleRoutes[Number(this.rol) as 1 | 2 | 3];
          if (targetRoute) {
            this.router.navigate([targetRoute]);
          } else {
            this.openDialog(204, 'Rol no autorizado');
          }
        }
      },
    });
  }

  decodedToken(data: string) {
    const decodedToken: ISession = jwtDecode(data);
    this.rol = decodedToken.role_id;
    console.log(this.rol);

    const sessionData = {
      [SessionStorageItems.USER_ID]: decodedToken.user_id,
      [SessionStorageItems.ROL]: this.rol,
      [SessionStorageItems.USER_NAME]: decodedToken.user_name,
      [SessionStorageItems.USER_MAIL]: decodedToken.user_mail,
      [SessionStorageItems.CAR_ID]: decodedToken.car_id,
      [SessionStorageItems.DOC_ID]: decodedToken.doc_id,
    };

    Object.entries(sessionData).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  }
  openDialog(response: number, content: string): void {
    const dialogRef = this.dialog.open(ModalInformativeComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '80vh',
      data: { response: response, content: content },
    });
  }
}
