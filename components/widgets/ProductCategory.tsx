import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { categoryList, menuListDepth2 } from "@/datas/navData";
import FilterMenuList from "../ui/FilterMenuList";
import { MenuDataType, filterDataType } from "@/types/filter/filterTypes";

export default function Category() {
  const router = useRouter();

  const [filterData, setFilterDatas] = useState<filterDataType[]>([]);
  const [menuList, setMenuList] = useState<MenuDataType[]>([]);

  useEffect(() => {
    console.log("필터링데이터", filterData);
    let queryUrl = "";
    filterData.forEach((item) => {
      queryUrl += `&${item.key}=${item.value}`;
    });
    router.push(`/listview?category=${router.query.category}${queryUrl}`);
    // console.log(menuList);
  }, [filterData]);

  useEffect(() => {
    setMenuList(
      menuListDepth2.find((item) => item.name === router.query.category)
        ?.data || []
    ); // 1번 메뉴의 서브메뉴
  }, [router]);

  return (
    <>
      <FilterMenuList
        data={categoryList}
        filterFile={filterData}
        setFilter={setFilterDatas}
      />
      {menuList.length > 0 && (
        <FilterMenuList
          data={menuList}
          filterFile={filterData}
          setFilter={setFilterDatas}
        />
      )}
    </>
  );
}
