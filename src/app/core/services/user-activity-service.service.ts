import { Injectable, OnDestroy } from '@angular/core';
import {
  merge,
  fromEvent,
  Subscription,
  tap,
  debounceTime,
  interval,
  switchMap,
  timer,
  BehaviorSubject,
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
  private refreshInterval = 3 * 60 * 1000; // Intervalo de verificación de actividad (1 minuto)
  private hasActivity: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  ); //
  constructor(private authService: AuthService) {}

  startMonitoring() {
    // Monitorizamos actividad y reiniciamos la señal de actividad cada vez que haya interacción
    this.activityEvents$.subscribe(() => {
      this.hasActivity.next(true); // Marca que hubo actividad
    });

    // Cada 5 minutos revisamos si hubo actividad en ese tiempo
    this.subscription = timer(0, this.refreshInterval) // Inicia inmediatamente y luego cada 5 minutos
      .pipe(tap(() => this.handleActivity()))
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
