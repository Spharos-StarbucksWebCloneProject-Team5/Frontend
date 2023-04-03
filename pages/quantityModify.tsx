import React from 'react'

export default function quantityModify() {
  return (
    <>
      <div className="advertising-info box-cart cart-quantity-margin-top">
        <div className="box-cart-product cart-quantity-padding-left">
          <div className="cart-product-info">
            <img className="img-cart-product" src="./assets/images/products/01.png" alt="product" />
            <div className="cart-product-info-text">
              <p>23 체리 컬러체인징 컨페티 콜드컵 710ml 5p</p>
              <p className="price-bold">35,000원</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quantity-box-cart-product">
        <div className="gray-box-line"></div>
      </div>
      <div className="box-cart-product quantity-box-padding">
        <div className="cart-product-quantity">
          <p>
            상품 주문 수량
          </p>
          <div className="change">
            <div className="quantity">
              <img src="./assets/images/icons/minus.png" alt="" />
              <div>1</div>
              <img src="./assets/images/icons/add.png" alt="" />
            </div>
            <p>19,900원</p>
          </div>
        </div>
      </div>
      <section className="quantity-submit-container">
        <div className="submit-box">
          <div className="change-final">
            <p>주문금액</p>
            <p className="price">합계 <span>19,900원</span></p>
          </div>
          <div className="buttons">
            <button>취소</button>
            <button>확인</button>
          </div>
        </div>
      </section>
    </>
  )
}