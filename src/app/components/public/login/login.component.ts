import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { ILogin, ISession } from '../../../models/auth/auth.interface';
import { BodyResponse } from '../../../models/shared/body-response.interface';
import { SessionStorageItems } from '../../../../enums/session-storage';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../../enums/routes.enum';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  rol!: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      user_name: [null, Validators.required],
      user_password: [null, Validators.required],
    });
  }
  login() {
    const payload: ILogin = {
      username: this.loginForm.get('user_name')?.value,
      password: this.loginForm.get('user_password')?.value,
    };
    this.authService.login(payload).subscribe({
      next: (response: BodyResponse<string>) => {
        if (response.code === 200) {
          console.log(response);
          sessionStorage.setItem(SessionStorageItems.SESSION, response.data);
          this.decodedToken(response.data);
          if (this.rol == '1') {
            this.router.navigate([
              '/' + RoutesApp.LAYOUT + '/' + RoutesApp.ADMIN,
            ]);
          } else if (this.rol == '2') {
            this.router.navigate([
              '/' + RoutesApp.LAYOUT + '/' + RoutesApp.COORDINATOR,
            ]);
          } else if (this.rol == '3') {
            this.router.navigate(['/' + RoutesApp.DRIVER]);
          } else {
            console.log('error');
          }
        }
      },
      error: (err: any) => {},
    });
  }
  decodedToken(data: string) {
    const decodedToken: ISession = jwtDecode(data);
    this.rol = decodedToken.role_id;
    console.log(this.rol);
    const user_id = decodedToken.user_id;
    const user_name = decodedToken.user_name;
    const user_mail = decodedToken.user_mail;
    const car_id = decodedToken.car_id;
    const doc_id = decodedToken.doc_id;
    sessionStorage.setItem(SessionStorageItems.USER_ID, user_id);
    sessionStorage.setItem(SessionStorageItems.ROL, this.rol);
    sessionStorage.setItem(SessionStorageItems.USER_NAME, user_name);
    sessionStorage.setItem(SessionStorageItems.USER_MAIL, user_mail);
    sessionStorage.setItem(SessionStorageItems.CAR_ID, car_id);
    sessionStorage.setItem(SessionStorageItems.DOC_ID, doc_id);
  }
}
