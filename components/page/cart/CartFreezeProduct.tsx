import MiddleLine from '@/components/ui/MiddleLine';
import { cartType, freezeCartType } from '@/types/cart/cartDataType';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function CartFreezeProduct(props: {
  productType: string;
  isCheck: boolean;
  freezeCartItems: freezeCartType;
  handleCartList: Function;
  handleCart: Function;
  clickProduct: Function;
  handleCloseDelete: Function;
  showModal: Function;
  setBuyNow: Function;
}) {
  const router = useRouter();

  return (
    <section className="ch-all">
      <MiddleLine
        gutterSize={0}
        gutterSize2={8}
      />
      <div className="advertising-info">
        <div
          id="product-normal"
          className={props.isCheck ? "check-active" : "check-all"}
          onClick={() => props.handleCartList(!props.isCheck)}
        />
        <label>{props.productType}</label>
      </div>
      <MiddleLine />
      {props.freezeCartItems.freezeCartList.map((element) => (
        <div className="advertising-info box-cart" key={element.cartId}>
          <div
            id="select-product"
            className={element.checked ? "check-active" : "check-all"}
            onClick={() => props.handleCart(element.cartId, !element.checked)}
          />
          <div className="box-cart-product">
            <div className="cart-product-info">
              <div className="cart-product-info-click" onClick={() => props.clickProduct(element.productId)}>
                <img
                  className="img-cart-product"
                  src={element.productThumbnail}
                  alt="product"
                />
                <div className="cart-product-info-text">
                  <p>{element.productName}</p>
                  <p className="price-bold">
                    {element.productPrice.toLocaleString("en")}원
                  </p>
                </div>
              </div>
              <img
                className="img-cart-close"
                src="./assets/images/icons/close.png"
                alt="close"
                onClick={() => { props.handleCloseDelete(element.cartId); }}
              />
            </div>
            <div className="cart-product-quantity">
              <p>수량: {element.count}개</p>
            </div>
            <div className="text-order-amount">
              <p>주문 금액</p>
              <p>{(Number(element.productPrice) * Number(element.count))
                .toLocaleString("en")}원</p>
            </div>
            <div className="box-button">
              <button
                id="box-button-01"
                onClick={() => props.showModal(element.cartId)}
              >
                주문 수정
              </button>
              <button
                id="box-button-02"
                onClick={() => {
                  props.setBuyNow(element.cartId);
                  router.push(`/payment`);
                }}
              >
                바로 구매
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
