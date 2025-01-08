import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { AssignPerDayComponent } from './assign-per-day/assign-per-day.component';
import { HistoryPerDriverComponent } from './history-per-driver/history-per-driver.component';
import { RoutesApp } from '../../../core/enums/routes.enum';
import { ServicesAdditionalComponent } from './services-additional/services-additional.component';

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
    children: [
      { path: RoutesApp.ASSIGMENTS, component: AssignPerDayComponent },
      { path: RoutesApp.HISTORY, component: HistoryPerDriverComponent },
      {
        path: RoutesApp.ADDITIONAL_DRIVER,
        component: ServicesAdditionalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
