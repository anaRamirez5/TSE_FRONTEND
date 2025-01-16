import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { SessionStorageItems } from '../../enums/session-storage';

export const TSEInterceptor: HttpInterceptorFn = (req, next) => {
  // Obtén el token de sesión
  const authToken = sessionStorage.getItem(SessionStorageItems.SESSION);
  const authReq = req.clone({
    setHeaders: {
      Authorization: `${authToken}`,
    },
  });
  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.error('Unauthorized request:', err);
        } else {
          console.error('HTTP error:', err);
        }
      } else {
        console.error('An error occurred:', err);
      }
      return throwError(() => err);
    })
  );
};
