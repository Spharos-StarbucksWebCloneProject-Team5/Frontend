import {
  detailBuyType,
  orderHistoryType,
  productBuyType,
} from "@/types/product/fetchDataType";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cartPaymentState = atom<number[]>({
  key: "cartPaymentState",
  default: [],
  //effects_UNSTABLE: [persistAtom],
});

export const cartBuyNowState = atom<number>({
  key: "cartBuyNowState",
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const buyNowState = atom<detailBuyType>({
  key: "buyNowState",
  default: {
    productId: 0,
    count: 0,
  },
  //effects_UNSTABLE: [persistAtom],
});

export const payingState = atom<productBuyType[]>({
  key: "payingState",
  default: [],
  //effects_UNSTABLE: [persistAtom],
});

export const paymentState = atom<orderHistoryType[]>({
  key: "paymentState",
  default: [],
  //effects_UNSTABLE: [persistAtom],
});
