import Link from 'next/link';
import React from 'react'

export default function CartCheck(props:{
  cartCount: number;
  cartPrice: number;
  shipPrice: number;
}) {
  return (
    <section>
      <div className="cart-total-check" id="agree-main">
        <p>
          상품 {props.cartCount}건 {props.cartPrice.toLocaleString("en")}원
          + 배송비 {props.shipPrice.toLocaleString("en")}원 = 총
          {(props.cartPrice + props.shipPrice).toLocaleString("en")}원
        </p>
        <p className="price-bold">무료배송</p>
        <Link href="/listview?category=0">더 담으러 가기</Link>
      </div>
    </section>
  )
}
