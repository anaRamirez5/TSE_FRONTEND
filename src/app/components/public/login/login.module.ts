import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from '../../private/layout/layout.component';
import { LayoutModule } from '../../private/layout/layout.module';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
