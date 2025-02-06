/** API 映射 */
export const API_MAP = {
    /** 获取文章列表 */
    ARTICLE_LIST: '/post/getAllPosts',
    /** 获取单篇文章详情 */
    ARTICLE_DETAIL: '/post/getOnePost',
    /** 账号密码登录 */
    LOGIN: '/account/loginAccount'
};

/** 需要清除缓存的路径 */
export const NEED_CLEAR_CHECK = [API_MAP.ARTICLE_LIST, API_MAP.ARTICLE_DETAIL];
