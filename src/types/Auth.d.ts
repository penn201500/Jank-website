/** 认证状态 */
export interface AuthState {
  /** 令牌 */
  token: string;
  /** 刷新令牌 */
  refreshToken: string;
}

export interface NewAuthState {
  /** 新令牌 */
  newToken: string;
  /** 新刷新令牌 */
  newRefreshToken: string;
}
