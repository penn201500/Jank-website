import type { HttpResponse } from '@/types/HttpType';

/**
 * 请求配置接口
 */
interface HttpRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  params?: Record<string, any> | string[][] | URLSearchParams;
  queryStringParams?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * 默认请求配置
 * @param baseURL 请求基准 URL
 * @param timeout 请求超时时间
 * @param headers 请求头
 */
const defaultConfig = {
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.JANK_PUBLIC_API_URL,
  timeout: 5000, // 默认超时时间 5000 毫秒
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * 请求拦截器：统一添加请求头、日志、token等
 * @param url 请求 URL
 * @param options 请求配置
 * @returns 处理后的请求配置
 */
const requestInterceptor = (url: string, options: HttpRequestOptions) => {
  const headers = {
    ...defaultConfig.headers,
    ...options.headers,
  };

  return { url, options: { ...options, headers } };
};

/**
 * 响应拦截器：统一处理响应数据，检查错误码等
 * @param response 响应数据
 * @returns 处理后的响应数据
 */
const responseInterceptor = <T>(response: HttpResponse<T>): HttpResponse<T> => {
  if (response.code !== 0) {
    console.error('请求错误', response.msg || '未知错误');
    throw new Error(response.msg || '未知错误');
  }
  return response;
};

/**
 * 拼接 URL 查询字符串
 * @param queryStringParams 查询参数
 * @returns 查询字符串
 */
function buildQueryString(queryStringParams?: Record<string, any> | string[][] | URLSearchParams): string {
  let queryString = '';

  if (queryStringParams) {
    if (queryStringParams instanceof URLSearchParams) {
      queryString = `?${queryStringParams.toString()}`;
    } else if (Array.isArray(queryStringParams)) {
      queryString = `?${new URLSearchParams(queryStringParams).toString()}`;
    } else if (typeof queryStringParams === 'object') {
      queryString = `?${new URLSearchParams(queryStringParams as Record<string, string>).toString()}`;
    }
  }

  return queryString;
}

/**
 * 发送 HTTP 请求
 * @param api 请求接口
 * @param options 请求配置
 * @returns 响应数据
 */
async function request<T = any>(
  api: string,
  options: HttpRequestOptions = {}
): Promise<HttpResponse<T>> {
  const { method = 'GET', data, params, queryStringParams, headers, timeout } = options;

  // 拼接原始的查询字符串
  let queryString = buildQueryString(params);

  // 如果有 queryStringParams，拼接额外的查询参数
  if (queryStringParams) {
    queryString += buildQueryString(queryStringParams);
  }

  const fullUrl = `${defaultConfig.baseURL}${api}${queryString}`;

  // 调用请求拦截器
  const { url, options: finalOptions } = requestInterceptor(fullUrl, options);

  // 创建一个 AbortController 用于请求取消
  const controller = new AbortController();
  const signal = controller.signal;

  // 设置超时
  const currentTimeout = timeout || defaultConfig.timeout;
  const timeoutId = setTimeout(() => controller.abort(), currentTimeout);

  try {
    const response = await fetch(url, {
      method,
      headers: new Headers(finalOptions.headers),
      body: data ? JSON.stringify(data) : undefined,
      signal,
    });

    // 请求成功后清除超时计时器
    clearTimeout(timeoutId);

    const responseData: HttpResponse<T> = await response.json();
    return responseInterceptor(responseData); // 响应拦截处理
  } catch (error: any) {
    clearTimeout(timeoutId);

    // 请求错误处理（包括超时）
    if (error.name === 'AbortError') {
      throw new Error('请求超时');
    }

    console.error('请求错误', error.message || '服务器错误');
    throw new Error(error.message || '服务器错误');
  }
}

/**
 * API 请求实例，封装 GET、POST、PUT、DELETE 请求方法
 */
const http = {
  get: <T = any>(api: string, params?: Record<string, any>, queryStringParams?: Record<string, any>, options?: HttpRequestOptions) =>
    request<T>(api, { method: 'GET', params, queryStringParams, ...options }),

  post: <T = any>(api: string, data?: any, queryStringParams?: Record<string, any>, options?: HttpRequestOptions) =>
    request<T>(api, { method: 'POST', data, queryStringParams, ...options }),

  put: <T = any>(api: string, data?: any, queryStringParams?: Record<string, any>, options?: HttpRequestOptions) =>
    request<T>(api, { method: 'PUT', data, queryStringParams, ...options }),

  delete: <T = any>(api: string, data?: any, queryStringParams?: Record<string, any>, options?: HttpRequestOptions) =>
    request<T>(api, { method: 'DELETE', data, queryStringParams, ...options }),
};

export default http;
