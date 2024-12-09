import { Component, Input, input } from '@angular/core';
import { HistoryTable } from '../../../../../models/admin/admin.interface';
import { SharedService } from '../../../../../services/shared/shared.service';

@Component({
  selector: 'app-accordion-asign-driver',
  templateUrl: './accordion-asign-driver.component.html',
  styleUrl: './accordion-asign-driver.component.css',
})
export class AccordionAsignDriverComponent {
  isCollapsed = false; // Estado inicial
  data = input.required<HistoryTable>();
  @Input() handleButtons: boolean = false;
  constructor(public sharedService: SharedService) {}
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  acceptService() {
    this.handleButtons = true;
  }
}
