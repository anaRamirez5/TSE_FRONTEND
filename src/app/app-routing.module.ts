import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { RoutesApp } from '../enums/routes.enum';
import { AdminComponent } from './components/private/layout/admin/admin.component';
import { LayoutComponent } from './components/private/layout/layout.component';
import { CoordinatorComponent } from './components/private/layout/coordinator/coordinator.component';
import { DriverComponent } from './components/private/driver/driver.component';
import { AssignmentsComponent } from './components/private/layout/coordinator/assignments/assignments.component';
import { AssignPerDayComponent } from './components/private/driver/assign-per-day/assign-per-day.component';
import { HistoryPerDriverComponent } from './components/private/driver/history-per-driver/history-per-driver.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      //Login
      { path: RoutesApp.LOGIN, component: LoginComponent },
    ],
  },
  {
    path: RoutesApp.LAYOUT,
    component: LayoutComponent,
    children: [
      //Admin
      { path: RoutesApp.ADMIN, component: AdminComponent },
      //Coordinator
      {
        path: RoutesApp.COORDINATOR,
        component: CoordinatorComponent,
        children: [
          { path: RoutesApp.ASSIGMENTS, component: AssignmentsComponent },
          //Coordinator
          { path: RoutesApp.HISTORY, component: AdminComponent },
        ],
      },
    ],
  },
  {
    path: RoutesApp.DRIVER,
    component: DriverComponent,
    children: [
      { path: RoutesApp.ASSIGMENTS, component: AssignPerDayComponent },
      //Coordinator
      { path: RoutesApp.HISTORY, component: HistoryPerDriverComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
