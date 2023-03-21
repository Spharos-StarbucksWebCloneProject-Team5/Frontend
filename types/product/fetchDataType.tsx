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
