import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';

import { catchError, throwError, map } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { SessionStorageItems } from '../../enums/session-storage';

export const TSEInterceptor: HttpInterceptorFn = (req, next) => {
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
