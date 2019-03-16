import { BaseModel } from './base-model';
import { Rank } from './rank';

/**
 * 登陆用户信息
 */
export class User extends BaseModel {
  username: string;    // 用户名
  enabled: boolean;    // 是否启用
  locked: boolean;     // 是否锁定
  lockDate: Date;      // 锁定日期
  lastLoginIp: string; // 最后登录IP
  lastLoginDate: Date; // 最后登录日期
  mobile: String;      // 手机
  nickname: String;    // 昵称
  head: String;        // 头像
  qrcode: String;      // 二维码路径
  point: number;       // 积分
  credit: number;      // 信用分
  balance: number;     // 余额
  deposit: number;     // 押金
  rank: Rank;          // 会员等级
  gameMaster: Boolean; // 游戏管理员.true:是游戏管理员;false:不是游戏管理员

  permissions: object; // 权限
  roles: object;       // 角色
}
/**
{
  "id": 5,
  "deleted": false,
  "createdDate": 1544777567000,
  "createdBy": null,
  "lastModifiedDate": 1544777567000,
  "lastModifiedBy": null,
  "username": "13512345678",
  "enabled": true,
  "locked": false,
  "lockDate": null,
  "lastLoginIp": null,
  "lastLoginDate": null,
  "mobile": "135****5678",
  "nickname": "玩家135",
  "head": null,
  "point": 0,
  "credit": 0,
  "balance": 1000000,
  "deposit": 0,
  "rank": {
    "id": 1,
    "deleted": false,
    "createdDate": 1544777555000,
    "createdBy": null,
    "lastModifiedDate": 1544777555000,
    "lastModifiedBy": null,
    "order": 1,
    "name": "体验",
    "deposit": 0,
    "isDefault": true
  },
  "gameMaster": false,
  "permissions": {
    "gamemaster:game:room:manage": true
  },
  "roles": {
    "gameMaster": true
  }
}
 */