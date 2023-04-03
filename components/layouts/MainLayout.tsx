//react
import React, { useEffect, useState } from "react";

//next
import Head from "next/head";
import { useRouter } from "next/router";

//recoil
import Header from "./Header";
import MenuModal from "../modals/MenuModal";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state/atom/userLoginState";
import { useCookies } from "react-cookie";

export default function MainLayout(props: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useRecoilState(userLoginState);
  const [cookies, setCookie] = useCookies(["id"]);

  useEffect(() => {
    const myLogin = cookies.id;
    if (myLogin && !isLogin.isLogin) {
      console.log("로그인 되어있음");
      setIsLogin({
        userId: localStorage.getItem("userId") || "",
        accessToken: localStorage.getItem("accessToken") || "",
        refreshToken: localStorage.getItem("refreshToken") || "",
        isLogin: true,
      });
    }
  }, []);

  const router = useRouter();
  console.log(router.pathname);
  console.log(isLogin);

  return (
    <>
      <MenuModal />
      <Head>
      <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js" integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"></script>
        <meta name="description" content="StarBucks Clone Site" />
        <meta name="keywords" content="StarBucks, Clone, Site" />
      </Head>

      {(router.pathname && router.pathname === "/menu") ||
      router.pathname === "/search" ? null : (
        <Header />
      )}

      <div className="container">{props.children}</div>
    </>
  );
}
