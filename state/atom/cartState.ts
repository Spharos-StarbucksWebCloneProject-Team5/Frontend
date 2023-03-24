import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//const { persistAtom } = recoilPersist();

export const cartListState = atom({
  key: "cartListState",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});
export const cartState = atom({
  key: "cartState",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const cartIsCheckState = atom({
  key: "cartIsCheckState",
  default: false,
});
