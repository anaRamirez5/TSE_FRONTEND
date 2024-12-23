import { NgModule } from '@angular/core';
import { DriverComponent } from './driver.component';
import { AssignPerDayComponent } from './assign-per-day/assign-per-day.component';
import { HistoryPerDriverComponent } from './history-per-driver/history-per-driver.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AccordionDriverComponent } from './history-per-driver/accordion-driver/accordion-driver.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionAsignDriverComponent } from './assign-per-day/accordion-asign-driver/accordion-asign-driver.component';
import { DriverRoutingModule } from './driver-routing.module';
import { CommonModule } from '@angular/common';
import { ServicesAdditionalComponent } from './services-additional/services-additional.component';
@NgModule({
  declarations: [
    DriverComponent,
    AssignPerDayComponent,
    HistoryPerDriverComponent,
    AccordionDriverComponent,
    AccordionAsignDriverComponent,
    ServicesAdditionalComponent,
  ],
  imports: [SharedModule, CommonModule, TooltipModule, DriverRoutingModule],
})
export class DriverModule {}
