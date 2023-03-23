//react
import React, { useState } from "react";

//next
import Head from "next/head";
import { useRouter } from "next/router";

//recoil
import ModalUi from "../ui/ModalUi";
import Header from "./Header";
import MenuModal from "../modals/MenuModal";

export default function MainLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  console.log(router.pathname);

  // Modal
  const [isView, setIsView] = useState<boolean>(false);

  return (
    <>
      <MenuModal />
      <ModalUi
        isModalView={isView}
        setIsModalView={setIsView}
        modalName="login"
      />
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
