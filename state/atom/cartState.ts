import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  cartType,
  freezeCartType,
  allCartType,
} from "@/types/cart/cartDataType";

const { persistAtom } = recoilPersist();

export const cartListState = atom<cartType>({
  key: "cartListState",
  default: { cartList: [] },
});
export const freezeCartListState = atom<freezeCartType>({
  key: "freezeCartListState",
  default: { freezeCartList: [] },
});
export const allCartListState = atom<allCartType>({
  key: "allCartListState",
  default: { allCartList: [] },
});
export const cartState = atom({
  key: "cartState",
  default: 0,
});
export const cartIsCheckState = atom({
  key: "cartIsCheckState",
  default: false,
});

export const countState = atom({
  key: "countState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
