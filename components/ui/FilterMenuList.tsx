import Config from "@/configs/config.export";
import { MenuDataType, filterDataType } from "@/types/filter/filterTypes";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { menuListDepth3 } from "@/datas/navData";

export default function FilterMenuList(props: {
  data: MenuDataType[];
  filterFile: filterDataType[];
  setFilter: Dispatch<SetStateAction<filterDataType[]>>;
}) {
  const router = useRouter();
  const baseUrl = Config().baseUrl;
  const [categoryMain, setCategoryMain] = useState<MenuDataType[]>();
  const [categoryMiddle, setCategoryMiddle] = useState<MenuDataType[]>();
  const [categoryId, setCategoryId] = useState<number>(0);
  const [subCategoryId, setSubCategoryId] = useState<number[]>([]);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "category" && item.id === 0) {//전체 메뉴
      router.push(`/listview?category=0`);
      setCategoryId(0);
      setSubCategoryId([])
      setCategoryMiddle([]);
      return;
    }
    if (item.key === "category" && item.id !== 0) {//전체x 일 때
      router.push(`/listview?category=${item.id}`);
      setCategoryId(item.id);
      setSubCategoryId([]);
      setCategoryMiddle([]);
      
      if(item.id === 1 || item.id === 2 || item.id === 3){
      axios.get(`${baseUrl}/v1/api/categories/middle`).then((res) => {
          setCategoryMiddle(res.data[item.id - 1].data);
        });
      }
    } else if (item.key === "subCategory" && item.id !== 0) {//전체x인 subCategory
      setSubCategoryId([...subCategoryId,
      item.id
      ]);
      return;
    }
  }

  const handleDeleteQuery = (item: MenuDataType) => {
    if (item.key === "subCategory" && item.id !== 0) {
      setSubCategoryId(subCategoryId.filter((data) => data !== item.id));
      return;
    }
  };

  useEffect(() => {
    let queryUrl = "";
    subCategoryId.map((item) => {
      queryUrl += `&subCategory=${item}`;
    });
    router.push(`/listview?category=${categoryId}${queryUrl}`);

  }, [subCategoryId])

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/categories/main`).then((res) => {
      console.log(res.data);
      setCategoryMain(res.data);
    });
  }, []);

  return (
    <div className="header-sub">
      <nav>
        <ul className="allProducts-ul">
          {categoryMain &&
            categoryMain.map((item: MenuDataType) => (
              <li
                key={item.id}
                onClick={() => handleAddQuery(item)}
                className={router.query.category === String(item.id) ? "active" : ""}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
        <ul className="allProducts-ul">
          {categoryMiddle &&
            categoryMiddle.map((item: MenuDataType) => (
              <li
                key={item.id}
                className={subCategoryId.includes(item.id) ? "active" : ""}
                onClick={() => {
                  subCategoryId.includes(item.id)
                  ? handleDeleteQuery(item)
                  : handleAddQuery(item)
                }}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
        {/* <ul className="allProducts-ul">
          {menuListDepth3 &&
            menuListDepth3.map((item) => (
              <li
                key={item.id}
                onClick={() => handlePrice(item.id)}
                className={priceId === item.id ? "active" : ""}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul> */}
      </nav>
    </div>
  );
}
