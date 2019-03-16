/**
 * 文件上传服务
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  upload(url: string, file: any, body: any): Observable<object> {
    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    formData.append('file', file);
    formData.append('body', JSON.stringify(body));
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      withCredentials: true
    });
    return this.http.request(req)
  }
}
