import MiddleLine from "@/components/ui/MiddleLine";
import Config from "@/configs/config.export";
import { cartIsCheckState } from "@/state/atom/cartIsCheckState";
import { freezeIsCheckState } from "@/state/atom/freezeIsCheckState";
import { generalIsCheckState } from "@/state/atom/generalIsCheckState";
import { cartType, productListCardType } from "@/types/product/fetchDataType";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function cart() {
  function btnAllClick() {
    SelectAll ? setAllSelect(false) : setAllSelect(true);
  }
  const { query } = useRouter();
  const baseUrl = Config().baseUrl;
  const [cartData, setCartData] = useState<cartType[]>();
  const [productData, setProductData] = useState<productListCardType[]>();
  const [select, setSelect] = useRecoilState(cartIsCheckState);
  const [SelectAll, setAllSelect] = useRecoilState(cartIsCheckState);
  const [freeze, setFreeze] = useRecoilState(freezeIsCheckState);
  const [general, setGeneral] = useRecoilState(generalIsCheckState);
  //`${baseUrl}/v1/api/carts/get/${query}`
  useEffect(() => {
    axios(`${baseUrl}/v1/api/carts/get/1}`).then((res) => {
      //console.log(query);
      setCartData(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="cart-background">
        <section className="select-all" id="agree-main">
          <div id="cart" className="padding-lr-20">
            <p>장바구니</p>
          </div>
          <div className="box-select-delete">
            <div className="advertising-info">
              <input type="checkbox" id="select-all" />
              <label>전체 선택</label>
            </div>
            <div id="btn-cart-delete">
              <div className="btn-delete-inner">
                <p onClick={btnAllClick} id="select-delete">
                  선택삭제
                </p>
                <p>|</p>
                <p onClick={btnClick}>전체삭제</p>
              </div>
            </div>
          </div>
          <MiddleLine />
          <div className="advertising-info">
            <input type="checkbox" id="product-normal" />
            <label>일반 상품</label>
          </div>
          <MiddleLine />
          <div className="advertising-info box-cart">
            <input type="checkbox" id="select-product" />
            <div className="box-cart-product">
              <div className="cart-product-info">
                <img
                  className="img-cart-product"
                  src="./assets/images/products/01.png"
                  alt="product"
                />
                <div className="cart-product-info-text">
                  <p>23 체리 컬러체인징 컨페티 콜드컵 710ml 5p</p>
                  <p className="price-bold">35,000원</p>
                </div>
                <img
                  className="img-cart-close"
                  src="./assets/images/icons/close.png"
                  alt="close"
                />
              </div>
              <div className="cart-product-quantity">
                <p>수량: 1개</p>
              </div>
              <div className="text-order-amount">
                <p>주문 금액</p>
                <p>35,000원</p>
              </div>
              <div className="box-button">
                <button id="box-button-01" onClick={() => setCart(cart + 1)}>
                  주문 수정
                </button>
                <button id="box-button-02" onClick={btnClick}>
                  바로 구매
                </button>
              </div>
            </div>
          </div>

          <MiddleLine />
          <div className="advertising-info">
            <input type="checkbox" id="product-normal" />
            <label>냉동 상품</label>
          </div>
          <MiddleLine />
          <div className="advertising-info box-cart">
            <input type="checkbox" id="select-product" />
            <div className="box-cart-product">
              <div className="cart-product-info">
                <img
                  className="img-cart-product"
                  src="./assets/images/products/01.png"
                  alt="product"
                />
                <div className="cart-product-info-text">
                  <p>23 체리 컬러체인징 컨페티 콜드컵 710ml 5p</p>
                  <p className="price-bold">35,000원</p>
                </div>
                <img
                  className="img-cart-close"
                  src="./assets/images/icons/close.png"
                  alt="close"
                />
              </div>
              <div className="cart-product-quantity">
                <p>수량: 1개</p>
              </div>
              <div className="text-order-amount">
                <p>주문 금액</p>
                <p>35,000원</p>
              </div>
              <div className="box-button">
                <button id="box-button-01" onClick={() => setCart(cart + 1)}>
                  주문 수정
                </button>
                <button id="box-button-02" onClick={btnClick}>
                  바로 구매
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="cart-total-check">
            <p>상품 1건 35,000원 + 배송비 0원 = 총 35,000원</p>
            <p className="price-bold">무료배송</p>
            <Link href="">더 담으러 가기</Link>
          </div>
        </section>
        <section className="cart-total-price-box">
          <p className="cart-total-price-text">총 주문 금액</p>
          <div className="product-price">
            <p>상품 금액</p>
            <p className="price-bold">35,000원</p>
          </div>
          <div className="discount-price">
            <p>할인 금액</p>
            <p className="price-bold">0원</p>
          </div>
          <div className="delivery-price">
            <p>배송비</p>
            <p className="price-bold">0원</p>
          </div>
          <hr className="middle-line" />
          <div className="cart-total-price">
            <p>최종 결제 금액</p>
            <p id="cart-total-price">35,000원</p>
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

        <div className="cart-footer">
          <div className="cart-submit-container cart-footer-padding">
            <div className="cart-total">
              <p>
                총 <span id="cart-select-amount">1</span>건 / 20건
              </p>
              <p id="cart-footer-total-price">35,000원</p>
            </div>
            <div className="cart-btn-order">
              <button>선물하기</button>
              <button>구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
