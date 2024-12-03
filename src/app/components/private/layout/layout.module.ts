import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { AssignmentsComponent } from './coordinator/assignments/assignments.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { EditAsignComponent } from './coordinator/edit-assigned/edit-assigned.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AdminComponent,
    CoordinatorComponent,
    AssignmentsComponent,
    EditAsignComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PaginationModule,
    RouterModule,
    TooltipModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LayoutModule {}
