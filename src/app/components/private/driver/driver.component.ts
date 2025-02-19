import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../core/enums/routes.enum';
import { SessionStorageItems } from '../../../core/enums/session-storage';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css',
})
export class DriverComponent implements OnInit {
  user_name: string = '';
  role_name: string = '';
  car_id: string = '';
  handlePerfil: boolean = false;
  isOverlayVisible = false;

  constructor(private router: Router) {}
  ngOnInit() {
    this.user_name =
      sessionStorage.getItem(SessionStorageItems.USER_NAME) || '';
    this.role_name = sessionStorage.getItem(SessionStorageItems.ROL) || '';
    this.car_id = sessionStorage.getItem(SessionStorageItems.CAR_ID) || '';
  }

  openPerfil() {
    this.isOverlayVisible = true;
    setTimeout(() => {
      this.handlePerfil = true;
    }, 10);
  }

  closePerfil() {
    this.handlePerfil = false;
    setTimeout(() => {
      this.isOverlayVisible = false;
    }, 400);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([RoutesApp.LOGIN]);
  }
}
