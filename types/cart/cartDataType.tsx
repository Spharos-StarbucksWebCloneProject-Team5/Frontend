export interface freezeCartType {
  freezeCartList: cartListType[];
}
export interface cartType {
  cartList: cartListType[];
}

export interface allCartType {
  allCartList: cartListType[];
}

export interface cartListType {
  cartId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productThumbnail: string;
  count: number;
  mainCategoryId: number;
  checked: boolean;
}

export interface cartBuyType {
  buyList: buyType[];
}

export interface buyType {
  productId: number;
  productCount: number;
  productName: string;
  price: number;
  thumbnail: string;
}
