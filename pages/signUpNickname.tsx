import Link from 'next/link'
import React from 'react'

export default function signUpNickname() {
  return (
    <>
      <header className="shadow-none">
        <div className="signup-header">
          <Link href="javascript:window.history.back();"><img src="assets/images/icons/close.png" className="back-button" /></Link>
          <p className="page-num">①－②－③－❹</p>
        </div>
        <section className="greeting">
          <h2 className="signup-info">
            닉네임을 <br />입력해 주세요.
          </h2>
        </section>
        <section className="agree-input section-agree-margin" id="agree-main">
          <input type="checkbox" id="personal-agree" name="" />
          <label>선택적 개인정보 수집동의 및 이용약관</label>
          <Link href=""><img className="arrow" src="assets/images/icons/arrow-point-to-right.png" /></Link>
        </section>
      </header>
      <section id="nickname-input">
        <input type="text" id="identification" name="nickname" placeholder="닉네임 (한글 6자리 이내)" />
        <p className="nickname-notice">
          • 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러 드립니다.
        </p>
      </section>
      <div>

      </div>
      <section className="submit-container">
        <Link href="/signup_email.html"><button type="submit">다음</button></Link>
      </section>
    </>
  )
}
