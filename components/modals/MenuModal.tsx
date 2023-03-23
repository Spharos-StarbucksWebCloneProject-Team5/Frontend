import Config from "@/configs/config.export";
import { menuModalState } from "@/state/atom/menuModalState";

import { categoryType } from "@/types/header/categoryType";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function MenuModal() {
  const baseUrl = Config().baseUrl;
  const router = useRouter();

  const [categoryData, SetCategoryData] = useState<categoryType[]>([]);
  const [isMenuModalOpen, setIsMenuModalOpen] = useRecoilState(menuModalState);

  useEffect(() => {
    axios(`${baseUrl}/v1/api/categories/main`).then((res) =>
      SetCategoryData(res.data)
    );
  }, []);

  const handleClose = () => {
    setIsMenuModalOpen(false);
  };

  const handlePushClose = (path: string) => {
    router.push(path);
    setIsMenuModalOpen(false);
  };
  if (!isMenuModalOpen) return null;

  return (
    <div className={isMenuModalOpen ? "modal menu-slide-right" : "modal"}>
      <div className="welcome">
        <div className="welcome-top">
          <div onClick={handleClose}>
            <img src="assets/images/icons/close.svg" />
          </div>
        </div>
        <div className="welcome-bottom">
          <h1>Welcome !</h1>
          <p>온라인 스토어에 오신 것을 환영합니다.</p>
        </div>
      </div>
      <section className="section-top">
        <div className="all-product">
          <div onClick={() => handlePushClose("/listview")}>
            전체 상품 보기
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
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
            <div
              className="menu-bottom-list-item-left"
              onClick={() => handlePushClose("/event")}
            >
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
    </div>
  );
}