import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AssignPerDayComponent } from './assign-per-day/assign-per-day.component';
import { HistoryPerDriverComponent } from './history-per-driver/history-per-driver.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [
    DriverComponent,
    AssignPerDayComponent,
    HistoryPerDriverComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DriverModule {}
