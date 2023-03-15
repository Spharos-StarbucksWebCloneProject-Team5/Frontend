import Link from 'next/link'
import React from 'react'

export default function menu() {
  return (
    <>
      <div className="welcome">
        <div className="welcome-top">
          <Link href="./index.html"><img src="assets/images/icons/close.svg" /></Link>
        </div>
        <div className="welcome-bottom">
          <h1>Welcome !</h1>
          <p>온라인 스토어에 오신 것을 환영합니다.</p>
        </div>
      </div>
      <section className="section-top">
        <div className="all-product">
          <Link id="test" href="">
            전체 상품 보기
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </Link>
        </div>
        <div className="menu-product-list">
          <div className="menu-product-item">
            <div className="menu-product-item__img">
              <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="menu-product-item__info">
              <p className="item-title">케이크</p>
            </div>
          </div>
          <div className="menu-product-item">
            <div className="menu-product-item">
              <div className="menu-product-item__img">
                <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
              </div>
              <div className="menu-product-item__info">
                <p className="item-title">케이크</p>
              </div>
            </div>
          </div>
          <div className="menu-product-item">
            <div className="menu-product-item">
              <div className="menu-product-item__img">
                <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
              </div>
              <div className="menu-product-item__info">
                <p className="item-title">케이크</p>
              </div>
            </div>
          </div>

          <div className="menu-product-item">
            <div className="menu-product-item__img">
              <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="menu-product-item__info">
              <p className="item-title">케이크</p>
            </div>
          </div>
          <div className="menu-product-item">
            <div className="menu-product-item__img">
              <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="menu-product-item__info">
              <p className="item-title">케이크</p>
            </div>
          </div>
          <div className="menu-product-item">
            <div className="menu-product-item__img">
              <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
            </div>
            <div className="menu-product-item__info">
              <p className="item-title">케이크</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-bottom">
        <div className="menu-bottom">
          <div className="menu-bottom-list">
            <div className="menu-bottom-list-item-left">
              <h3>기획전</h3>
              <p>진행중인 기획전을 만나보세요</p>
            </div>
            <div className="menu-bottom-list-item-right">
              <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
            </div>
          </div>

        </div>
        <div className="menu-bottom-list">
          <div className="menu-bottom-list-item-left">
            <h3>기획전</h3>
            <p>진행중인 기획전을 만나보세요</p>
          </div>
          <div className="menu-bottom-list-item-right">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
