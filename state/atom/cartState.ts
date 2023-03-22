import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//const { persistAtom } = recoilPersist();

export const cartState = atom({
  key: "cartState",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
