import { cartListState } from "@/state/atom/cartState";
import { cartListType, cartType } from "@/types/product/fetchDataType";
import React from "react";
import { useRecoilState } from "recoil";

export default function CartItem(props: { data: cartListType }) {
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);

  const handleCheck = (checked: boolean) => {};

  return (
    <div className="advertising-info box-cart" key={props.data.cartId}>
      <div
        id="select-product"
        className={props.data.checked ? "check-active" : "check-all"}
        onClick={() => handleCheck(props.data.checked)}
      />
      <div className="check-all" />
      <div className="box-cart-product">
        <div className="cart-product-info">
          <img
            className="img-cart-product"
            src={props.data.productThumbnail}
            alt="product"
          />
          <div className="cart-product-info-text">
            <p>{props.data.productName}</p>
            <p className="price-bold">{props.data.productPrice}원</p>
          </div>
          <img
            className="img-cart-close"
            src="./assets/images/icons/close.png"
            alt="close"
          />
        </div>
        <div className="cart-product-quantity">
          <p>수량: {props.data.count}개</p>
        </div>
        <div className="text-order-amount">
          <p>주문 금액</p>
          <p>
            {props.data.productPrice} {props.data.count}원
          </p>
        </div>
        <div className="box-button">
          <button id="box-button-01">주문 수정</button>
          <button id="box-button-02">바로 구매</button>
        </div>
      </div>
    </div>
  );
}
