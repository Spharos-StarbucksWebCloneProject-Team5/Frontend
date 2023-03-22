import Link from 'next/link'
import React from 'react'

export default function signUpId() {
  return (
    <>
      <header className="shadow-none">
        <div className="signup-header">
          <Link href="javascript:window.history.back();"><img src="./assets/images/icons/close.png" className="back-button" /></Link>
          <p className="page-num">①－❷－③－④</p>
        </div>
        <section className="greeting">
          <h2 className="signup-info">아이디와 비밀번호를<br />입력해 주세요.</h2>
        </section>
        <section id="id-password-input">
          <input type="text" id="user_id" name="id" placeholder="아이디 (4-13자리 이내)" />
          <input type="text" id="user_password" name="password" placeholder="비밀번호 (10-20자리 이내)" />
          <input type="text" id="user_password_check" name="password_check" placeholder="비밀번호 확인" />
        </section>
      </header>
      <section className="submit-container">
        <Link href="/signup_email.html"><button type="submit">다음</button></Link>
      </section>
    </>
  )
}
