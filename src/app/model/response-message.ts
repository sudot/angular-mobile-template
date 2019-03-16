/**
 * 响应信息
 * {
 * "timestamp" -> "1541654376153"
 * "status" -> "406"
 * "error" -> "Not Acceptable"
 * "message" -> "Could not parse 'Accept' header [3]: Invalid mime type "3": does not contain '/'"
 * "path" -> "/error"
 * }
 */
export class ResponseMessage {
  timestamp: number; // 时间戳
  status: number;    // 响应码
  error: string;     // 错误信息
  message: string;   // 错误详细信息
  path: string;      // 请求地址
}