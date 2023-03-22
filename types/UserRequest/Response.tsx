export interface RegisterRes {
  userEmail: string;
  userName: string;
}

export interface LoginRes {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export interface TokenInfo {
  accessToken: string;
}

export interface ReIssueTokenRes extends BaseRes {
  data: TokenInfo;
}

export interface LogoutRes {
  userName: string;
}

export interface BaseRes<T = any> {
  status: string;
  data: T;
  message: string;
}
