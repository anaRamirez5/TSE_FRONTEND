import { Injectable, OnDestroy } from '@angular/core';
import {
  merge,
  fromEvent,
  Subscription,
  tap,
  debounceTime,
  interval,
} from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserActivityServiceService implements OnDestroy {
  private activityEvents$ = merge(
    fromEvent(window, 'mousemove'),
    fromEvent(window, 'keydown'),
    fromEvent(window, 'click')
  );
  private subscription: Subscription | null = null;
  private refreshInterval = 5 * 60 * 1000; // Intervalo de verificación de actividad (1 minuto)

  constructor(private authService: AuthService) {}

  startMonitoring() {
    this.subscription = this.activityEvents$
      .pipe(
        tap(() => this.handleActivity()),
        debounceTime(100)
      )
      .subscribe();

    // Verificación periódica para determinar si el token sigue válido
    interval(this.refreshInterval)
      .pipe(tap(() => this.checkToken()))
      .subscribe();
  }

  stopMonitoring() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private handleActivity() {
    const token = this.authService.getToken();
    if (token && !this.authService.isTokenExpired()) {
      this.authService.refreshToken(token).subscribe({
        next: (response) => {
          this.authService.setToken(response.data);
        },
        error: (err) => {},
      });
    }
  }

  private checkToken() {
    const token = this.authService.getToken();
    if (token && this.authService.isTokenExpired()) {
      this.authService.logout();
    }
  }

  ngOnDestroy() {
    this.stopMonitoring();
  }
}
