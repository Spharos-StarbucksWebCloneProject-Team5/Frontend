import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import RecommandWidget from "@/components/widgets/RecommandWidget";
import ChunsikWidget from "@/components/widgets/ChunsikWidget";
import { useEffect, useState } from "react";
//import { mainEventListType } from "@/types/main/eventDataType";
import Config from "@/configs/config.export";
import axios from "axios";
import { eventType } from "@/types/main/eventDataType";
import Mainbanner from "@/components/widgets/Mainbanner";
import { useIdleTimer } from "react-idle-timer";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { TIMEOUT } from "dns";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const [eventListData, setEventListData] = useState<eventType[]>();
  // const [chunsikListData, setChunsikListData] = useState<eventType[]>();

  const baseUrl = Config().baseUrl;
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const router = useRouter();

  useEffect(() => {
    axios(`${baseUrl}/v1/api/events/all`).then((res) => {
      setEventListData(res.data);
    });
  }, []);

  // const { getRemainingTime } = useIdleTimer({
  //   onIdle,
  //   timeout: 10000,
  // });

  // function onIdle() {
  //   console.log(`로로로로로로ㅗ로로`);

  //     console.log(`ㅇㅇㅇㅇㅇㅇㅇㅇ`);
  //     if (getRemainingTime() === 20000) {
  //       Swal.fire({
  //         title: "로그인을 연장하시겠습니까?",
  //         showDenyButton: true,
  //         showCancelButton: false,
  //         confirmButtonText: `확인`,
  //         denyButtonText: `취소`,
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           axios
  //             .post(`${baseUrl}/api/v1/users/logout`, {
  //               headers: {
  //                 Authorization: `Bearer ${cookies.id}`,
  //               },
  //             })
  //             .then((res) => {
  //               // setLoginData({
  //               //   userId: res.data.data.userId,
  //               //   accessToken: res.headers.accesstoken,
  //               //   refreshToken: res.headers.refreshtoken,
  //               //   isLogin: true,
  //               // });
  //               let myLogin = localStorage;
  //               myLogin.setItem("userId", res.data.data.userId);
  //               myLogin.setItem("refreshToken", res.headers.refreshtoken);
  //               myLogin.setItem("nickname", res.data.data.name);
  //               setCookie("id", res.headers.accesstoken, { path: "/" });
  //             });
  //         }
  //       });

  //       if (getRemainingTime() <= 10000) {
  //         // setLoginData({
  //         //   userId: "",
  //         //   accessToken: "",
  //         //   refreshToken: "",
  //         //   isLogin: false,
  //         // });
  //         localStorage.removeItem("accessToken");
  //         localStorage.removeItem("refreshToken");
  //         localStorage.removeItem("userId");
  //         removeCookie("id");
  //       }
  //     }

  // }
  // if (cookies.id) {
  //   useIdleTimer({
  //     onIdle() {
  //       Swal.fire({
  //         title: "로그인을 연장하시겠습니까?",
  //         showDenyButton: true,
  //         showCancelButton: false,
  //         confirmButtonText: `확인`,
  //         denyButtonText: `취소`,
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           axios
  //             .post(`${baseUrl}/api/v1/users/reissue`, {
  //               headers: {
  //                 accessToken: `Bearer ${cookies.id}`,
  //                 refreshToken: localStorage.getItem("refreshToken"),
  //               },
  //             })
  //             .then((res) => {
  //               let myLogin = localStorage;
  //               myLogin.setItem("userId", res.data.data.userId);
  //               myLogin.setItem("refreshToken", res.headers.refreshtoken);
  //               myLogin.setItem("nickname", res.data.data.name);
  //               setCookie("id", res.headers.accesstoken, { path: "/" });

  //             });
  //         } else {
  //           //취소 버튼 눌렀을 때
  //           useIdleTimer({
  //             onIdle() {
  //               console.log("zzzzzzzzzzzz");
  //               // setLoginData({
  //               //   userId: "",
  //               //   accessToken: "",
  //               //   refreshToken: "",
  //               //   isLogin: false,
  //               // });
  //               localStorage.removeItem("accessToken");
  //               localStorage.removeItem("refreshToken");
  //               localStorage.removeItem("userId");
  //               removeCookie("id");
  //               router.push("/");
  //             },
  //             timeout: 10000,
  //             name: "logoutTimer",
  //           });
  //         }
  //       });
  //     },
  //     timeout: 10000,
  //     name: "loginTimer",
  //   });
  // }

  return (
    <>
      <Head>
        <title>StarBucks Clone Site</title>
      </Head>
      <Mainbanner />
      {eventListData &&
        eventListData.map((event: eventType, index) =>
          eventListData.length === index + 1 ? (
            <ChunsikWidget key={event.id} data={event} />
          ) : (
            <RecommandWidget key={event.id} data={event} />
          )
        )}
    </>
  );
};

export default Home;
