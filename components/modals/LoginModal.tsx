import { LoginRes } from "../../types/UserRequest/Response";
import { cookies } from "next/headers";
import { loginData } from "../../types/UserRequest/LoginData";
import Config from "@/configs/config.export";
//import { REQUEST_LOGIN } from '@/constants/Apis/URL';
import { userIsLogin } from "../../state/atom/userIsLoginState";
import { userLoginState } from "../../state/atom/userLoginState";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";

export default function LoginModal(props: {
  thisModalName: string;
  setThisModalName: Dispatch<SetStateAction<string>>;
  setIsModalView: Function;
}) {
  const BASE_URL = Config().baseUrl;
  const [loginData, setLoginData] = useRecoilState<LoginRes>(userLoginState);
  const setIsLogIn = useSetRecoilState<boolean>(userIsLogin);

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
  const handleSubmit = (event: any) => {
    event.preventDefault();
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
          setLoginData(res.data.data);
          setIsLogIn(true);
          let myLogin = localStorage;
          myLogin.setItem("userId", res.data.data.userId);
          myLogin.setItem("accessToken", res.data.data.accessToken);
          myLogin.setItem("refreshToken", res.data.data.refreshToken);
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "Welcome!",
          });
          props.setIsModalView(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              id="email"
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
              id="pwd"
              placeholder="비밀번호"
              onChange={handleOnChange}
            />
            {isError.password ? (
              <p className="error-message">비밀번호를 입력해 주세요.</p>
            ) : null}
            <br />
            <button type="submit">로그인</button>
          </form>
        </div>
      </section>
    </>
  );
}
