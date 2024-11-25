import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInformativeComponent } from './modal-informative/modal-informative.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { AccordionDriverComponent } from './accordion-driver/accordion-driver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Configura el locale a español
defineLocale('es', esLocale);
@NgModule({
  declarations: [
    ModalInformativeComponent,
    PaginatorComponent,
    AccordionDriverComponent,
    NavbarComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule,
  ],
  exports: [
    ModalInformativeComponent,
    PaginatorComponent,
    AccordionDriverComponent,
    NavbarComponent,
    FiltersComponent,
  ],
})
export class SharedModule {}
