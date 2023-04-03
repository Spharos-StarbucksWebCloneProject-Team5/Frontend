import { cartPaymentState } from "@/state/atom/paymentState";
import {
  allCartType,
  buyType,
  cartBuyType,
  cartListType,
} from "@/types/cart/cartDataType";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function CartFooter(props: {
  count: number;
  totalPrice: number;
  checked: number[];
  allItems: allCartType;
}) {
  const { push } = useRouter();
  const [buyCart, setBuyCart] = useRecoilState(cartPaymentState);
  //const [cartData, setCartData] = useState<cartBuyType[]>();

  //props.allItems.allCartList.filter(item=>item.cartId === props.checked.map(item1))

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
          <button
            onClick={() => {
              setBuyCart(props.checked);
              push(`/payment`);
            }}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
