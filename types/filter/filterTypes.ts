export interface MenuDataType {
  id: number;
  name: string;
  key: string;
}

export interface filterDataType {
  id: number;
  key: string;
  value: string;
  isCheck: boolean;
}

export interface menuListDepth2 {
  id: number;
  name: string;
  data: MenuDataType[];
}
