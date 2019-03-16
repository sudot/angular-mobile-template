export const environment = {
  production: true,
  memoryWebApi: false,
  loggerLevel: 'WARN',
  tokenStorageKey: 'X-USER-TOKEN',
  userStorageKey: 'X-USER',
  baseUrl: '',
  loginUrl: '/login',
  logoutUrl: '/logout',
  homeUrl: '/',
  forbiddenUrl: '/forbidden',
  // 标记拦截器是否已处理信息,如果拦截器中响应头包含此值则不用再显示信息了
  interceptorMessageProcess: { name: 'X-INTERCEPTOR-MESSAGE-PROCESS', value: '1' }
};
