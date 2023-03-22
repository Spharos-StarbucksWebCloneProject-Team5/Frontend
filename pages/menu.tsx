import Config from "@/configs/config.export";
import { productListCardType } from "@/types/product/fetchDataType";
import { categoryType } from "@/types/header/categoryType";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function menu() {
  const baseUrl = Config().baseUrl;
  const [categoryData, SetCategoryData] = useState<categoryType[]>([]);
  //const [productData, SetProductData] = useState<productListCardType[]>([]);

  useEffect(() => {
    axios(`${baseUrl}/v1/api/categories/main`).then((res) =>
      SetCategoryData(res.data)
    );
  }, []);

  return (
    <>
      <div className="welcome">
        <div className="welcome-top">
          <Link href="./index.html">
            <img src="assets/images/icons/close.svg" />
          </Link>
        </div>
        <div className="welcome-bottom">
          <h1>Welcome !</h1>
          <p>온라인 스토어에 오신 것을 환영합니다.</p>
        </div>
      </div>
      <section className="section-top">
        <div className="all-product">
          <Link id="test" href="/listview">
            전체 상품 보기
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </Link>
        </div>

        <div className="menu-product-list">
          {categoryData.map((element) => (
            <div key={element.id} className="menu-product-item">
              <div className="menu-product-item__img">
                <img src={element.thumbNail} alt="" />
              </div>
              <div className="menu-product-item__info">
                <p className="item-title">{element.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-bottom">
        <div className="menu-bottom">
          <div className="menu-bottom-list">
            <div className="menu-bottom-list-item-left">
              <h3>기획전</h3>
              <p>진행중인 기획전을 만나보세요</p>
            </div>
            <div className="menu-bottom-list-item-right">
              <img
                src="./assets/images/icons/arrow-point-to-right.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="menu-bottom-list">
          <div className="menu-bottom-list-item-left">
            <h3>베스트</h3>
            <p>스타벅스의 베스트 상품을 만나보세요.</p>
          </div>
          <div className="menu-bottom-list-item-right">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
