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

export interface cartListType {
  cartId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productThumbnail: string;
  count: number;
}
export interface eventProductListType {
  id: number;
  eventId: number;
  productId: number;
}
