import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(
    private titleService: Title,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('个人中心');
    // 每次进入用户中心刷新一次用户信息
    this.authService.refreshUser();
  }

  logout(): void {
    this.authService.logout();
  }
  get user(): User {
    return this.authService.user;
  }
}
