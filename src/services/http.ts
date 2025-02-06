import type { HttpResponse } from '@/types/HttpType';

const baseURL = process.env.UMI_PUBLIC_API_URL; // 服务端环境变量

class ServerHttp {
  private static instance: ServerHttp;

  private constructor() {}

  /** 获取单例 */
  static getInstance(): ServerHttp {
    if (!ServerHttp.instance) {
      ServerHttp.instance = new ServerHttp();
    }
    return ServerHttp.instance;
  }

  /** 处理响应 */
  private async handleResponse<T>(response: Response): Promise<HttpResponse<T>> {
    const data: HttpResponse<T> = await response.json();

    return data;
  }

  /** 请求 */
  async request<T>(url: string, options: RequestInit = {}): Promise<HttpResponse<T>> {
    /** 完整 URL */
    const fullUrl = url.startsWith('http') ? url : `${baseURL}${url}`;

    const mergeOptions: Record<string, any> = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    };

    const responseJson = await fetch(fullUrl, mergeOptions);
    const response = await this.handleResponse<T>(responseJson);

    return response;
  }

  // 便捷方法
  async get<T>(
    url: string,
    params?: Record<string, any>,
    options?: RequestInit
  ): Promise<HttpResponse<T>> {
    const queryString = params ? `?${new URLSearchParams(params)}` : '';
    return this.request<T>(`${url}${queryString}`, {
      ...options,
      method: 'GET',
      cache: options?.cache ?? 'no-store' // 默认不缓存
    });
  }

  async post<T>(url: string, data?: any, options?: RequestInit): Promise<HttpResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put<T>(url: string, data?: any, options?: RequestInit): Promise<HttpResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async delete<T>(url: string, options?: RequestInit): Promise<HttpResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'DELETE'
    });
  }
}

export const httpServer = ServerHttp.getInstance();