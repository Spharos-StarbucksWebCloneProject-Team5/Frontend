import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { categoryList } from "../../datas/navData";
import { subCategoryList } from "../../datas/navData";

export default function Category() {
  const router = useRouter();

  //const { pathname, query } = useRouter();

  const [categoryId, SetCategoryId] = useState(0);
  const [subCategoryId, SetSubCategoryId] = useState([""]);

  const query = subCategoryId.map((element) => "&subCategoryId=" + element);

  const url =
    `http://localhost:6601//listview?categoryid=${categoryId}` + query;

  useEffect(() => {
    //console.log(query);
    fetch(url).then((res) => res.json());
    //console.log(router.pathname);
  }, [router.pathname]);
  useEffect(() => {
    router.replace(url);
  }, [categoryId, subCategoryId]);

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

      {subCategoryList
        .filter(
          (element1) =>
            element1.mainCategoryId === 0 ||
            element1.mainCategoryId === categoryId
        )
        .map((element2) => (
          <div className="header-sub">
            <nav>
              <ul className="allProducts-ul">
                <li key={element2.id}>
                  <b>{element2.name}</b>
                </li>
                {element2.subCategoryId.map((element3) => (
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
        ))}
    </>
  );
}
