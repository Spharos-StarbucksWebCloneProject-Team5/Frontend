import React, { useEffect, useState } from "react";

export default function CartFooter(props: {
  count: number;
  totalPrice: number;
}) {
  console.log(`count ${props.count}`);
  console.log(`totalPrice ${props.totalPrice}`);
  return (
    <div className="cart-footer">
      <div className="cart-submit-container cart-footer-padding">
        <div className="cart-total">
          <p>
            총 <span id="cart-select-amount">{props.count}</span>건 / 20건
          </p>
          <p id="cart-footer-total-price">
            {props.totalPrice.toLocaleString("en")}원
          </p>
        </div>
        <div className="cart-btn-order">
          <button>선물하기</button>
          <button>구매하기</button>
        </div>
      </div>
    </div>
  );
}
