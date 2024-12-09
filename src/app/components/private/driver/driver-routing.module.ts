import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { AssignPerDayComponent } from './assign-per-day/assign-per-day.component';
import { HistoryPerDriverComponent } from './history-per-driver/history-per-driver.component';
import { RoutesApp } from '../../../../enums/routes.enum';

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
    children: [
      { path: RoutesApp.ASSIGMENTS, component: AssignPerDayComponent },
      { path: RoutesApp.HISTORY, component: HistoryPerDriverComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
