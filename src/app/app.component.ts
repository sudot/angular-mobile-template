import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Toast } from 'ng-zorro-antd-mobile';
import { environment } from 'src/environments/environment';
// 数据模拟
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private _toast: Toast,
    private mockDataService: MockDataService
  ) {
    Toast.loading('应用初始化,请稍候...', 0);
  }

  ngOnInit() {
    if (environment.memoryWebApi) {
      this.mockDataService.mock();
    }
  }

  ngAfterViewInit() {
    this._onReady();
  }

  private _onReady() {
    Toast.hide();
  }

}
