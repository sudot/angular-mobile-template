# 前端模块

> 这是一个使用 [Angular CLI](https://github.com/angular/angular-cli) 和 [Ant Design Mobile of Angular](https://github.com/NG-ZORRO/ng-zorro-antd-mobile) 开发的前端项目

## 项目内容

- 提供了基本的登录和身份信息认证流程,并在登录后重定向到登录前拦截的页面
- 提供了基于路由的权限认证流程和方式
- 提供了对http请求前后自定义处理的拦截示例
   - 错误响应统一包装并添加友好提示
   - 请求URL修改,并添加统一的自定义URL前缀
   - 请求前添加身份认证信息(以token的形式增加在header里)
- 提供了404和401页面
- 提供了接口数据模拟方式示例

## 相关项目

Ant Design Mobile of Angular:  
[项目主页](http://ng.mobile.ant.design/#/docs/introduce/zh)  
[项目源码](https://github.com/NG-ZORRO/ng-zorro-antd-mobile)  
[演示环境](http://ng.mobile.ant.design/#/docs/introduce/zh) 扫码体验  
[使用手册](http://ng.mobile.ant.design/#/docs/getting-started/zh)

## 环境准备

1. [安装node.js](https://nodejs.org/zh-cn/download/)
2. 配置`npm`源(可不配置,仅用于依赖安装加速)
   ```
   npm config set registry https://registry.npm.taobao.org
   npm config set disturl https://npm.taobao.org/dist
   ```
3. 运行命令`npm install -g @angular/cli`安装`angular`脚手架工具
4. 运行命令`npm install`安装所有依赖

## 模拟运行

> 用此方式启动，所有功能均可在不依赖外部环境的情况下演示

```
npm run mock
```

## 本地运行

```
ng serve --open
```
执行命令`ng serve`会启动开发服务器，并监视你的文件变化，当你修改文件时，它就会重新构建应用并在浏览器中实时显示修改后的内容。  
添加参数`--open`（或只用`-o`）选项会自动打开浏览器，并访问`http://localhost:4200/`。

## 项目结构

```
├──e2e               -- 端对端集成测试目录
├──src               -- 源码目录
│   ├──app           -- 项目代码
│   │  ├──component  -- 项目组件（每一个视图作为一个组件）目录
│   │  ├──model      -- 数据模型
│   │  ├──service    -- 项目服务
│   │  └──utils      -- 工具包
│   ├──assets        -- 静态资源
│   └──environments  -- 项目运行环境
├──angular.json      -- angular-cli配置
├──package.json      -- npm依赖包配置文件
├──tsconfig.json     -- TypeScript编译器文件
└──tslint.json       -- 代码格式和质量分析配置文件
```

## 代码脚手架

执行命令`ng generate component component-name`创建一个新的组件。  
你也可以使用如下命令：`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 开发流程

**以登陆组建为例：**

1. 创建组建
   
   执行命令`ng generate component component/login`，会在`src/app/component`目录下创建`login`目录，并在此目录下创建4个文件：`login.component.html`、`login.component.less`、`login.component.ts`、`login.component.spec.ts`，此时目录结构如下：
   ```
   src/app/component/login
    ├── login.component.html    -- 模版页面
    ├── login.component.less    -- 样式文件
    ├── login.component.spec.ts -- 组建的单元测试文件
    └── login.component.ts      -- 此组建的 TypeScript 代码
   ```
2. 创建服务
   
   执行命令`ng generate service service/auth`，会在`src/app/service`目录下创建2个文件：`auth.service.ts`、`auth.service.spec.ts`，此时目录结构如下：
   ```
   src/app/service
    ├── auth.service.spec.ts    -- 针对服务的单元测试文件
    └── auth.service.ts         -- 服务的 TypeScript 代码
   ```
3. 注入服务
   
   打开`login.component.ts`文件  
   首先在`@Component`上方添加以下内容导入`AuthService`服务
   ```
   import { AuthService } from './../../service/auth.service'
   ```
   
   然后在文件`login.component.ts`构造函数（`constructor`）中添加以下内容注入`AuthService`服务
   ```
   constructor(
     private authService: AuthService
   ) { }
   ```
4. 开始你的表演

## 编译

执行命令`ng build`编译并构建此项目。编译后的文件存储在`dist/`目录中。  
使用`--prod`标记编译和构建生产环境。

## 运行单元测试

执行命令`ng test`通过[Karma](https://karma-runner.github.io)执行单元测试。

## 运行 end-to-end 测试

执行命令 `ng e2e` 通过[Protractor](http://www.protractortest.org/)执行 end-to-end 测试。
> 所谓 End-to-End Test 就是尽可能地模拟某些用户操作流程，比如输入用户名密码登录网站。这样的测试真实度高，但跑起来慢、十分脆弱、不好维护，得与实际UI代码与时俱进。

## 帮助

运行命令`ng help`以获得有关Angular CLI使用的更多帮助，或进入[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)。