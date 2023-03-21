//react
import React, { useEffect, useState } from "react";

//next
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

//component
import SubNavigation from "../widgets/SubNavigation";
import {
  bottomNavMenuType,
  bottomSubCategoryList,
  bottomSubNavMenuType,
} from "@/types/navMenuType";
import { cartState } from "@/state/cartState";
import {
  filterMenuType,
  filterSubCategoryType,
} from "@/types/header/filterType";

//recoil
import { useRecoilValue } from "recoil";
import ModalUi from "../ui/ModalUi";
import Category from "../widgets/ProductCategory";
//import {} from "../../";

// import { bottomNavData } from '../../datas/navData'

export default function MainLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  console.log(router.pathname);

  // const cartPathName:String = '/cart';
  // const [ isCart, setIsCart ] = useState<Boolean>(false)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>();

  // Modal
  const [isView, setIsView] = useState<boolean>(false);

  const cartCnt = useRecoilValue(cartState);

  // const [headerMenus, setHeaderMenus] = useState<bottomSubNavMenuType[]>()
  // const [category, setCategory] = useState<filterMenuType[]>()
  // const [subCategory, setSubCategory] = useState<filterSubCategoryType[]>()

  // const handleFilter = (name: string) => {
  //   setSubCategory(category?.filter((item: filterMenuType) => item.name === name))
  // }

  useEffect(() => {
    // if(router.pathname === cartPathName) {
    //   setIsCart(true)
    // }
    fetch("http://localhost:3001/nav")
      .then((res) => res.json())
      .then((data) => setNavBottomData(data));
  }, []);

  return (
    <>
      <ModalUi
        isModalView={isView}
        setIsModalView={setIsView}
        modalName="login"
      />
      <Head>
        <meta name="description" content="StarBucks Clone Site" />
        <meta name="keywords" content="StarBucks, Clone, Site" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      <div className="container">
        <header>
          <div className="header-top">
            <div className="menu-icon">
              <Link href="/menu">
                <img src="assets/images/icons/menu.svg" alt="" />
              </Link>
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
                <li onClick={() => setIsView(true)}>
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
                    navBottomData.map((nav) => (
                      <li
                        key={nav.id}
                        className={router.pathname === nav.link ? "active" : ""}
                      >
                        <Link href={nav.link}>{nav.name}</Link>
                      </li>
                    ))}
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
      </div>
      <div className="container">{props.children}</div>
    </>
  );
}
