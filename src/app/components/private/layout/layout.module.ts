import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { AssignmentsComponent } from './coordinator/assignments/assignments.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AdminComponent,
    CoordinatorComponent,
    AssignmentsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LayoutModule {}
