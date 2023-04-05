import React from 'react'

export default function orderList() {
  return (
    <div className="container">
    <header>
      <div className="header-top">
        <div className="menu-icon">
          <img src="assets/images/icons/left-chevron.svg" alt="" />
        </div>
        <h1>온라인 스토어</h1>
        <nav>
          <ul>
            <li><img src="assets/images/icons/search.svg" /></li>
            <li><img src="assets/images/icons/shopping-cart.svg" /></li>
            <li><img src="assets/images/icons/close.svg" /></li>
          </ul>
        </nav>
      </div>
    </header>
    <form className="order-list-page-form">
      <div className="order-list-page-title">
        <h1>주문 내역</h1>
      </div>
      <div className="order-list-page-date">
        <p>전체</p>
        <div className="order-list-page">
          <p>2022.04.01~2023.03.31</p>
          <div className="order-img">
            <img src="assets/images/icons/left-chevron.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="order-list-form">
        <div className="order-list-form-title">
          <p>주문 내역이 없습니다.</p>
        </div>
      </div>
    </form>
  </div>
  )
}
