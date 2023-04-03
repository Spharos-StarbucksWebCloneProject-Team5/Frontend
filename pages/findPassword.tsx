import React, { useState, useEffect } from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Countdown from "react-countdown";

import axios from "axios";
import Config from "@/configs/config.export";
import Swal from "sweetalert2";
import { SignupErrType } from "@/types/signup/signupErrType";
import StButton from "@/components/ui/StButton";
import { useCookies } from "react-cookie";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

const renderer = (props: {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
}) => {
  if (props.completed) {
    Swal.fire({
      icon: "warning",
      text: `입력 시간이 초과 되었습니다. 다시 시도해주세요.`,
      customClass: {
        confirmButton: "swal-confirm-button",
      },
    });
    return <></>;
  } else {
    // Render a countdown
    return (
      <span>
        {props.minutes} : {props.seconds}
      </span>
    );
  }
};

const findPassword = ({ inputData, setInputData }: ChildProps) => {
  const [confirmKey, setConfirmKey] = useState<string>("");
  const [confirmView, setConfirmView] = useState<boolean>(false);
  const [duplicateView, setDuplicateView] = useState<boolean>(false);
  const [confirmTime, setConfirmTime] = useState<number>();
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);

  const [errMsg, setErrMsg] = useState<SignupErrType>({
    emailErr: "",
    passwordErr: "",
    confirmKeyErr: "",
    confirmPasswordErr: "",
  });

  const baseUrl = Config().baseUrl;

  const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;

  // 정규식표현 만들어줘 8자리 이상 숫자, 영문자, 특수문자
  const pwRegex: RegExp =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmKey") setConfirmKey(value);
    if (name === "password" && value.length > 0) {
      if (!pwRegex.test(value)) {
        if (value.length > 25) {
          setErrMsg({
            ...errMsg,
            passwordErr: "비밀번호는 25자리 이하로 입력해주세요.",
          });
        } else if (value.length < 9) {
          setErrMsg({
            ...errMsg,
            passwordErr: "비밀번호는 8자리 이상으로 입력해주세요.",
          });
        } else {
          setErrMsg({
            ...errMsg,
            passwordErr: "비밀번호는 영문, 숫자, 특수문자를 포함해주세요.",
          });
        }
        //return;
        axios.put(`${baseUrl}/api/v1/users/modify`, {
          email: inputData.userEmail,
          password: value,
        });
      } else {
        setErrMsg({ ...errMsg, passwordErr: "" });
      }
    }

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleEmailConfirm = () => {
    if (inputData.userEmail === "") {
      setErrMsg({ ...errMsg, emailErr: "이메일을 입력해주세요." });
      return;
    }
    if (!emailRegex.test(inputData.userEmail)) {
      setErrMsg({ ...errMsg, emailErr: "이메일 형식이 올바르지 않습니다." });
      return;
    }
    //이메일 인증
    axios
      .post(`${baseUrl}/api/v1/users/email`, { email: inputData.userEmail })
      .then((res) => {
        console.log(res.data.result);
        if (res.data.result === "success") {
          setDuplicateView(true);
          setConfirmView(true);
          setErrMsg({ ...errMsg, emailErr: "" });
        }
        Swal.fire({
          icon: "success",
          text: `인증번호가 ${inputData.userEmail}로 전송되었습니다.`,
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        setConfirmTime(Date.now() + 30000);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.result === "fail") {
          setDuplicateView(false);
          setInputData({
            ...inputData,
            userEmail: "",
          });
          alert(err.response.data.massage);
          setErrMsg({ ...errMsg, emailErr: "" });
          return;
        }
      });

    axios
      .post(`${baseUrl}/api/v1/email`, { to: inputData.userEmail })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleConfirmKey = () => {
    console.log(confirmKey);
    // 서버에 키값 확인
    axios
      .post(`${baseUrl}/api/v1/email-confirm`, { code: confirmKey })
      .then((res) => {
        console.log(res);
        // 키값이 일치하면 인증완료, 암호
        setInputData({
          ...inputData,
          isUserConfirm: true,
        });
        setErrMsg({ ...errMsg, confirmKeyErr: "" });
      })
      .catch((err) => {
        console.log(err);
        setErrMsg({
          ...errMsg,
          confirmKeyErr: "인증번호가 일치하지 않습니다.",
        });
        setConfirmKey("");
      });
  };

  return (
    <>
      <div className="greeting">
        <h2 className="signup-info">
          아이디와 비밀번호를
          <br />
          입력해주세요.
        </h2>
      </div>
      <form className="agree-input" id="agree-main">
        <div id="id-password-input">
          <input
            id="email-input"
            type="email"
            name="userEmail"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
            value={inputData.userEmail}
            required={true}
            className={inputData.isUserConfirm ? "isDisable" : ""}
            disabled={inputData.isUserConfirm}
          />
          <div className="email-confirm-button">
            <p>{errMsg.emailErr}</p>
            <button
              type="button"
              onClick={handleEmailConfirm}
              className={inputData.isUserConfirm ? "isDisable" : ""}
              disabled={inputData.isUserConfirm}
            >
              이메일인증
            </button>
          </div>
        </div>
        {confirmView && (
          <div id="id-password-input" className="confirmkey">
            <div className="email-confirmkey-div">
              <input
                id="email-confirmkey"
                type="text"
                name="confirmKey"
                placeholder="인증키를 입력해주세요."
                onChange={handleChange}
                className={inputData.isUserConfirm ? "isDisable" : ""}
                disabled={inputData.isUserConfirm}
              />
              <button
                id="email-confirm-button"
                type="button"
                onClick={handleConfirmKey}
                className={inputData.isUserConfirm ? "isDisable" : ""}
                disabled={inputData.isUserConfirm}
              >
                인증하기
              </button>
            </div>
            <div className="confirm-view">
              {!inputData.isUserConfirm ? (
                <Countdown date={confirmTime} renderer={renderer} />
              ) : (
                ""
              )}
              <p>{errMsg.confirmKeyErr}</p>
            </div>
          </div>
        )}

        <div id="id-password-input">
          <input
            type="password"
            name="password"
            placeholder="수정할 암호를 입력해주세요."
            onChange={handleChange}
          />
          <p>{errMsg.passwordErr}</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="암호를 한번 더 입력해주세요."
            onChange={handleChange}
          />
          <p>{errMsg.confirmPasswordErr}</p>
        </div>
      </form>
    </>
  );
};

export default findPassword;
