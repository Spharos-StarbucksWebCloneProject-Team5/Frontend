import React from 'react'

export default function allProducts() {
  return (
    <section>
      <div className="sort-box">
        <select name="sort" className="sort">
          <option value="">신상품순</option>
          <option value="">추천순</option>
          <option value="">낮은가격순</option>
          <option value="">높은가격순</option>
        </select>
      </div>
      <div className="product-list">
        <div className="event-product-list">
          <div className="event-product-item">
            <div className="event-product-item__img">
              <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="event-product-item__info">
              <p className="item-title">부드러운 티라미수 롤케이크</p>
              <p className="item-price"><span>32,000</span>원</p>
            </div>
          </div>
          <div className="event-product-item">
            <div className="event-product-item__img">
              <img src="assets/images/products/01.png" alt="" />
            </div>
            <div className="event-product-item__info">
              <p className="item-title">별의 별 케이크</p>
              <p className="item-price"><span>32,000</span>원</p>
            </div>
          </div>
          <div className="event-product-item">
            <div className="event-product-item__img">
              <img src="assets/images/products/01.png" alt="" />
            </div>
            <div className="event-product-item__info">
              <p className="item-title">더블 초콜릿 케이크</p>
              <p className="item-price"><span>32,000</span>원</p>
            </div>
          </div>
          <div className="event-product-item">
            <div className="event-product-item__img">
              <img src="assets/images/products/01.png" alt="" />
            </div>
            <div className="event-product-item__info">
              <p className="item-title">부드러운 고구마 생크림 케이크</p>
              <p className="item-price"><span>32,000</span>원</p>
            </div>
          </div>
          <div className="event-product-item">
            <div className="event-product-item__img">
              <img src="assets/images/products/01.png" alt="" />
            </div>
            <div className="event-product-item__info">
              <p className="item-title">부드러운 고구마 생크림 케이크</p>
              <p className="item-price"><span>32,000</span>원</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
