import { atom } from "recoil";

export const userLoginState = atom({
  key: "userLoginState",
  default: {
    userId: "",
    accessToken: "",
    refreshToken: "",
    isLogin: false,
  },
});
