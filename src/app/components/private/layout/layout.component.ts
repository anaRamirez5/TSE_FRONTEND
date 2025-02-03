import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../core/enums/routes.enum';
import { SessionStorageItems } from '../../../core/enums/session-storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  user_name: string = '';
  role_name: string = '';
  constructor(private router: Router) {}
  ngOnInit() {
    this.user_name =
      sessionStorage.getItem(SessionStorageItems.USER_NAME) || '';
    this.role_name = sessionStorage.getItem(SessionStorageItems.ROL) || '';
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate([RoutesApp.LOGIN]);
  }
}
