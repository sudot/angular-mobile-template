/**
 * 身份认证服务
 * 1.登录,登出系统
 * 2.刷新用户身份信息
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthInfo } from 'src/app/model/auth-info'
import { User } from 'src/app/model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly tokenStorageKey: string = environment.tokenStorageKey;
  readonly userStorageKey: string = environment.userStorageKey;
  readonly loginUrl: string = environment.loginUrl;
  readonly homeUrl: string = environment.homeUrl;
  private _redirectUrl: string = this.homeUrl;
  readonly emptyUser: User = new User();
  private _user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) { }

  login(authInfo: AuthInfo, callback: () => void): void {
    const _callBack = () => {
      if (callback) { callback.call(this); }
      this.router.navigateByUrl(this.redirectUrl)
    };
    this.http.post(this.loginUrl, authInfo)
      .subscribe(
        (data: any) => this.setAuthorizationToken(data.token),
        callback,
        () => this.refreshUser(_callBack)
      );
  }

  refreshUser(callback?: () => void): void {
    this.userService.getUser()
      .subscribe((data: any) => {
        const permissionsMap = data.permissions
          .reduce((permissionsMap: object, permission: string) => {
            permissionsMap[permission] = true;
            return permissionsMap;
          }, {});
        const rolesMap = data.roles
          .reduce((rolesMap: object, role: string) => {
            rolesMap[role] = true;
            return rolesMap;
          }, {});
        this.user = {
          ...data.user,
          rank: data.rank,
          permissions: permissionsMap,
          roles: rolesMap
        };
        if (callback) { callback.call(this); }
      });
  }

  logout(): void {
    this.http.post(environment.logoutUrl, null).pipe(
      finalize(() => {
        this.clearAuthorization();
        this.router.navigateByUrl(this.homeUrl);
      })
    ).subscribe();
  }

  clearAuthorization(): void {
    localStorage.removeItem(this.tokenStorageKey);
    localStorage.removeItem(this.userStorageKey);
  }

  get redirectUrl(): string {
    return this._redirectUrl || this.homeUrl;
  }
  set redirectUrl(redirectUrl: string) {
    this._redirectUrl = redirectUrl;
  }
  get isLoggedIn(): boolean {
    return !!this.authorizationToken;
  }

  get authorizationToken(): string {
    return localStorage.getItem(this.tokenStorageKey);
  }
  get user(): User {
    this._user = this._user || JSON.parse(localStorage.getItem(this.userStorageKey)) || this.emptyUser
    return this._user;
  }
  set user(user: User) {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));
    this._user = user;
  }
  private setAuthorizationToken(token: string): void {
    localStorage.setItem(this.tokenStorageKey, token);
  }
}
