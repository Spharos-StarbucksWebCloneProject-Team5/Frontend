import Config from "@/configs/config.export";
import { MenuDataType, filterDataType } from "@/types/filter/filterTypes";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function FilterMenuList(props: {
  data: MenuDataType[];
  filterFile: filterDataType[];
  setFilter: Dispatch<SetStateAction<filterDataType[]>>;
}) {
  const router = useRouter();
  const baseUrl = Config().baseUrl;

  const [categoryMain, setCategoryMain] = useState<MenuDataType[]>();
  const [categoryMiddle, setCategoryMiddle] = useState<MenuDataType[]>();

  const handleAddQuery = (item: MenuDataType) => {
    console.log(item);
    if (item.key === "category") {
      router.push(`/listview?category=${item.id}`);

      axios.get(`${baseUrl}/v1/api/categories/middle`)
        .then((res) => {
          console.log(res.data[item.id].data)
          console.log(res.data.data)
          setCategoryMiddle(res.data)
        });

    if (props.filterFile.find((data) => data.id === item.id)) {
      props.setFilter(props.filterFile.filter((data) => data.id !== item.id));
      return;
    }

    // categoryMiddle && categoryMiddle.map((data) => {
    //   data.value === data.
    // });

    // if (props.filterFile.find((data) => data.value === item.name)) {
    //   props.setFilter(
    //     props.filterFile.filter((data) => data.value !== item.name)
    //   );
    //   return;
    // }
    // props.setFilter([
    //   ...props.filterFile,
    //   {
    //     id: item.id,
    //     key: item.key,
    //     value: item.name,
    //     isCheck: true,
    //   },
    // ]);
  };

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/categories/main`)
      .then((res) => {
        console.log(res.data)
        setCategoryMain(res.data)
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
}
