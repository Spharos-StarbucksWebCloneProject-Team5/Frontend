export interface categoryType {
  id: number;
  name: string;
  thumbNail: string;
}
export interface subCategoryType {
  id: number;
  name: string;
  categoryId: number;
  subCategory: [subCategoryListType];
}
export interface subCategoryListType {
  id: number;
  name: string;
  subCategoryId: number;
}
export interface contentType {
  productId: number;
  productName: string;
  price: number;
  thumbnail: string;
}
