import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { PermissionsGuard } from './guard/permissions.guard';

import { LoginComponent } from './component/login/login.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LayoutComponent } from './component/layout/layout.component';
import { IndexComponent } from './component/index/index.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {
    /*
    一个带 path 和 children 的子路由，但它没有使用 component。
    这并不是配置中的失误，而是在使用无组件路由。
    这里的目标是对 所有 路径下的 安全中心 管理类路由进行分组，但并不需要另一个仅用来分组路由的组件。
    一个无组件的路由能让守卫子路由变得更容易。
    */
    path: '',
    component: LayoutComponent,
    children: [
      // 根据路由的匹配规则，【pathMatch: 'full'】配在最前面
      { path: '', component: IndexComponent, pathMatch: 'full', data: { animation: 'index' } },
      {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard, PermissionsGuard],
        children: [
          { path: 'chat-room', component: ChatRoomComponent, data: { animation: 'chat-room' } },
          { path: 'user', component: UserComponent, data: { animation: 'user' } },
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
  // 根据路由的匹配规则，【**】等通配符路由必须配置在最后
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }