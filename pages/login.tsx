import React, { ChangeEvent, useState } from "react";

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

export default function Login() {
  const router = useRouter();

  const BASE_URL = Config().baseUrl;
  const [loginData, setLoginData] = useRecoilState(userLoginState);
  const [cookies, setCookie] = useCookies(["id"]);
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
  //로그인 확인용 => Recoil 셋업 되는대로 라우팅 처리 하겠습니다.
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
        .post(`${BASE_URL}/api/v1/users/login`, {
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
      <CloseButton />
      <section className="login-section">
        <div className="login-top">
          <h2>로그인</h2>
          <img id="starbucks" src="./assets/images/starbucks-logo.png" alt="" />
          <p className="title">
            안녕하세요. <br /> 스타벅스입니다.
          </p>
          <p className="sub">회원 서비스 이용을 위해 로그인 해주세요.</p>
        </div>
        <div className="login">
          <input
            type="text"
            name="email"
            defaultValue={inputData.email}
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
            defaultValue={inputData.password}
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
      <div className="submit-container">
        <button type="button" onClick={handleSubmit}>
          로그인
        </button>
      </div>
    </div>
  );
}
