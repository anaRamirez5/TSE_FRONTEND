import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-driver',
  templateUrl: './accordion-driver.component.html',
  styleUrl: './accordion-driver.component.css',
})
export class AccordionDriverComponent {
  isCollapsed = false; // Estado inicial

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
