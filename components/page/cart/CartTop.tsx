import React from 'react'

export default function CartTop(props: {
  isAllCheck: boolean;
  handleAllCartList: Function;
  handleSelectDelete: Function;
  handleAllDelete: Function;
}) {
  return (
    <section className="ch-all" id="agree-main">
      <div id="cart" className="padding-lr-20">
        <p>장바구니</p>
      </div>
      <div className="box-select-delete">
        <div className="advertising-info">
          <div
            className={props.isAllCheck ? "check-active" : "check-all"}
            onClick={() => props.handleAllCartList(!props.isAllCheck)}
          />
          <label>전체 선택</label>
        </div>
        <div id="btn-cart-delete">
          <div className="btn-delete-inner">
            <p onClick={()=>props.handleSelectDelete()} id="select-delete">
              선택삭제
            </p>
            <p>|</p>
            <p onClick={()=>props.handleAllDelete()}>전체삭제</p>
          </div>
        </div>
      </div>
    </section>
  )
}
