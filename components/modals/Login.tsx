import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Signup from './Signup';

export interface ChildProps {
  isLoginView: Boolean,
  setIsLoginView: Dispatch<SetStateAction<Boolean>>;
}

export default function Login({ isLoginView, setIsLoginView }: ChildProps) {

  const [ isSignupView, setIsSignupView ] = useState<Boolean>(false)

  console.log(isLoginView)

  if (!isLoginView) {
    return null;
  }
  
  return (
    <>
      <Signup
        isSignupView = {isSignupView}
        setIsSignupView = {setIsSignupView}
      />
      <div className='modal'>
        <div onClick={() => setIsLoginView(false)}>
          <img src="./assets/images/icons/close.png" className="back-button" />
        </div>
        <section className="login-section">
          <div className="login-top">
            <h2>로그인</h2>
            <img id="starbucks" src="./assets/images/starbucks-logo.png" alt="" />
            <p className="title">안녕하세요. <br /> 스타벅스입니다.</p>
            <p className="sub">회원 서비스 이용을 위해 로그인 해주세요.</p>
          </div>
          <div className="login">
            <form action="">
              <input type="text" name="id" id="id" placeholder="아이디" /><br />
              <input type="password" name="pwd" id="pwd" placeholder="비밀번호" /><br />
            </form>
          </div>
          <div className="login-btn">
            <div className="login-btn-inner">
              <ul>
                <li><Link href="">아이디 찾기</Link></li>
                <li><Link href="">비밀번호 찾기</Link></li>
                <li onClick={() => {
                  setIsLoginView(false)
                  setIsSignupView(true)
                }}><Link href="">회원가입</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="submit-container">
          <Link href="/signup_certified.html">
            <button type="submit">다음</button>
          </Link>
        </section>
      </div>
    </>
  )
}
