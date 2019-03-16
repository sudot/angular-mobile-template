import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  NgZorroAntdMobileModule, LOCAL_PROVIDER_TOKEN, zh_CN,
  ToastComponent, Toast
} from 'ng-zorro-antd-mobile';

import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './utils/http-interceptors';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LayoutComponent } from './component/layout/layout.component';
import { IndexComponent } from './component/index/index.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { UserComponent } from './component/user/user.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
    LayoutComponent,
    IndexComponent,
    ChatRoomComponent,
    UserComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    { provide: LOCAL_PROVIDER_TOKEN, useValue: zh_CN },
    httpInterceptorProviders,
    Toast
  ],
  entryComponents: [ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
