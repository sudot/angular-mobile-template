/**
 * 基础http请求拦截器
 * 1.用于在请求时修改请求的url
 * 2.用于响应时对特定的错误进行有好的处理
 */
import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { Toast } from 'ng-zorro-antd-mobile';

import { AbstractInterceptor } from './abstract-interceptor';
import { environment } from 'src/environments/environment';
import { logger } from '../logger';

@Injectable()
export class BaseInterceptor extends AbstractInterceptor {

  constructor(private _toast: Toast) { super(); }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      // 如果http开头的url，则不添加baseUrl
      url: /^http/i.test(req.url) ? req.url : `${environment.baseUrl}${req.url}`,
      // 默认情况下,会自动识别数据类型
      // setHeaders: { 'Content-Type': req.headers.get('Content-Type') || 'application/json;UTF-8' }
    });
    const canShowMessage = req.headers.get(environment.interceptorMessageProcess.name) != environment.interceptorMessageProcess.value
    if (logger.isDebugEnabled) {
      logger.debug(newReq.method, newReq.url, newReq.body, newReq.headers)
    }

    return next.handle(newReq).pipe(
      // 捕获响应错误
      catchError((response: HttpErrorResponse) => {
        if (canShowMessage) {
          this.assertShowMessage(response);
          Toast.fail(response.error.message || response.error || '网络可能发生了错误，请稍后再试。', 3000, () => this.alreadyCloseShowMessage());
          response = this.alreadyShowMessage(response);
        }
        return throwError(response);
      })
    )
  }
}
