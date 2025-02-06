import type { HttpResponse } from '@/types/HttpType';
import http from '@/lib/axios';

/** 获取图形验证码 */
export const fetchVerificationCode = (email: string): Promise<HttpResponse<{ img: string }>> =>
    http.get('/verification/genImgVerificationCode', { queryStringParams: { email } });

/** 发送邮箱验证码 */
export const sendVerificationCode = (email: string): Promise<HttpResponse<null>> =>
    http.get('/verification/sendEmailVerificationCode', { paramqueryStringParamss: { email } });
