export interface productListCardType {
  id: number;
  description: string;
  name: string;
  price: number;
  thumbnail: string;
  isNew: boolean;
}
export interface productAllType {
  productId: number;
  productName: string;
  price: number;
  thumbnail: string;
  mainCategoryId: number;
  middleCategoryId: number;
}
export interface pageProductType {
  content: productAllType[];
  pageNum: number;
  pageSize: number;
  totalElements: number;
  totalPage: number;
}

export interface eventProductListType {
  id: number;
  eventId: number;
  productId: number;
}

export interface productImageType {
  id: number;
  productId: number;
  image: string;
}

export interface eventProductListType {
  id: number;
  eventId: number;
  productId: number;
}

export interface productBuyType {
  productId: number;
  productName: string;
  price: number;
  thumbnail: string;
  count: number;
}

export interface detailBuyType {
  productId: number;
  count: number;
}

export interface orderHistoryType {
  productId: number;
  productName: string;
  price: number;
  thumbnail: string;
  count: number;
  payType: number;
}
