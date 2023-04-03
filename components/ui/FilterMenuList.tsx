import Config from "@/configs/config.export";
import { MenuDataType, filterDataType } from "@/types/filter/filterTypes";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function FilterMenuList(props: { data: MenuDataType[],filterFile: filterDataType[], setFilter: Dispatch<SetStateAction<filterDataType[]>>}) {
  const router = useRouter();
  const baseUrl = Config().baseUrl;
  const [categoryMain, setCategoryMain] = useState<MenuDataType[]>();
  const [categoryMiddle, setCategoryMiddle] = useState<MenuDataType[]>();
  const [categoryId, setCategoryId] = useState<number>(0);

  const handleAddQuery = (item: MenuDataType) => {
    console.log(item);
    if (item.key === "category" && item.id === 0) {
      router.push(`/listview?category=0`);
      setCategoryMiddle([]);
      return;
    }
    if (item.key === "category" && item.id !== 0) {
      router.push(`/listview?category=${item.id}`);
      setCategoryId(item.id);

      axios.get(`${baseUrl}/v1/api/categories/middle`).then((res) => {
        console.log(res.data[item.id-1].data);
        setCategoryMiddle(res.data[item.id-1].data);
      });

      if (props.filterFile.find((data) => data.id === item.id)) {
        props.setFilter(props.filterFile.filter((data) => data.id !== item.id));
        return;
      }
      
    } else if (item.key === "subCategory" && item.id !== 0) {
      router.push(`/listview?category=${categoryId}&subCategory=${item.id}`);
      return;
    } 
    
    
  }

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/categories/main`).then((res) => {
      console.log(res.data);
      setCategoryMain(res.data);
    });
  }, []);

  console.log('filterfile',props.filterFile);
    return (
      <div className="header-sub">
        <nav>
          <ul className="allProducts-ul">
            {categoryMain &&
              categoryMain.map((item: MenuDataType) => (
                <li
                  key={item.id}
                  onClick={() => handleAddQuery(item)}
                  // className={item.key ===  ? "active" : ""}
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
                  onClick={() => handleAddQuery(item)}
                  // className={item.key ===  ? "active" : ""}
                >
                  <p>{item.name}</p>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    );
};
