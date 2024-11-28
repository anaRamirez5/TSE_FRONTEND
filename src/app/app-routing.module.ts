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
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: RoutesApp.LOGIN,
    component: LoginComponent, // Ruta para login
  },
  {
    path: RoutesApp.LAYOUT,
    component: LayoutComponent, // Componente que contiene el layout de la aplicación
    canActivate: [authGuard], // Usamos canActivate aquí para proteger la ruta principal
    children: [
      {
        path: RoutesApp.ADMIN,
        component: AdminComponent,
      },
      {
        path: RoutesApp.COORDINATOR,
        component: CoordinatorComponent,
        children: [
          {
            path: RoutesApp.ASSIGMENTS,
            component: AssignmentsComponent,
          },
          {
            path: RoutesApp.HISTORY,
            component: AdminComponent,
          },
        ],
      },
    ],
  },
  {
    path: RoutesApp.DRIVER,
    component: DriverComponent,
    canActivate: [authGuard],
    children: [
      {
        path: RoutesApp.ASSIGMENTS,
        component: AssignPerDayComponent,
      },
      {
        path: RoutesApp.HISTORY,
        component: HistoryPerDriverComponent,
      },
    ],
  },
  // Ruta por defecto para redirigir si el usuario está autenticado
  {
    path: '',
    redirectTo: RoutesApp.LOGIN,
    pathMatch: 'full', // Esto asegura que solo se redirija a login si el path está vacío
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
