export interface ShippingAddressReq {
  id: number;
  receiver: string;
  nickname: string;
  choiceMain: boolean;
  // swagger 에는 number로 되어있어 수정 요청 필요
  zipCode: string;
  address: string;
  detailAddress: string;
  shippingPhone1: string;
  shippingPhone2: string;
  shippingMemo: string;
}
