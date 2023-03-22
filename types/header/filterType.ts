export interface filterMenuType {
  id: number;
  name: string;
  categoryId: number;
  subCategory?: [filterSubCategoryType];
}

export interface filterSubCategoryType {
  id: number;
  name: string;
  menu?: [filterCategorySubType];
}

export interface filterCategorySubType {
  id: number;
  name: string;
  subCategoryId: number;
}