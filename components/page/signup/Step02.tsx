import React, { useState, useEffect } from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Countdown from "react-countdown";

import axios from "axios";
import Config from "@/configs/config.export";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

const Completionist = () => <span>시간초과</span>;

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
  const [duplicateView, setDuplicateView] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const baseUrl = Config().baseUrl;

  //create email regex code
  const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;
  const pwRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const passwordRegex: RegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;


  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmKey") setConfirmKey(value);
    if (name === "userEmail" && emailRegex.test(value)) {
      // 이메일 중복확인
      axios.post(`${baseUrl}/api/v1/users/email`, { email: inputData.userEmail })
        .then((res) => {
          console.log(res);
          setDuplicateView(true);
        })
        .catch((err) => console.log(err));
    } else {
      setDuplicateView(false);
    }
    if (name === "password") {
      setPassword(value)
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value)
      if (password !== confirmPassword) {
        console.log("비밀번호가 다릅니다.")
      }
    }

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleEmailConfirm = () => {
    if (!emailRegex.test(inputData.userEmail)) {
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
      .post(`${baseUrl}/api/v1/email`, { to: inputData.userEmail })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleConfirmKey = () => {
    console.log(confirmKey);
    // 서버에 키값 확인
    axios.post(`${baseUrl}/api/v1/email-confirm`, { code: confirmKey })
      .then((res) => {
        console.log(res);
        // 키값이 일치하면 인증완료
        setConfirm(true);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const timerStop = () => true

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
          {
            duplicateView && (
              <div>
                <p>중복확인완료</p>
              </div>
            )
          }
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
              <Countdown date={Date.now() + 180000} renderer={renderer}
                onStop={timerStop} />
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
