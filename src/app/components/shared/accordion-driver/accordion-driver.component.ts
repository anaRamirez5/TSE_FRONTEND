import { Component, input } from '@angular/core';
import { HistoryTable } from '../../../models/admin/admin.interface';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-accordion-driver',
  templateUrl: './accordion-driver.component.html',
  styleUrl: './accordion-driver.component.css',
})
export class AccordionDriverComponent {
  isCollapsed = false; // Estado inicial
  data = input.required<HistoryTable>();
  constructor(public sharedService: SharedService) {}
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
