import Head from 'next/head'
import React from 'react'

export default function mypage() {

  function btnClick() {
    console.log("Click Button")
  }

  return (
    <>
      <Head>
        <title>Mypage</title>
      </Head>
      <section className="order-delivery-status-list">
        <div className="status-text">
          <p>주문/배송 현황</p>
          <p>최근 3개월 동안 구매한 상품</p>
        </div>
        <div className="order-delivery-status">
          <div className="status">
            <p>0</p>
            <p>상품준비중</p>
          </div>
          <div className="direction">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
          <div className="status">
            <p>0</p>
            <p>배송준비중</p>
          </div>
          <div className="direction">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
          <div className="status">
            <p>0</p>
            <p>배송중</p>
          </div>
          <div className="direction">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
          <div className="status">
            <p>0</p>
            <p>배송완료</p>
          </div>
        </div>
      </section>
      <section className="mypage-bottom">
        <div className="bottom-service-list">
          <p>서비스</p>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/shopping-list.png" alt="shopping-list" />
          <div className="bottom-service-button">
            <p>주문 내역</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/present-box.png" alt="present-box" />
          <div className="bottom-service-button">
            <p>선물함</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/voucher.png" alt="voucher" />
          <div className="bottom-service-button">
            <p>쿠폰</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/delivery-truck.png" alt="delivery-truck" />
          <div className="bottom-service-button">
            <p>배송지 관리</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/bell.png" alt="bell" />
          <div className="bottom-service-button">
            <p>입고 알림 내역</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="margin-bottom">
        </div>
        <div className="bottom-service-list">
          <p>약관 및 정책</p>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/megaphone.png" alt="megaphone" />
          <div className="bottom-service-button">
            <p>배송지 정보 수집 및 이용 동의</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
      </section>

    </>
  )
}
