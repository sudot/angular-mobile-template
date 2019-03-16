// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  memoryWebApi: false,
  loggerLevel: 'DEBUG',
  tokenStorageKey: 'X-USER-TOKEN',
  userStorageKey: 'X-USER',
  baseUrl: '/api',
  loginUrl: '/login',
  logoutUrl: '/logout',
  homeUrl: '/',
  forbiddenUrl: '/forbidden',
  // 标记拦截器是否已处理信息,如果拦截器中响应头包含此值则不用再显示信息了
  interceptorMessageProcess: { name: 'X-INTERCEPTOR-MESSAGE-PROCESS', value: '1' }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
