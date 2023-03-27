import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

//import { categoryList } from "../../datas/navData";
//import { subCategoryList } from "../../datas/navData";
import {
  categoryType,
  subCategoryType,
  subCategoryListType,
} from "../../types/header/categoryType";

import Config from "@/configs/config.export";
import axios from "axios";

import { categoryList } from "../../datas/navData";

export default function Category() {
  const router = useRouter();

  //const { pathname, query } = useRouter();

  const [categoryId, SetCategoryId] = useState(0);
  const [subCategoryId, SetSubCategoryId] = useState([""]);

  const [categoryData, SetCategoryData] = useState<categoryType[]>([]);
  const [subCategoryList, SetSubCategoryList] = useState<subCategoryType[]>([]);

  const baseUrl = Config().baseUrl;
  //const query = subCategoryId.map((element) => "&subCategoryId=" + element);

  //const url = `${baseUrl}/v1/api/listview?categoryId=${categoryId}`;

  // useEffect(() => {
  //   axios(url).then((res) => SetCategoryData(res.data));
  // }, []);

  // useEffect(() => {
  //   axios(`${baseUrl}/v1/api/categories/main`).then((res) =>
  //     //SetCategoryData(res.data)
  //   );
  // }, []);

  // `http://localhost:6601//listview?categoryid=${categoryId}` + query;

  // useEffect(() => {
  //   fetch(url).then((res) => res.json());
  // }, [router.pathname]);

  // useEffect(() => {
  //   router.replace(url);
  // }, [categoryId, subCategoryId]);

  useEffect(() => {
    // router.replace(url);
  }, [categoryId]);

  return (
    <>
      <div className="header-sub">
        <nav>
          <ul className="allProducts-ul">
            {categoryList.map((element) => (
              <li
                key={element.id}
                onClick={() => {
                  SetCategoryId(element.id);
                  SetSubCategoryId([]);
                }}
                className={categoryId === element.id ? "active" : ""}
              >
                <p>{element.name}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* {subCategoryList
        .filter((element1) => element1.id === 0 || element1.id === categoryId)
        .map((element2) => (
          <div className="header-sub">
            <nav>
              <ul className="allProducts-ul">
                <li key={element2.id}>
                  <b>{element2.name}</b>
                </li>
                {element2.subCategory.map((element3) => (
                  <li
                    key={element3.id}
                    onClick={() => {
                      subCategoryId.includes(element3.id.toString())
                        ? SetSubCategoryId(
                            subCategoryId.filter(
                              (item) => item !== element3.id.toString()
                            )
                          )
                        : SetSubCategoryId([
                            ...subCategoryId,
                            element3.id.toString(),
                          ]);
                      //router.replace(url);
                    }}
                    className={
                      subCategoryId.includes(element3.id.toString())
                        ? "active"
                        : ""
                    }
                  >
                    <div>
                      <p>{element3.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))} */}
    </>
  );
}
