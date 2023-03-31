import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import SubNavigation from "@/components/widgets/SubNavigation";
import Category from "@/components/widgets/Category";
import { bottomNavMenuType } from "@/types/header/navMenuType";
import { bottomNavData } from "@/datas/navData";
import { cartState } from "@/state/atom/cartState";
import { menuModalState } from "@/state/atom/menuModalState";
import { userLoginState } from "@/state/atom/userLoginState";

import Swal from "sweetalert2";
import BackButton from "../ui/BackButton";
import { useCookies } from "react-cookie";

export default function Header() {
  const router = useRouter();
  console.log(router.pathname);

  const [navBottomData] = useState<bottomNavMenuType[]>(bottomNavData);
  const cartCnt = useRecoilValue(cartState);
  const setIsMenuModalOpen = useSetRecoilState(menuModalState);
  const [isLogin, setIsLogin] = useRecoilState(userLoginState);
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);

  const handleLogout = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `확인`,
      denyButtonText: `취소`,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLogin({
          userId: "",
          accessToken: "",
          refreshToken: "",
          isLogin: false,
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        removeCookie("id");
        let timerInterval: string | number | NodeJS.Timer | undefined;
        Swal.fire({
          html: "다음에 또~",
          timer: 800,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            // const b = Swal.getHtmlContainer().querySelector("b");
            // timerInterval = setInterval(() => {
            //   b.textContent = Swal.getTimerLeft();
            // }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        router.push("/");
      }
    });
  };

  return (
    <header>
      <div className="header-top">
        <div className="menu-icon">
          {router.pathname === "/cart" ||
          router.pathname === "/listview" ||
          router.pathname === "/signup" ? (
            <BackButton />
          ) : (
            <div onClick={() => setIsMenuModalOpen(true)}>
              <img src="assets/images/icons/menu.svg" alt="" />
            </div>
          )}
        </div>
        <Link href={"/"}>
          <h1>온라인 스토어</h1>
        </Link>
        <nav>
          <ul>
            <li onClick={() => router.push("/search")}>
              <img src="assets/images/icons/search.svg" />
            </li>
            <li onClick={() => router.push("/cart")}>
              <p className="cart-badge">{cartCnt}</p>
              <img src="assets/images/icons/shopping-cart.svg" />
            </li>
            {isLogin.isLogin ? (
              <li onClick={handleLogout}>logout</li>
            ) : (
              <li onClick={() => router.push("/login")}>
                <img src="assets/images/icons/user.svg" />
              </li>
            )}
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
