import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from './core/enums/routes.enum';
import { CommonModule } from '@angular/common';
import { authGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: RoutesApp.LOGIN,
    loadChildren: () =>
      import('./components/public/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: RoutesApp.LAYOUT,
    loadChildren: () =>
      import('./components/private/layout/layout.module').then(
        (m) => m.LayoutModule
      ),
    canActivate: [authGuard],
  },

  {
    path: RoutesApp.DRIVER,
    loadChildren: () =>
      import('./components/private/driver/driver.module').then(
        (m) => m.DriverModule
      ),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: RoutesApp.LOGIN,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
