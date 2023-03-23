import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SubNavigation from "../widgets/SubNavigation";
import Category from "../widgets/ProductCategory";
import { bottomNavMenuType } from "@/types/header/navMenuType";
import { bottomNavData } from "@/datas/navData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "@/state/atom/cartState";
import { menuModalState } from "@/state/atom/menuModalState";

export default function Header() {
  const router = useRouter();
  console.log(router.pathname);

  const [navBottomData] = useState<bottomNavMenuType[]>(bottomNavData);
  const cartCnt = useRecoilValue(cartState);
  const setIsMenuModalOpen = useSetRecoilState(menuModalState);

  return (
    <header>
      <div className="header-top">
        <div className="menu-icon">
          <div onClick={() => setIsMenuModalOpen(true)}>
            <img src="assets/images/icons/menu.svg" alt="" />
          </div>
        </div>
        <Link href={"/"}>
          <h1>온라인 스토어</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <img src="assets/images/icons/search.svg" />
            </li>
            <li>
              <p className="cart-badge">{cartCnt}</p>
              <img src="assets/images/icons/shopping-cart.svg" />
            </li>
            <li>
              <img src="assets/images/icons/user.svg" />
            </li>
          </ul>
        </nav>
      </div>
      {router.pathname === "/" ||
      router.pathname === "/event" ||
      router.pathname === "/best" ||
      router.pathname === "/mypage" ? (
        <div className="header-bottom">
          <nav>
            <ul>
              {navBottomData &&
                navBottomData.map((nav) =>
                  nav.link === "/event?category=1" ||
                  nav.link === "/best?category=1" ? (
                    <li
                      key={nav.id}
                      className={
                        router.pathname === nav.link.split("?")[0]
                          ? "active"
                          : ""
                      }
                    >
                      <Link href={nav.link}>{nav.name}</Link>
                    </li>
                  ) : (
                    <li
                      key={nav.id}
                      className={router.pathname === nav.link ? "active" : ""}
                    >
                      <Link href={nav.link}>{nav.name}</Link>
                    </li>
                  )
                )}
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
      {router.pathname === "/event" || router.pathname === "/best" ? (
        <SubNavigation />
      ) : (
        ""
      )}
      {router.pathname === "/listview" ? <Category /> : ""}
    </header>
  );
}
