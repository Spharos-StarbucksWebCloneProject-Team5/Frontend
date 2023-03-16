export const bottomNavData = [
  {
    id: 1,
    name: '메인',
    link: '/',
  },
  {
    id: 2,
    name: '기획전',
    link: '/event',
  },
  {
    id: 3,
    name: '베스트',
    link: '/best',
  },
  {
    id: 4,
    name: '마이페이지',
    link: '/mypage',
  }
]

export const categoryList = [
  {
    id: 1,
    name: '전체',
    categoryId: 0,
    subCategoryId: [
      {
        id: 1,
        name: "가격",
        menus: [
          {
            id: 1,
            name: '1만원미만',
            subCategoryId: 1
          },
          {
            id: 2,
            name: '1만원대',
            subCategoryId: 2
          },
          {
            id: 3,
            name: '2만원대',
            subCategoryId: 3
          },
          {
            id: 4,
            name: '3만원대',
            subCategoryId: 4
          },
          {
            id: 5,
            name: '4만원대',
            subCategoryId: 5
          },
          {
            id: 6,
            name: '5만원이상',
            subCategoryId: 6
          }
        ]
      },
      {
        id: 2,
        name: "시즌",
        menus: [
          {
            id: 1,
            name: '커티스 쿨릭',
            subCategoryId: 1
          },
          {
            id: 2,
            name: '체리블라썸',
            subCategoryId: 2
          },
          {
            id: 3,
            name: '밸런타인데이',
            subCategoryId: 3
          },
          {
            id: 4,
            name: 'New Year',
            subCategoryId: 4
          },
          {
            id: 5,
            name: '데스크 컬렉션',
            subCategoryId: 5
          },
          {
            id: 6,
            name: 'Christmas',
            subCategoryId: 6
          },
          {
            id: 7,
            name: '여주자유CC',
            subCategoryId: 7
          },
          {
            id: 8,
            name: 'Autumn',
            subCategoryId: 8
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '케이크',
    categoryId: 1,
    subCategoryId: [
      {
        id: 1,
        name: "가격",
        menus: [
          {
            id: 1,
            name: '1만원미만',
            subCategoryId: 1
          },
          {
            id: 2,
            name: 'tall',
            subCategoryId: 2
          }
        ]
      },
      {
        id: 2,
        name: "카테고리",
        menus: [
          {
            id: 1,
            name: '롤케이크',
            subCategoryId: 1
          },
          {
            id: 2,
            name: '홀케이크',
            subCategoryId: 2
          }
        ]
      },
    ]
  },
  {
    id: 3,
    name: '텀블러/보온병',
    categoryId: 2,
    subCategoryId: [
      {
        id: 1,
        name: "용량",
        menus: [
          {
            id: 1,
            name: 'Short',
            subCategoryId: 1
          },
          {
            id: 2,
            name: 'Tall',
            subCategoryId: 2
          },
          {
            id: 2,
            name: 'Grande',
            subCategoryId: 2
          },
          {
            id: 2,
            name: 'Venti',
            subCategoryId: 2
          }
        ]
      },
      {
        id: 2,
        name: "카테고리",
        menus: [
          {
            id: 1,
            name: '플라스틱 텀블러',
            subCategoryId: 1
          },
          {
            id: 2,
            name: '스테인리스 텀블러',
            subCategoryId: 2
          },
          {
            id: 3,
            name: '보온병',
            subCategoryId: 3
          },
          {
            id: 4,
            name: '콜드컵',
            subCategoryId: 4
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '머그/컵',
    categoryId: 3,
    subCategoryId: [
      {
        id: 1,
        name: "용량",
        menus: [
          {
            id: 1,
            name: 'Short',
            subCategoryId: 1
          },
          {
            id: 2,
            name: 'Tall',
            subCategoryId: 2
          },
          {
            id: 2,
            name: 'Grande',
            subCategoryId: 2
          },
          {
            id: 2,
            name: 'Venti',
            subCategoryId: 2
          }
        ]
      },
      {
        id: 2,
        name: "카테고리",
        menus: [
          {
            id: 1,
            name: '머그',
            subCategoryId: 1
          },
          {
            id: 2,
            name: '글라스',
            subCategoryId: 2
          },
          {
            id: 3,
            name: '리유저블',
            subCategoryId: 3
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: '라이프스타일',
    categoryId: 4,
  },
  {
    id: 6,
    name: '티/커피용품',
    categoryId: 5,
  },
  {
    id: 7,
    name: '세트',
    categoryId: 6,subCategoryId: [
      {
        id: 1,
        name: "카테고리",
        menus: [
          {
            id: 1,
            name: '4+1',
            subCategoryId: 1
          }
        ]
      }
    ]
  }
]