/**
 * 应用权限信息的路由守卫,验证用户的权限信息
 */
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkPermissions(route.data.permissions);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

  checkPermissions(permission: string): boolean {
    if (!permission) { return true; }
    const permissions = this.authService.user.permissions || {};
    if (permissions[permission]) { return true; }
    // Navigate to the forbidden page with extras
    this.router.navigateByUrl(environment.forbiddenUrl);
    return false;
  }
}
