/**
 * 基础实体类
 */
export class BaseModel {
  id: number;
  deleted: boolean;         // 记录是否逻辑删除 。true 已删除，false 未删除
  createdDate: number;      // 创建时间
  createdBy: string;        // 创建人
  lastModifiedDate: number; // 最后一次修改时间
  lastModifiedBy: string;   // 最后一次修改人
}