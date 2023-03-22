export interface productListCardType {
  id: number;
  description: string;
  name: string;
  price: number;
  thumbnail: string;
  isNew: boolean;
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

export interface cartType {
  id: number;
  user: number;
  product: [productListCardType];
  count: number;
  now: boolean;
}
export interface eventProductListType {
  id: number;
  eventId: number;
  productId: number;
}
