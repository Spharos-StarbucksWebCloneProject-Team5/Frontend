export const bottomNavData = [
  {
    id: 1,
    name: "메인",
    link: "/",
  },
  {
    id: 2,
    name: "기획전",
    link: "/event?category=1",
  },
  {
    id: 3,
    name: "베스트",
    link: "/best?category=1",
  },
  {
    id: 4,
    name: "마이페이지",
    link: "/mypage",
  },
];

export const categoryList = [
  {
    id: 0,
    name: "전체",
    key: "category",
  },
  {
    id: 1,
    name: "케이크",
    key: "category",
  },
  {
    id: 2,
    name: "텀블러/보온병",
    key: "category",
  },
  {
    id: 3,
    name: "머그/컵",
    key: "category",
  },
  {
    id: 4,
    name: "라이프스타일",
    key: "category",
  },
  {
    id: 5,
    name: "티/커피용품",
    key: "category",
  },
  {
    id: 6,
    name: "세트",
    categoryId: 6,
    key: "category",
  },
];

export const menuListDepth2 = [
  {
    id: 1,
    name: "케이크",
    data: [
      {
        id: 1,
        name: "롤케이크",
        key: "subCategory",
      },
      {
        id: 2,
        name: "홀케이크",
        key: "subCategory",
      },
    ],
  },
  {
    id: 2,
    name: "텀블러/보온병",
    data: [
      {
        id: 1,
        name: "플라스틱 텀블러",
        key: "subCategory",
      },
      {
        id: 2,
        name: "스텐리스 텀블러",
        key: "subCategory",
      },
      {
        id: 3,
        name: "보온병",
        key: "subCategory",
      },
      {
        id: 4,
        name: "콜드컵",
        key: "subCategory",
      },
    ],
  },
];

export const menuListDepth4 = [
  {
    id: 1,
    name: "가격",
    priceList: [
      {
        id: 1,
        price: "1만원미만",
      },
      {
        id: 2,
        name: "1만원대",
      },
      {
        id: 3,
        name: "2만원대",
      },
      {
        id: 4,
        name: "3만원대",
      },
      {
        id: 5,
        name: "4만원대",
      },
      {
        id: 6,
        name: "5만원이상",
      },
    ],
    id: 2,
    name: "시즌",
    seasonList: [
      {
        id: 7,
        name: "커티스 쿨릭",
      },
      {
        id: 8,
        name: "체리블라썸",
      },
      {
        id: 9,
        name: "밸런타인데이",
      },
      {
        id: 10,
        name: "New Year",
      },
      {
        id: 11,
        name: "데스크 컬렉션",
      },
      {
        id: 12,
        name: "Christmas",
      },
      {
        id: 13,
        name: "여주자유CC",
      },
      {
        id: 14,
        name: "Autumn",
      },
    ],
  },
];

export const menuListDepth3 = [
  {
    id: 1,
    name: "1만원미만",
  },
  {
    id: 2,
    name: "1만원대",
  },
  {
    id: 3,
    name: "2만원대",
  },
  {
    id: 4,
    name: "3만원대",
  },
  {
    id: 5,
    name: "4만원대",
  },
  {
    id: 6,
    name: "5만원이상",
  },
];
