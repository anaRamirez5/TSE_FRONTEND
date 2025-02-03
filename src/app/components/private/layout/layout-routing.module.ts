import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { AdminComponent } from './admin/admin.component';
import { RoutesApp } from '../../../core/enums/routes.enum';
import { AssignmentsComponent } from './coordinator/assignments/assignments.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: RoutesApp.COORDINATOR,
        component: CoordinatorComponent,
        children: [
          { path: RoutesApp.ASSIGMENTS, component: AssignmentsComponent },
          { path: RoutesApp.HISTORY, component: AdminComponent },
        ],
      },
      { path: RoutesApp.ADMIN, component: AdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
