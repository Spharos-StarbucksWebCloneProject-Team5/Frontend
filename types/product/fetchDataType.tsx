export interface productListCardType {
  id: number;
  description: string;
  name: string;
  price: number;
  thumbnail: string;
  isNew?: boolean;
}
export interface productAllType {
  productId: number;
  productName: string;
  price: number;
  thumbnail: string;
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
