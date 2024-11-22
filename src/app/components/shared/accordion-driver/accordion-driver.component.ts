import { Component, input } from '@angular/core';
import { HistoryTable } from '../../../models/admin/admin.interface';

@Component({
  selector: 'app-accordion-driver',
  templateUrl: './accordion-driver.component.html',
  styleUrl: './accordion-driver.component.css',
})
export class AccordionDriverComponent {
  isCollapsed = false; // Estado inicial
  data = input.required<HistoryTable>();

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
