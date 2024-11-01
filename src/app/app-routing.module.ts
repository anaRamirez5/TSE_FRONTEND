import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { RoutesApp } from '../enums/routes.enum';
import { AdminComponent } from './components/private/layout/admin/admin.component';
import { LayoutComponent } from './components/private/layout/layout.component';
import { CoordinatorComponent } from './components/private/layout/coordinator/coordinator.component';
import { DriverComponent } from './components/private/driver/driver.component';

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
      { path: RoutesApp.COORDINATOR, component: CoordinatorComponent },
    ],
  },
  {
    path: RoutesApp.DRIVER,
    component: DriverComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
