import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApp } from '../../../../enums/routes.enum';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css',
})
export class DriverComponent {
  handlePerfil: boolean = false;
  isOverlayVisible = false;
  constructor(private router: Router) {}

  openPerfil() {
    this.isOverlayVisible = true;
    setTimeout(() => {
      this.handlePerfil = true;
    }, 10); // Pequeña demora para asegurar que la clase se aplica después de que el DOM esté listo
  }

  closePerfil() {
    this.handlePerfil = false;
    setTimeout(() => {
      this.isOverlayVisible = false;
    }, 400); // Espera a que la animación de salida termine (0.4s)
  }

  logout() {
    this.router.navigate([RoutesApp.LOGIN]);
  }
}
