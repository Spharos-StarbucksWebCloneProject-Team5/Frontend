import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const searchState = atom<string[]>({
  key: "searchState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
