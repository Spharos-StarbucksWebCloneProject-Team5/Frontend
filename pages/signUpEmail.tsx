import Link from 'next/link'
import React from 'react'

export default function signUpEmail() {
  return (
    <>
      <header className="shadow-none">
        <div className="signup-header">
          <Link href="javascript:window.history.back();"><img src="assets/images/icons/close.png"
            className="back-button" /></Link>
          <p className="page-num">①－②－❸－④</p>
        </div>
        <section className="greeting">
          <h2 className="signup-info">이메일을 <br />입력해 주세요.</h2>
        </section>
        <section id="email-input">
          <input type="text" name="email-input" id="" />
          <p>@</p>
          <select name="select" id="email-select">
            <option value="">직접 입력</option>
            <option value="">gmail.com</option>
            <option value="">naver.com</option>
          </select>
        </section>
        <p className="email-notice">
          • 스타벅스 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로 보내드려요.
          <br />
          • 주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에 관계없이 발송됩니다.
        </p>
      </header>
      <section className="submit-container">
        <Link href="/signup_email.html"><button type="submit">다음</button></Link>
      </section>
    </>
  )
}
