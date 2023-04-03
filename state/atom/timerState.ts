import { atom } from "recoil";

export const timerState = atom<number>({
  key: "timerState",
  default: 3 * 60,
});
