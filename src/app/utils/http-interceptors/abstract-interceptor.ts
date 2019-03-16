/**
 * 抽象http请求拦截器,用于处理公共的http请求中的操作
 */
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment';

const processHeader = environment.interceptorMessageProcess;
export abstract class AbstractInterceptor implements HttpInterceptor {
  /**是否显示了提示信息.true:已显示,不用再显示了,false:未显示,如有需要可以显示提示信息 */
  private _isShowMessage: boolean = false;

  abstract intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;

  /**
   * 是否需要显示错误信息
   * @param response 响应信息
   */
  protected isShowMessage(response: HttpErrorResponse): boolean {
    this.assertCallError();
    return this._isShowMessage || response.headers.get(processHeader.name) == processHeader.value
  }

  /**
   * 断言是否已显示错误信息
   * @param response 响应信息
   */
  protected assertShowMessage(response: HttpErrorResponse): void {
    this.assertCallError();
    if (this.isShowMessage(response)) { throw response; }
  }

  /**
   * 已经显示错误信息
   * @param response 响应信息
   */
  protected alreadyShowMessage(response: HttpErrorResponse): HttpErrorResponse {
    this.assertCallError();
    this._isShowMessage = true;
    return new HttpErrorResponse({
      error: response.error,
      headers: response.headers.set(processHeader.name, processHeader.value),
      status: response.status,
      statusText: response.statusText,
      url: response.url
    });
  }

  /**
   * 错误信息已关闭
   */
  protected alreadyCloseShowMessage(): void {
    this.assertCallError();
    this._isShowMessage = false;
  }

  private assertCallError() {
    if (this._isShowMessage === undefined) { throw new Error('调用异常,请使用[()=> this.alreadyCloseShowMessage()]方式调用'); }
  }
}