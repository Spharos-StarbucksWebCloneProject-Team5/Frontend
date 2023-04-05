import Config from "@/configs/config.export";
import { userLoginState } from "@/state/atom/userLoginState";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { resolve } from "path/posix";
import { useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";

interface ResponseType {
  ok: boolean;
  error?: any;
}

export default function Kakao() {
  const router = useRouter();
  const code = router.query.code;
  //const code = router.query
  //console.log(typeof JSON.stringify(code))
  //const strCode = JSON.stringify(code)
  const baseUrl = Config().baseUrl;
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [loginData, setLoginData] = useRecoilState(userLoginState);

  //  useEffect(

  //     async () => {
  //         console.log(code)
  //       // 백엔드에 전송2
  //       await axios.get(`${baseUrl}/login/kakao?code=${code}`).then((res) => console.log(res));

  //       //if (response.ok) { // 성공하면 홈으로 리다이렉트
  //         router.push('/');
  //      // } else { // 실패하면 에러 페이지로 리다이렉트
  //       //  router.push('/login');
  //      /// }
  //     },
  //     [router]
  //   );

  console.log(code);
  useEffect(() => {
    if (code !== undefined) {
      axios.get(`${baseUrl}/login/kakao?code=${code}`).then((res) => {
        
        console.log("@@@"+JSON.stringify(res))
        console.log(JSON.stringify(res.headers));
        setLoginData({
          userId: res.data.data.userId,
          accessToken: res.headers.accesstoken,
          refreshToken: res.headers.refreshtoken,
          isLogin: true,
        });
        let myLogin = localStorage;
        myLogin.setItem("userId", res.data.data.userId);
        myLogin.setItem("refreshToken", res.headers.refreshtoken);
        myLogin.setItem("nickname", res.data.data.name);
        setCookie("id", res.headers.accesstoken, { path: "/" });
        router.push("/");
      });
    }
  }, [code]);

  // useEffect(async(code: string | string[]) => {3
  //     await axios.get(`${baseUrl}/login/kakao?code=${code}`).then((res) => {console.log(res)})
  //         .catch((error) => {
  //             console.log('kakaoLogin Failed');
  //         });
  //     router.push('/');
  // }, []);

  //   useEffect(() => {
  //     if (authCode) {
  //       loginHandler(authCode);

  //       // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
  //     } else if (kakaoServerError) {
  //       router.push('/login');
  //     }
  //   }, [loginHandler, authCode, kakaoServerError, router]);

  return <h2>로그인 중입니다..</h2>;
}
