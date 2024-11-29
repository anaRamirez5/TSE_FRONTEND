import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from '../../private/layout/layout.component';
import { LayoutModule } from '../../private/layout/layout.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, LayoutModule],
  exports: [LoginComponent],
})
export class LoginModule {}
