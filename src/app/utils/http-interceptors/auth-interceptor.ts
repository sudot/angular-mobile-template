/**
 * 身份认证信息http请求拦截器,用于处理身份认证信息的携带
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { Modal } from 'ng-zorro-antd-mobile';

import { environment } from 'src/environments/environment';
import { AbstractInterceptor } from './abstract-interceptor';
import { AuthService } from 'src/app/service/auth.service';

@Injectable()
export class AuthInterceptor extends AbstractInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { super(); }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let observable: Observable<HttpEvent<any>> = null;
    const authToken = this.authService.authorizationToken;
    if (authToken) {
      let header = {};
      header[this.authService.tokenStorageKey] = authToken;
      const authReq = req.clone({ setHeaders: header });
      observable = next.handle(authReq);
    } else {
      observable = next.handle(req)
    }
    return observable.pipe(
      catchError((response: HttpErrorResponse) => {
        this.assertShowMessage(response);
        if (response.status === 403) {
          Modal.alert('权限错误', `你没有足够的权限执行此操作<br/>${response.url}`, [
            { text: '确定', onPress: () => this.alreadyCloseShowMessage() }
          ]);
          response = this.alreadyShowMessage(response);
        } else if (response.status === 401) {
          this.authService.clearAuthorization();
          Modal.alert('身份验证失败', '你可能太长时间没有操作了, 出于安全考虑, 你需要重新登陆', [
            { text: '留在此处', onPress: () => this.alreadyCloseShowMessage() },
            {
              text: '重新登录', onPress: () => {
                this.router.navigateByUrl(environment.loginUrl);
                this.alreadyCloseShowMessage();
              }
            }
          ]);
          response = this.alreadyShowMessage(response);
        }
        return throwError(response);
      }));
  }

}