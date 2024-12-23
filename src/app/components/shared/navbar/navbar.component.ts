import { Component, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../../enums/routes.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  component = input.required<string>();
  assignmentsActive: boolean = false;
  servicesAddActive: boolean = false;
  historyActive: boolean = false;
  route: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.isActive('assignments');
  }
  isActive(route: string) {
    if (route === 'assignments') {
      this.assignmentsActive = true;
      this.historyActive = false;
      this.servicesAddActive = false;
      this.route =
        this.component() === 'driver'
          ? `/${RoutesApp.DRIVER}/`
          : `/${RoutesApp.LAYOUT}/${RoutesApp.COORDINATOR}/`;
      this.router.navigate([this.route + `${RoutesApp.ASSIGMENTS}`]);
    } else if (route === 'services_add') {
      this.assignmentsActive = false;
      this.historyActive = false;
      this.servicesAddActive = true;
      this.router.navigate([
        `/${RoutesApp.DRIVER}/${RoutesApp.ADDITIONAL_DRIVER}`,
      ]);
    } else {
      this.assignmentsActive = false;
      this.historyActive = true;
      this.servicesAddActive = false;
      this.router.navigate([this.route + `${RoutesApp.HISTORY}`]);
    }
  }
}
