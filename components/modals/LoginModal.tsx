import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import StButton from "../ui/StButton";

export default function LoginModal(props: {
  thisModalName: string;
  setThisModalName: Dispatch<SetStateAction<string>>;
  setIsModalView: Function;
}) {

  const handleStepNext = () => {
    console.log(handleStepNext)
  }

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
          <form action="">
            <input type="text" name="id" id="id" placeholder="아이디" />
            <br />
            <input type="password" name="pwd" id="pwd" placeholder="비밀번호" />
            <br />
          </form>
        </div>
        <div className="login-btn">
          <div className="login-btn-inner">
            <ul>
              <li>
                <Link href="">아이디 찾기</Link>
              </li>
              <li>
                <Link href="">비밀번호 찾기</Link>
              </li>
              <li>
                <p onClick={() => props.setThisModalName("signup")}>회원가입</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="submit-container">
        <StButton
          buttonText='NEXT'
          textSize='1.1rem'
          handler={handleStepNext}
        />
      </section>
    </>
  );
}
