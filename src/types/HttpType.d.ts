/** 响应数据 */
export interface HttpResponse<T = null> {
  data: T;
  code: number;
  msg: string;
  requestId: string;
  timeStamp: number;
}