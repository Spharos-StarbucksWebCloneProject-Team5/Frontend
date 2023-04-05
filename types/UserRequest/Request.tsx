export interface LoginReq {
  email: string;
  password: string;
}

export interface RegisterReq {
  userEmail: string;
  userName: string;
  userNickname: string;
  password: string;
  birthday: Date;
  phoneNo: string;
  isAgree: boolean;
}

export interface VeriftyEmailReq {
  email: string;
  verifyCode: string;
}

export interface inputRegisterType {
  userEmail: string;
  userNickname: string;
  birthday: Date;
  password: string;
  confirmPassword: string;
  isUserConfirm: boolean;
  privateAgree: privateAgreeType;
  isPrivacyAgree: boolean;
}

export interface privateAgreeType {
  isAgree: boolean;
  isUseConfirm: boolean;
  isAdvertisingConfirm?: boolean;
}
