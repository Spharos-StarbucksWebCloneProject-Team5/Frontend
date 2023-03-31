import MiddleLine from "@/components/ui/MiddleLine";
import ShippingInfo from "@/components/widgets/ShippingInfo";
import { paymentState } from "@/state/atom/paymentState";
import { buyType } from "@/types/cart/cartDataType";
import Head from "next/head";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function payment() {
  const paymentData = useRecoilValue(paymentState);
  console.log(paymentData);

  let shipPrice = paymentData.price < 30000 ? 3000 : 0;
  let orderPrice = paymentData.price * paymentData.count;
  let totalPrice = orderPrice + shipPrice;

  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <ShippingInfo />
      <section className="payment-products-bg">
        <div className="payment-title">
          <p>상품내역</p>
          <img
            src="./assets/images/icons/arrow-down-sign-to-navigate.png"
            alt=""
          />
        </div>
        <div className="payment-products">
          <img src={paymentData.thumbnail} alt="" />
          <p>{paymentData.productName}</p>
        </div>
      </section>
      <section className="payment-option-info">
        <div className="payment-title">
          <p>쿠폰 및 할인</p>
          <img
            src="./assets/images/icons/arrow-down-sign-to-navigate.png"
            alt=""
          />
        </div>
        <div className="payment-coupon">
          <img src="./assets/images/icons/service/voucher.png" alt="" />
          <p>쿠폰</p>
        </div>
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
            <p>{orderPrice}원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>상품 금액</p>
            <p>{paymentData.price}원</p>
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
          <p>{totalPrice}원</p>
        </div>
        <div className="payment-info-price-fb">
          <p>모바일 상품권</p>
          <p>0원</p>
        </div>
        <MiddleLine />
        <div className="payment-title payment-order-price">
          <p>최종 결제 금액</p>
          <p>{totalPrice}원</p>
        </div>
        <p className="payment-description">
          위 주문 내용을 확인하였으며, 결제에 동의합니다.
          <br />
          (전자상거래법 8조 2항)
        </p>
      </section>
      <div className="cart-footer">
        <div className="submit-container cart-footer-padding">
          <div className="payment-btn-order">
            <button>{totalPrice}원 결제하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
