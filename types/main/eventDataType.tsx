export interface eventType {
  id: number;
  eventId: number;
  name: string;
  description: string;
}

export interface eventImageType {
  id: number;
  image: string;
  description: string;
}

export interface eventProductType {
  id: number;
  productId: number;
  description: string;
  name: string;
  price: number;
  thumbnail: string;
}