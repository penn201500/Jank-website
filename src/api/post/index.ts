import type { HttpResponse } from '@/types/HttpType';
import http from '@/lib/axios';

/** 获取文章列表 */
export const fetchPostList = (
  page: number,
  pageSize: number,
): Promise<HttpResponse<any>> =>
  http.get('/post/getPostList', {
    queryStringParams: { page, pageSize },
  });

/** 获取文章详情 */
export const fetchOnePost = (data: {
  id?: number;
  title?: string;
}): Promise<HttpResponse<any>> => {
  const { id, title } = data;
  if (!id && !title) {
    throw new Error('请提供文章id或标题');
  }
  const params = { ...(id && { id }), ...(title && { title }) };
  return http.post('/post/getOnePost', params);
};

/** 创建文章 */
export const createOnePost = (data: {
  contentMarkdown: string,
  image?: string,
  title: string,
  visibility?: string,
  category_ids: number[]
}) => {
  return http.post('/post/createOnePost', data);
};

/** 更新文章 */
export const updateOnePost = (data: {
  contentMarkdown: string,
  image?: string,
  title: string,
  visibility?: string,
  category_ids: number[]
}) => {
  return http.post('/post/updateOnePost', data);
};

/** 删除文章 */
export const deleteOnePost = (data: {
  id: number
}) => {
  return http.delete('/post/deleteOnePost', data);
};


