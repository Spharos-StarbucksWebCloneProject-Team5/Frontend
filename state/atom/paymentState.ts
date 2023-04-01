import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const paymentState = atom<number[]>({
  key: "paymentState",
  default: [],
});

// export const paymentListState = atom({
//   key: "paymentState",
//   default: {
//     productId: 0,
//     productCount: 0,
//     productName: "",
//     price: 0,
//     thumbnail: "",
//   },
//   effects_UNSTABLE: [persistAtom],
// });
