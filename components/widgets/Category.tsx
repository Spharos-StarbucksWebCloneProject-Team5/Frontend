import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import {
  MenuDataType,
  filterDataType,
  menuListDepth2,
} from "@/types/filter/filterTypes";
import Config from "@/configs/config.export";
import axios from "axios";
import FilterMenuList from "../ui/FilterMenuList";

export default function Category() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;

  const [filterData, setFilterData] = useState<filterDataType[]>([]);
  const [menuList, setMenuList] = useState<MenuDataType[]>([]);
  const [categoryList, setCategoryList] = useState<MenuDataType[]>([]);
  const [menuListDepth2, setMenuListDepth2] = useState<menuListDepth2[]>([]);

  //카테고리 데이터 받아옴
  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/categories/main`).then((res) => {
      console.log(res.data);
      setCategoryList(res.data);
    });
    axios.get(`${baseUrl}/v1/api/categories/middle`).then((res) => {
      console.log(res.data);
      setMenuListDepth2(res.data);
    });
    console.log("필터데이터"+filterData);
  }, []);


  useEffect(() => {
    //console.log("필터링데이터", filterData);
    let queryUrl = "";
    filterData.forEach((item) => {
      queryUrl += `&${item.key}=${item.value}`;
    });
    router.push(`/listview?category=${router.query.category}${queryUrl}`);
    console.log("필터데이터"+filterData.length);
  }, [filterData]);


  useEffect(() => {
    setMenuList(
      menuListDepth2.find(
        (item) => item.id.toString() === router.query.category
      )?.data || []
    ); 
  }, [router]);

  return (
    <>
      <FilterMenuList
        data={categoryList}
        filterFile={filterData}
        setFilter={setFilterData}
      />
      {/* {menuList.length > 0 && (
        <FilterMenuList
          data={menuList}
          filterFile={filterData}
          setFilter={setFilterData}
        />
      )} */}
    </>
  );
}
