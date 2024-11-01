import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../../enums/routes.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private router: Router) {}
  logout() {
    this.router.navigate([RoutesApp.LOGIN]);
  }
}
