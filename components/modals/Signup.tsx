import MiddleLine from '@/components/ui/MiddleLine'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

export interface IsSignupProps {
  isSignupView: Boolean,
  setIsSignupView: Dispatch<SetStateAction<Boolean>>;
}

export default function Signup({ isSignupView, setIsSignupView }: IsSignupProps) {

  console.log(isSignupView)

  if (!isSignupView) {
    return null;
  }

  return (
    <>
      {/* <div className='modal'>
        <div onClick={() => setIsSignupView(false)}>
          <img src="./assets/images/icons/close.png" className="back-button" />
        </div> */}
        <div>
          <section className="greeting first-section margin-top">
            <img id="starbucks-logo" src="./assets/images/starbucks-logo.png" />
            <h2 className="signup-info">고객님<br />환영합니다!</h2>
          </section>
          <section className="agree-input" id="agree-main">
            <input type="checkbox" id="all-agree" name="all-agree" />
            <label>약관 전체동의</label>
            <MiddleLine />
            <input type="checkbox" id="tos-agree" name="" />
            <label>이용약관 동의(필수)</label>
            <Link href="/best_cake.html"><img className="arrow" src="./assets/images/icons/arrow-point-to-right.png" /></Link><br />
            <input type="checkbox" id="personal-agree" name="" />
            <label>개인정보 수집 및 이용동의(필수)</label>
            <Link href=""><img className="arrow" src="assets/images/icons/arrow-point-to-right.png" /></Link>
            <br />
            <input type="checkbox" id="advertising-agree" name="" />
            <label>광고성 정보 수신동의(선택)</label>
            <Link href=""><img className="arrow" src="./assets/images/icons/arrow-point-to-right.png" /></Link><br />
            <div className="advertising-info">
              <p>광고성 정보 수신 방법(선택)</p>
              <input type="checkbox" id="advertising-email" />
              <label>E-mail</label>
              <input type="checkbox" id="advertising-sms" />
              <label>SMS</label>
            </div>
          </section>
          {/* <section className="submit-container">
            <Link href="/signup_certified.html">
              <button type="submit">다음</button>
            </Link>
          </section> */}
        </div>
      {/* </div> */}
    </>
  )
}
