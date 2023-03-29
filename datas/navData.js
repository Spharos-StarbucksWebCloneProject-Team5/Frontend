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
  },
  {
    id: 1,
    name: "케이크",
  },
  {
    id: 2,
    name: "텀블러/보온병",
  },
  {
    id: 3,
    name: "머그/컵",
  },
  {
    id: 4,
    name: "라이프스타일",
  },
  {
    id: 5,
    name: "티/커피용품",
  },
  {
    id: 6,
    name: "세트",
    categoryId: 6,
  },
];

export const subCategoryList = [
  {
    id: 0,
    name: "용량",
    mainCategoryId: 2,
    subCategory: [
      {
        id: 1,
        name: "Short",
        subCategoryId: 1,
      },
      {
        id: 2,
        name: "Tall",
        subCategoryId: 2,
      },
      {
        id: 3,
        name: "Grande",
        subCategoryId: 2,
      },
      {
        id: 4,
        name: "Venti",
        subCategoryId: 2,
      },
    ],
  },
  {
    id: 1,
    name: "용량",
    mainCategoryId: 3,
    subCategory: [
      {
        id: 5,
        name: "Short",
        subCategoryId: 1,
      },
      {
        id: 6,
        name: "Tall",
        subCategoryId: 2,
      },
      {
        id: 7,
        name: "Grande",
        subCategoryId: 2,
      },
      {
        id: 8,
        name: "Venti",
        subCategoryId: 2,
      },
    ],
  },
  {
    id: 2,
    name: "가격",
    mainCategoryId: 0,
    subCategory: [
      {
        id: 9,
        name: "1만원미만",
        subCategoryId: 1,
      },
      {
        id: 10,
        name: "1만원대",
        subCategoryId: 2,
      },
      {
        id: 11,
        name: "2만원대",
        subCategoryId: 3,
      },
      {
        id: 12,
        name: "3만원대",
        subCategoryId: 4,
      },
      {
        id: 13,
        name: "4만원대",
        subCategoryId: 5,
      },
      {
        id: 14,
        name: "5만원이상",
        subCategoryId: 6,
      },
    ],
  },

  {
    id: 3,
    name: "카테고리",
    mainCategoryId: 1,
    subCategory: [
      {
        id: 15,
        name: "롤케이크",
        subCategoryId: 1,
      },
      {
        id: 16,
        name: "홀케이크",
        subCategoryId: 2,
      },
    ],
  },

  {
    id: 4,
    name: "카테고리",
    mainCategoryId: 2,
    subCategory: [
      {
        id: 17,
        name: "플라스틱 텀블러",
        subCategoryId: 1,
      },
      {
        id: 18,
        name: "스테인리스 텀블러",
        subCategoryId: 2,
      },
      {
        id: 19,
        name: "보온병",
        subCategoryId: 3,
      },
      {
        id: 20,
        name: "콜드컵",
        subCategoryId: 4,
      },
    ],
  },

  {
    id: 5,
    name: "카테고리",
    mainCategoryId: 3,
    subCategory: [
      {
        id: 21,
        name: "머그",
        subCategoryId: 1,
      },
      {
        id: 22,
        name: "글라스",
        subCategoryId: 2,
      },
      {
        id: 23,
        name: "리유저블",
        subCategoryId: 3,
      },
    ],
  },
  {
    id: 6,
    name: "시즌",
    mainCategoryId: 0,
    subCategory: [
      {
        id: 24,
        name: "커티스 쿨릭",
        subCategoryId: 1,
      },
      {
        id: 25,
        name: "체리블라썸",
        subCategoryId: 2,
      },
      {
        id: 26,
        name: "밸런타인데이",
        subCategoryId: 3,
      },
      {
        id: 27,
        name: "New Year",
        subCategoryId: 4,
      },
      {
        id: 28,
        name: "데스크 컬렉션",
        subCategoryId: 5,
      },
      {
        id: 29,
        name: "Christmas",
        subCategoryId: 6,
      },
      {
        id: 30,
        name: "여주자유CC",
        subCategoryId: 7,
      },
      {
        id: 31,
        name: "Autumn",
        subCategoryId: 8,
      },
    ],
  },
];
