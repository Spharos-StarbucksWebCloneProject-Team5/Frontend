import React from 'react'

export default function CartTotal(props: {
  totalPrice: number;
  shipPrice: number;
  freezeShipPrice: number;
}) {
  return (
    <section className="cart-total-price-box">
          <p className="cart-total-price-text">총 주문 금액</p>
          <div className="product-price">
            <p>상품 금액</p>
            <p className="price-bold">{props.totalPrice.toLocaleString("en")}원</p>
          </div>
          <div className="discount-price">
            <p>할인 금액</p>
            <p className="price-bold">0원</p>
          </div>
          <div className="delivery-price">
            <p>배송비</p>
            <p className="price-bold">
              {(props.shipPrice + props.freezeShipPrice).toLocaleString("en")}원
            </p>
          </div>
          <hr className="middle-line" />
          <div className="cart-total-price">
            <p>최종 결제 금액</p>
            <p id="cart-total-price">
              {(props.totalPrice + props.shipPrice + props.freezeShipPrice).toLocaleString("en")}
              원
            </p>
          </div>
          <div className="cart-description">
            <p>
              장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대
              2개월간 보관됩니다.
              <br />
              가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
            </p>
          </div>
        </section>
  )
}
