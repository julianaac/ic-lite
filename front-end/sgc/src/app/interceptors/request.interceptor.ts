import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequisicaoInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const cookies = document.cookie.split(';');
    const xsrf = cookies.find(
      c => c.startsWith('XSRF-TOKEN=')
    );
    const token = xsrf?.split('=')[1] || '';

    if (token) {
      request = request.clone({
        headers: request.headers.set('X-XSRF-TOKEN', token)
      });
    }

    request = request.clone({
      withCredentials: true,
      headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
    });

    return next.handle(request);

  }
}

