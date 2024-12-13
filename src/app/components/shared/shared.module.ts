import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInformativeComponent } from './modal-informative/modal-informative.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastComponent } from './toast/toast.component';
import { DetailServicesComponent } from './detail-services/detail-services.component';
import { RouterModule } from '@angular/router';

// Configura el locale a español
defineLocale('es', esLocale);
@NgModule({
  declarations: [
    ModalInformativeComponent,
    PaginatorComponent,
    NavbarComponent,
    DetailServicesComponent,
    FiltersComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule, 
  ],
  exports: [
    ModalInformativeComponent,
    PaginatorComponent,
    DetailServicesComponent,
    NavbarComponent,
    FiltersComponent,
    ToastComponent,
    CommonModule,
  ],
})
export class SharedModule {}
