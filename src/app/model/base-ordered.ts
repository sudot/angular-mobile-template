import { BaseModel } from './base-model';
/**
 * 排序基类
 */
export class BaseOrdered extends BaseModel {
  order: number; // 排序字段(一般来说,数字越小,越靠前)
}