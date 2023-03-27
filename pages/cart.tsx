import MiddleLine from "@/components/ui/MiddleLine";
import CartFooter from "@/components/page/cart/CartFooter";
import Config from "@/configs/config.export";
import { allCartListState, cartIsCheckState } from "@/state/atom/cartState";
import { cartListState } from "@/state/atom/cartState";
import { freezeCartListState } from "@/state/atom/cartState";

import { loginModalState } from "@/state/atom/loginModalState";
import { userLoginState } from "@/state/atom/userLoginState";
import {
  allCartType,
  cartListType,
  cartType,
  freezeCartType,
} from "@/types/cart/cartDataType";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { cartListData } from "@/datas/navData";
import CartItem from "@/components/page/cart/CartItem";

export default function cart() {
  const { isLogin } = useRecoilValue(userLoginState);
  //console.log(isLogin);
  const setLoginModal = useSetRecoilState<boolean>(loginModalState);

  const { query, push } = useRouter();
  const baseUrl = Config().baseUrl;

  const [cartItems, setCartItems] = useRecoilState<cartType>(cartListState); //일반 상품
  const [freezeCartItems, setFreezeCartItems] =
    useRecoilState<freezeCartType>(freezeCartListState); //냉동상품
  const [allCartItems, setAllCartItems] =
    useRecoilState<allCartType>(allCartListState); //전체상품

  const [isCheck, setIsCheck] = useState<boolean>(false); //일반상품 체크했는지
  const [isFreezeCheck, setIsFreezeCheck] = useState<boolean>(false); //냉동상품 체크했는지
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false); //전체 체크했는지

  const [checkedItems, setCheckedItems] =
    useRecoilState<allCartType>(allCartListState);

  useEffect(() => {
    axios(`${baseUrl}/v1/api/carts/get/7`).then((res) => {
      //userId 추가

      setAllCartItems({ allCartList: res.data });
      setCartItems({
        cartList: res.data.filter(
          (item: cartListType) => item.mainCategoryId !== 1
        ),
      });
      setFreezeCartItems({
        freezeCartList: res.data.filter(
          (item: cartListType) => item.mainCategoryId === 1
        ),
      });
    });
  }, []);

  useEffect(() => {
    let check = true;
    let freezeCheck = true;
    let allCheck = true;

    cartItems.cartList.find((item) => item.checked === false)
      ? (check = false)
      : (check = true);

    freezeCartItems.freezeCartList.find((item) => item.checked === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);

    allCartItems.allCartList.find((item) => item.checked === false)
      ? (allCheck = false)
      : (allCheck = true);

    if (cartItems.cartList.length === 0) {
      //빈 배열 일 때
      check = false;
      if (freezeCheck === true) allCheck = true;
    }
    if (freezeCartItems.freezeCartList.length === 0) {
      freezeCheck = false;
      if (check === true) allCheck = true;
    }

    setIsCheck(check);
    setIsFreezeCheck(freezeCheck);
    setIsAllCheck(allCheck);
  }, [cartItems, freezeCartItems, allCartItems]);

  const handleCart = (id: number, check: boolean) => {
    //일반 상품 단일
    setCartItems({
      ...cartItems,
      cartList: cartItems.cartList.map((item: cartListType) => {
        if (item.cartId === id) return { ...item, checked: check };
        return item;
      }),
    });
    //check === true ? setCheckedItems(checkedItems)
  };

  const handleCartList = (check: boolean) => {
    //일반 상품 전체

    // cartItems.cartList.map((item: cartListType) =>
    //   handleCart(item.cartId, check)
    // );
    setIsCheck(check);
    setCartItems({
      ...cartItems,
      cartList: cartItems.cartList.map((item: cartListType) => {
        return { ...item, checked: check };
      }),
    });
  };

  const handleFreezeCart = (id: number, check: boolean) => {
    //냉동 상품 단일
    setFreezeCartItems({
      ...freezeCartItems,
      freezeCartList: freezeCartItems.freezeCartList.map(
        (item: cartListType) => {
          if (item.cartId === id) return { ...item, checked: check };
          else return item;
        }
      ),
    });
  };

  const handleFreezeCartList = (check: boolean) => {
    //냉동 상품 전체
    setFreezeCartItems({
      ...freezeCartItems,
      freezeCartList: freezeCartItems.freezeCartList.map(
        (item: cartListType) => {
          return { ...item, checked: check };
        }
      ),
    });

    // freezeCartItems.freezeCartList.map((item: cartListType) =>
    //   handleFreezeCart(item.cartId, check)
    // );
    setIsFreezeCheck(check);
  };

  const handleAllCartList = (check: boolean) => {
    //전체 선택
    setAllCartItems({
      ...allCartItems,
      allCartList: allCartItems.allCartList.map((item: cartListType) => {
        return { ...item, checked: check };
      }),
    });

    setIsAllCheck(check);
    handleFreezeCartList(check);
    handleCartList(check);
  };

  // if (!isLogin) {
  //   Swal.fire({
  //     icon: "warning",
  //     text: "로그인이 필요합니다!",
  //   });
  //   push("/login");
  // }

  const handleAllDelete = () => {
    //모든 카트 아이템 삭제 처리
    axios.delete(`${baseUrl}/v1/api/carts/delete/`); //userId 추가
  };

  const handleDelete = () => {
    //선택 카트 아이템 삭제 처리
    cartItems.cartList
      .filter((item) => item.checked === true)
      .map((item) =>
        axios.delete(`${baseUrl}/v1/api/carts/delete/` + item.cartId)
      );
    freezeCartItems.freezeCartList
      .filter((item) => item.checked === true)
      .map((item) =>
        axios.delete(`${baseUrl}/v1/api/carts/delete/` + item.cartId)
      );
  };

  const handleCloseDelete = (id: number) => {
    //x버튼으로 아이템 삭제 처리
    cartItems.cartList
      .filter((item) => item.cartId === id)
      .map((item) =>
        axios.delete(`${baseUrl}/v1/api/carts/delete/` + item.cartId)
      );
    freezeCartItems.freezeCartList
      .filter((item) => item.cartId === id)
      .map((item) =>
        axios.delete(`${baseUrl}/v1/api/carts/delete/` + item.cartId)
      );
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="cart-background">
        <section className="ch-all" id="agree-main">
          <div id="cart" className="padding-lr-20">
            <p>장바구니</p>
          </div>
          <div className="box-select-delete">
            <div className="advertising-info">
              <div
                className={isAllCheck ? "check-active" : "check-all"}
                onClick={() => handleAllCartList(!isAllCheck)}
              />
              <label>전체 선택</label>
            </div>
            <div id="btn-cart-delete">
              <div className="btn-delete-inner">
                <p onClick={() => handleDelete} id="select-delete">
                  선택삭제
                </p>
                <p>|</p>
                <p onClick={handleAllDelete}>전체삭제</p>
              </div>
            </div>
          </div>
          <MiddleLine />

          <div className="advertising-info">
            <div
              id="product-normal"
              className={isCheck ? "check-active" : "check-all"}
              onClick={() => handleCartList(!isCheck)}
            />
            <label>일반 상품</label>
          </div>
          <MiddleLine />

          {cartItems.cartList.map((element) => (
            <div className="advertising-info box-cart" key={element.cartId}>
              <div
                id="select-product"
                className={element.checked ? "check-active" : "check-all"}
                onClick={() => handleCart(element.cartId, !element.checked)}
              />
              {/* <div className="check-all" /> */}
              <div className="box-cart-product">
                <div className="cart-product-info">
                  <img
                    className="img-cart-product"
                    src={element.productThumbnail}
                    alt="product"
                  />
                  <div className="cart-product-info-text">
                    <p>{element.productName}</p>
                    <p className="price-bold">{element.productPrice}원</p>
                  </div>
                  <img
                    className="img-cart-close"
                    src="./assets/images/icons/close.png"
                    alt="close"
                    onClick={() => handleCloseDelete(element.cartId)}
                  />
                </div>
                <div className="cart-product-quantity">
                  <p>수량: {element.count}개</p>
                </div>
                <div className="text-order-amount">
                  <p>주문 금액</p>
                  <p>{element.productPrice}원</p>
                </div>
                <div className="box-button">
                  <button id="box-button-01">주문 수정</button>
                  <button id="box-button-02">바로 구매</button>
                </div>
              </div>
            </div>
          ))}

          <MiddleLine />
          <div className="advertising-info">
            <div
              id="product-normal"
              className={isFreezeCheck ? "check-active" : "check-all"}
              onClick={() => handleFreezeCartList(!isFreezeCheck)}
            />
            <label>냉동 상품</label>
          </div>
          <MiddleLine />
          {freezeCartItems.freezeCartList.map((element) => (
            <div className="advertising-info box-cart" key={element.cartId}>
              <div
                id="select-product"
                className={element.checked ? "check-active" : "check-all"}
                onClick={() =>
                  handleFreezeCart(element.cartId, !element.checked)
                }
              />
              {/* <div className="check-all" /> */}
              <div className="box-cart-product">
                <div className="cart-product-info">
                  <img
                    className="img-cart-product"
                    src={element.productThumbnail}
                    alt="product"
                  />
                  <div className="cart-product-info-text">
                    <p>{element.productName}</p>
                    <p className="price-bold">{element.productPrice}원</p>
                  </div>
                  <img
                    className="img-cart-close"
                    src="./assets/images/icons/close.png"
                    alt="close"
                  />
                </div>
                <div className="cart-product-quantity">
                  <p>수량: {element.count}개</p>
                </div>
                <div className="text-order-amount">
                  <p>주문 금액</p>
                  <p>{element.productPrice}원</p>
                </div>
                <div className="box-button">
                  <button id="box-button-01">주문 수정</button>
                  <button id="box-button-02">바로 구매</button>
                </div>
              </div>
            </div>
          ))}
        </section>
        {}
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
      </div>
      <CartFooter />
    </>
  );
}
