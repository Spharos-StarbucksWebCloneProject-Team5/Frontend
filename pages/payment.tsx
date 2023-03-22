import MiddleLine from '@/components/ui/MiddleLine'
import Head from 'next/head'
import React from 'react'

export default function payment() {
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <section className="padding-lr-20">
        <div id="payment">
          <p>결제하기</p>
        </div>
        <div className="payment-box-shipping-info">
          <div className="box-shipping-info">
            <div className="payment-title">
              <p>배송 정보</p>
            </div>
            <div id="btn-update">
              <button>변경</button>
            </div>
          </div>
          <div className="shipping-address">
            <p>이름 (배송지이름)</p>
            <p>(우편번호) 주소</p>
            <p>상세주소</p>
            <p>전화번호</p>
          </div>
        </div>
      </section>
      <section className="payment-products-bg">
        <div className="payment-title">
          <p>상품내역</p>
          <img src="./assets/images/icons/arrow-down-sign-to-navigate.png" alt="" />
        </div>
        <div className="payment-products">
          <img src="./assets/images/products/01.png" alt="" />
          <p>리유저블 투고컵 473ml</p>
        </div>
      </section>
      <section className="payment-option-info">
        <div className="payment-title">
          <p>쿠폰 및 할인</p>
          <img src="./assets/images/icons/arrow-down-sign-to-navigate.png" alt="" />
        </div>
        {/* <div className="payment-coupon">
          <img src="./assets/images/icons/service/voucher.png" alt=""/>
          <p>쿠폰</p>
        </div> */}
        <MiddleLine />
        <div className="payment-mobile-gift payment-title">
          <p>모바일 상품권</p>
          <div className="payment-mobile-gift-right">
            <p>사용하기</p>
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <MiddleLine />
        <div className="payment-type">
          <p>결제 수단</p>
          <div>
            <input type="checkbox" id="card-starbucks" />
            <label>스타벅스 카드</label>
          </div>
          <div>
            <input type="checkbox" id="card-credit" />
            <label>신용 카드</label>
          </div>
        </div>
        <MiddleLine />
        <div className="payment-info">
          <div className="payment-title">
            <p>결제 정보</p>
          </div>
          <div className="payment-order-price">
            <p>주문 금액</p>
            <p>33,000원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>상품 금액</p>
            <p>33,000원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>배송비</p>
            <p>0원</p>
          </div>
        </div>
        <MiddleLine />
        <div>
          <div className="payment-order-price">
            <p>할인 금액</p>
            <p>0원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>상품 할인</p>
            <p>0원</p>
          </div>
        </div>
        <MiddleLine />
        <div className="payment-order-price">
          <p>결제 금액</p>
          <p>33,000원</p>
        </div>
        <div className="payment-info-price-fb">
          <p>모바일 상품권</p>
          <p>0원</p>
        </div>
        <MiddleLine />
        <div className="payment-title payment-order-price">
          <p>최종 결제 금액</p>
          <p>33,000원</p>
        </div>
        <p className="payment-description">
          위 주문 내용을 확인하였으며, 결제에 동의합니다.<br />
          (전자상거래법 8조 2항)
        </p>
      </section>
      <div className="cart-footer">
        <div className="submit-container cart-footer-padding">
          <div className="payment-btn-order">
            <button>33,000원 결제하기</button>
          </div>
        </div>
      </div>
    </>
  )
}