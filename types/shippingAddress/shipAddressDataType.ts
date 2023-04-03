export interface ShippingAddressReq {
  id: number;
  receiver: string;
  nickname: string;
  choiceMain: boolean;
  zipCode: number;
  address: string;
  detailAddress: string;
  shippingPhone1: string;
  shippingPhone2: string;
  shippingMemo: string;
}

export interface ShippingAddressModifyReq {
  receiver: string;
  nickname: string;
  choiceMain: boolean;
  zipCode: number;
  address: string;
  detailAddress: string;
  shippingPhone1: string;
  shippingPhone2: string;
  shippingMemo: string;
}
