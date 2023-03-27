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
  userName: string;
  birthday: Date;
  address: string;
  password: string;
  confirmPassword: string;
  phone: string;
  isUserConfirm: boolean;
  emailCheck: emailCheckType;
  privateAgree: privateAgreeType;
}

export interface privateAgreeType {
  isAgree: boolean;
  isUseConfirm: boolean;
  isAdvertisingConfirm?: boolean;
}

export interface emailCheckType {
  isDuplicate: false;
  isEmailCheck: false;
  isPasswordCheck: false;
}