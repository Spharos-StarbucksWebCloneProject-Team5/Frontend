import React, { ChangeEvent, useEffect, useState } from "react";

import Config from "@/configs/config.export";

import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "react-cookie";

import { LoginReq } from "@/types/UserRequest/Request";

import { userLoginState } from "@/state/atom/userLoginState";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import CloseButton from "@/components/ui/CloseButton";
import LoginFooter from "@/components/page/login/LoginFooter";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import BackButton2 from "@/components/ui/BackButton2";



export default function Login() {
  
  const router = useRouter();

  const baseUrl = Config().baseUrl;
  const [loginData, setLoginData] = useRecoilState(userLoginState);
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  //const [count, setCount] = useRecoilState(timerState);

  const [inputData, setInputData] = useState<LoginReq>({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
    window.Kakao.init('b862dd99f573e07396d32022f0e12491');
    console.log(window.Kakao.isInitialized());
    }
  }, [])
  
  function kakaoLogin() {
    console.log(window.Kakao.Auth);
    window.Kakao.Auth.authorize({
      redirectUri: `http://3.36.128.190:80/kakao`, 
    });
    //loginHandler
  }

  const handleSubmit = () => {
    console.log("login");
    console.log(inputData);
    if (inputData.email === "" || inputData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "이메일과 비밀번호를 입력해주세요!",
      });
      return;
    } else {
      axios
        .post(`${baseUrl}/api/v1/users/login`, {
          email: inputData.email,
          password: inputData.password,
        })
        .then((res) => {
          console.log(res);
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
          

          Swal.fire({
            icon: "success",
            text: `${myLogin.getItem("nickname")}님 Welcome!`,
          });
          console.log(router);
          router.push("/");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            Swal.fire({
              icon: "error",
              title: "아이디 혹은 비밀번호가 틀렸습니다.",
            });
            setInputData({
              email: "",
              password: "",
            });
          } else if (err.response.status === 500) {
            Swal.fire({
              icon: "error",
              title: "서버에 접속할 수 없습니다. 잠시후에 다시 시도해주세요.",
            });
            setInputData({
              email: "",
              password: "",
            });
          }
        });
    }
  };

  return ( 
    <div className="modal">
      <div className="login-header">
        <div className="login-header-back-button">
          <BackButton2 />
        </div>
        <h3>로그인</h3>
      </div>
      <section className="login-section">
        <div className="login-top">
          <Image
            src="/assets/images/starbucks-logo.png"
            width={80}
            height={80}
            alt="starbucks-logo"
          />
          <p className="title">
            안녕하세요. <br /> 스타벅스입니다.
          </p>
          <p className="sub">회원 서비스 이용을 위해 로그인 해주세요.</p>
        </div>
        <div className="login">
          <input
            type="text"
            name="email"
            value={inputData.email}
            placeholder="이메일"
            onChange={handleOnChange}
          />
          {isError.email ? (
            <p className="error-message">이메일을 입력해 주세요.</p>
          ) : null}
          <br />
          <input
            type="password"
            name="password"
            value={inputData.password}
            placeholder="비밀번호"
            onChange={handleOnChange}
          />
          {isError.password ? (
            <p className="error-message">비밀번호를 입력해 주세요.</p>
          ) : null}
          <LoginFooter />
        </div>
      </section>

      <div className="kakaoLogin" onClick={kakaoLogin}>
        <img src="/assets/images/icons/kakaoLogin.png" alt="" />
      </div>

      <div className="submit-container">
        <button type="button" onClick={handleSubmit}>
          로그인
        </button>
      </div>
    </div>
  );
}
