import { BaseOrdered } from './base-ordered';

/**
 * 客户等级
 */
export class Rank extends BaseOrdered {
  name: String;       // 名称
  deposit: string;    // 达到此等级所需的押金金额
  isDefault: Boolean; // 是否默认
}
/**
{
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
}
 */
