import React, { useState, useEffect } from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Countdown from "react-countdown";

import axios from "axios";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

const Completionist = () => <span>You are good to go!</span>;

const renderer = (props: {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
}) => {
  if (props.completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {props.minutes}:{props.seconds}
      </span>
    );
  }
};

const Step02 = ({ inputData, setInputData }: ChildProps) => {
  const [confirmKey, setConfirmKey] = useState<string>("");
  const [confirmView, setConfirmView] = useState<boolean>(false);

  const [confirm, setConfirm] = useState<boolean>(false);

  //create email regex code
  const expression: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;

  useEffect(() => {
    console.log(new Date());
    console.log(inputData);
  }, [inputData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmKey") setConfirmKey(value);
    if (name === "userEmail" && expression.test(value)) {
      // 이메일 중복확인
      console.log("이메일 중복확인");
    }
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleEmailConfirm = () => {
    if (!expression.test(inputData.userEmail)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (inputData.userEmail === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    console.log("이메일 전송");
    setConfirmView(true);
    axios
      .post(`http://10.10.10.205:8081/api/v1/email`, {
        to: inputData.userEmail,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleConfirmKey = () => {
    console.log(confirmKey);
    // 서버에 키값 확인
    // axiois.post('http://localhost:3000/api/user/confirmKey', {
    //   confirmKey: confirmKey,
    // })
    // .then((res) => {
    //   console.log(res)
    //   // 키값이 일치하면 인증완료
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
    setConfirm(true);
  };

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <>
      <div className="slide-in">
        <div className="greeting">
          <h2 className="signup-info">
            아이디와 비밀번호를
            <br />
            입력해주세요.
          </h2>
        </div>
        <form className="agree-input" id="agree-main">
          <div>
            <input
              type="email"
              name="userEmail"
              placeholder="이메일을 입력해주세요."
              onChange={handleChange}
              required={true}
            />
            <button type="button" onClick={handleEmailConfirm}>
              이메일인증
            </button>
          </div>
          {confirmView && (
            <div>
              <input
                type="text"
                name="confirmKey"
                placeholder="인증키를 입력해주세요."
                onChange={handleChange}
              />
              <button type="button" onClick={handleConfirmKey}>
                인증하기
              </button>
              <Countdown date={Date.now() + 180000} renderer={renderer} />
            </div>
          )}

          <input
            type="password"
            name="password"
            placeholder="암호를 입력해주세요."
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="암호를 한번 더 입력해주세요."
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default Step02;
