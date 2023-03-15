import Head from 'next/head'
import React from 'react'

export default function Best() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <div>
          <div className="best-product-list">
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
        </div>
      </section>
    </>
  )
}
