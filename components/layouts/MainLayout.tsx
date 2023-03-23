//react
import React, { useState } from "react";

//next
import Head from "next/head";
import { useRouter } from "next/router";

//recoil
import Header from "./Header";
import MenuModal from "../modals/MenuModal";
import { useRecoilValue } from "recoil";
import { userLoginState } from "@/state/atom/userLoginState";

export default function MainLayout(props: { children: React.ReactNode }) {
  const { isLogin } = useRecoilValue(userLoginState);

  const router = useRouter();
  console.log(router.pathname);
  console.log(isLogin);

  return (
    <>
      <MenuModal />
      <Head>
        <meta name="description" content="StarBucks Clone Site" />
        <meta name="keywords" content="StarBucks, Clone, Site" />
      </Head>

      <div className="container">
        {router.pathname && router.pathname === "/menu" ? null : <Header />}
      </div>
      <div className="container">{props.children}</div>
    </>
  );
}
