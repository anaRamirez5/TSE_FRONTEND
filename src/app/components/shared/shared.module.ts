import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInformativeComponent } from './modal-informative/modal-informative.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { AccordionDriverComponent } from './accordion-driver/accordion-driver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ModalInformativeComponent,
    PaginatorComponent,
    AccordionDriverComponent,
    NavbarComponent,
    FiltersComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ModalInformativeComponent,
    PaginatorComponent,
    AccordionDriverComponent,
    NavbarComponent,
    FiltersComponent,
  ],
})
export class SharedModule {}
