import MiddleLine from "@/components/ui/MiddleLine";
import CartFooter from "@/components/page/cart/CartFooter";
import Config from "@/configs/config.export";
import { allCartListState, cartIsCheckState, countModalState } from "@/state/atom/cartState";
import { cartListState } from "@/state/atom/cartState";
import { freezeCartListState } from "@/state/atom/cartState";


import { userLoginState } from "@/state/atom/userLoginState";
import {
  allCartType,
  buyType,
  cartBuyType,
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

import { useCookies } from "react-cookie";
import payment from "./payment";
import CountModal from "@/components/ui/CountModal";
import { cartPaymentState, cartBuyNowState } from "@/state/atom/paymentState";

export default function cart() {
  const { isLogin } = useRecoilValue(userLoginState);
  //const setLoginModal = useSetRecoilState<boolean>(loginModalState);

  const router = useRouter();
  const baseUrl = Config().baseUrl;

  const [cartItems, setCartItems] = useRecoilState<cartType>(cartListState); //일반 상품
  const [freezeCartItems, setFreezeCartItems] =
    useRecoilState<freezeCartType>(freezeCartListState); //냉동상품
  const [allCartItems, setAllCartItems] =
    useRecoilState<allCartType>(allCartListState); //전체상품

  const [isCheck, setIsCheck] = useState<boolean>(false); //일반상품 체크했는지
  const [isFreezeCheck, setIsFreezeCheck] = useState<boolean>(false); //냉동상품 체크했는지
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false); //전체 체크했는지

  const [checkedList, setCheckedList] = useRecoilState(cartPaymentState);
  const [buyNow, setBuyNow] = useRecoilState(cartBuyNowState);

  const [cookies, setCookie, removeCookie] = useCookies(["id"]);

  //const [buyData, setBuyData] = useRecoilState<buyType>(paymentState);

  //const [checkedData, setCheckedData] = useState<allCartType>();

  useEffect(() => {
    const myLogin = cookies.id;
    //console.log(isLogin);
    if (!myLogin && !isLogin) {
      Swal.fire({
        icon: "warning",
        text: "로그인이 필요합니다!",
      });
      router.push("/login");
      //return;
    }
    else{
      axios
      .get(`${baseUrl}/v1/api/carts/get`, {
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      })
      .then((res) => {
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
    }
  }, []);

  //useEffect(() => {
    //console.log(cookies.id);
    
  //}, []);

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

    // allCartItems.allCartList.find((item) => item.checked === false)
    //   ? (allCheck = false)
    //   : (allCheck = true);

    check === true && freezeCheck === true
      ? (allCheck = true)
      : (allCheck = false);

    if (cartItems.cartList.length === 0) {
      //빈 배열 일 때
      check = false;
      if (freezeCheck === true) allCheck = true;
    }
    if (freezeCartItems.freezeCartList.length === 0) {
      freezeCheck = false;
      if (check === true) allCheck = true;
    }
    if (allCartItems.allCartList.length === 0) allCheck = false;

    setIsCheck(check);
    setIsFreezeCheck(freezeCheck);
    setIsAllCheck(allCheck);
  }, [cartItems, freezeCartItems, isAllCheck]);

  let cartPrice = 0;
  let cartCount = 0;
  cartItems.cartList.map((item) => {
    if (item.checked === true) {
      cartPrice = item.count * item.productPrice + cartPrice;
      cartCount = cartCount + 1; //주문 건수
    }
  });

  let freezeCartPrice = 0;
  let freezeCartCount = 0;
  freezeCartItems.freezeCartList.map((item) => {
    if (item.checked === true) {
      freezeCartPrice = item.count * item.productPrice + freezeCartPrice;
      freezeCartCount = freezeCartCount + 1;
    }
  });

  let totalPrice = cartPrice + freezeCartPrice;

  let shipPrice = 0;
  cartPrice < 30000 && cartPrice > 0 ? (shipPrice = 3000) : (shipPrice = 0);

  let freezeShipPrice = 0;
  freezeCartPrice < 30000 && freezeCartPrice > 0
    ? (freezeShipPrice = 3000)
    : (freezeShipPrice = 0);

  let totalCount = cartCount + freezeCartCount;
  let price = totalPrice + shipPrice + freezeShipPrice;

  const handleCart = (id: number, check: boolean) => {
    //일반 상품 단일
    setCartItems({
      ...cartItems,
      cartList: cartItems.cartList.map((item: cartListType) => {
        if (item.cartId === id) return { ...item, checked: check };
        return item;
      }),
    });
    checkedList.includes(id)
      ? setCheckedList(checkedList.filter((item) => item !== id))
      : setCheckedList([...checkedList, id]);
  };

  const handleCartList = (check: boolean) => {
    //일반 상품 전체
    setIsCheck(check);
    setCartItems({
      ...cartItems,
      cartList: cartItems.cartList.map((item: cartListType) => {
        checkedList.includes(item.cartId)
          ? setCheckedList(checkedList.filter((item1) => item1 !== item.cartId))
          : setCheckedList([...checkedList, item.cartId]);
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
    checkedList.includes(id)
      ? setCheckedList(checkedList.filter((item) => item !== id))
      : setCheckedList([...checkedList, id]);
  };

  const handleFreezeCartList = (check: boolean) => {
    //냉동 상품 전체
    setFreezeCartItems({
      ...freezeCartItems,
      freezeCartList: freezeCartItems.freezeCartList.map(
        (item: cartListType) => {
          checkedList.includes(item.cartId)
            ? setCheckedList(
                checkedList.filter((item1) => item1 !== item.cartId)
              )
            : setCheckedList([...checkedList, item.cartId]);
          return { ...item, checked: check };
        }
      ),
    });
    setIsFreezeCheck(check);
  };

  const handleAllCartList = (check: boolean) => {
    //전체 선택
    setAllCartItems({
      ...allCartItems,
      allCartList: allCartItems.allCartList.map((item: cartListType) => {
        checkedList.includes(item.cartId)
          ? setCheckedList(checkedList.filter((item1) => item1 !== item.cartId))
          : setCheckedList([...checkedList, item.cartId]);
        return { ...item, checked: check };
      }),
    });
    setIsAllCheck(check);
    handleFreezeCartList(check);
    handleCartList(check);
  };

  const handleAllDelete = () => {
    //모든 카트 아이템 삭제 처리
    axios.put(`${baseUrl}/v1/api/carts/delete`, {
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    });
  };

  const handleSelectDelete = () => {
    //선택 카트 아이템 삭제 처리

    console.log(checkedList);
    checkedList.map((item) =>
      axios.put(`${baseUrl}/v1/api/carts/` + item, {
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      })
    );
    location.reload();
  };

  const handleCloseDelete = (id: number) => {
    //x버튼으로 아이템 삭제 처리
    cartItems.cartList
      .filter((item) => item.cartId === id)
      .map((item) =>
        axios.put(`${baseUrl}/v1/api/carts/` + id, {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        })
      );
    freezeCartItems.freezeCartList
      .filter((item) => item.cartId === id)
      .map((item) =>
        axios.put(`${baseUrl}/v1/api/carts/` + id, {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        })
      );
    location.reload();
  };

  const [modalOpen, setModalOpen] = useRecoilState(countModalState);
  const [countCartId, setCountCartId] = useState<number>(0);
  const clickProduct = (id:number) => {
    router.push(`/products/${id}`)
  }

  const showModal = (cartId: number) => {
    setModalOpen(!modalOpen);
    setCountCartId(cartId);
  };

  return (
    <>
    {modalOpen && (
        <CountModal  cartId={countCartId} />
      )}
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
                <p onClick={handleSelectDelete} id="select-delete">
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
                  <div className="cart-product-info-text" onClick={()=>clickProduct(element.productId)}>
                    <p>{element.productName}</p>
                    <p className="price-bold">
                      {element.productPrice.toLocaleString("en")}원
                    </p>
                  </div>
                  <img
                    className="img-cart-close"
                    src="./assets/images/icons/close.png"
                    alt="close"
                    onClick={() =>{ handleCloseDelete(element.cartId); clickProduct(element.productId)}}
                  />
                </div>
                <div className="cart-product-quantity">
                  <p>수량: {element.count}개</p>
                </div>
                <div className="text-order-amount">
                  <p>주문 금액</p>
                  <p>{(Number(element.productPrice) * Number(element.count))
                 .toLocaleString("en")}원</p>
                </div>
                <div className="box-button">
                  <button
                    id="box-button-01"
                    onClick={() => showModal(element.cartId)}
                  >
                    주문 수정
                  </button>

                  <button
                    id="box-button-02"
                    onClick={() => {
                      setBuyNow(element.cartId);
                      router.push(`/payment`);
                    }}
                  >
                    바로 구매
                  </button>
                </div>
              </div>
            </div>
                  ))}
          <section>
            <div className="cart-total-check">
              <p>
                상품 {cartCount}건 {cartPrice.toLocaleString("en")}원 + 배송비{" "}
                {shipPrice}원 = 총{cartPrice + shipPrice}원
              </p>
              <p className="price-bold">무료배송</p>
              <Link href="">더 담으러 가기</Link>
            </div>
          </section>

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
              <div className="box-cart-product">
                <div className="cart-product-info">
                  <img
                    className="img-cart-product"
                    src={element.productThumbnail}
                    alt="product"
                  />
                  <div className="cart-product-info-text" onClick={()=>clickProduct(element.productId)}>
                    <p>{element.productName}</p>
                    <p className="price-bold">
                      {element.productPrice.toLocaleString("en")}원
                    </p>
                  </div>
                  <img
                    className="img-cart-close"
                    src="./assets/images/icons/close.png"
                    alt="close"
                    onClick={() => {handleCloseDelete(element.cartId); clickProduct(element.productId)}}
                  />
                </div>
                <div className="cart-product-quantity">
                  <p>수량: {element.count}개</p>
                </div>
                <div className="text-order-amount">
                  <p>주문 금액</p>
                  <p>{(Number(element.productPrice) * Number(element.count))
                 .toLocaleString("en")}원</p>
                </div>
                <div className="box-button">
                  <button
                    id="box-button-01"
                    onClick={() => showModal(element.cartId)}
                  >
                    주문 수정
                  </button>
                  <button
                    id="box-button-02"
                    onClick={() => {
                      setBuyNow(element.cartId);
                      router.push(`/payment`);
                    }}
                  >
                    바로 구매
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section>
          <div className="cart-total-check" id="agree-main">
            <p>
              상품 {freezeCartCount}건 {freezeCartPrice.toLocaleString("en")}원
              + 배송비 {freezeShipPrice.toLocaleString("en")}원 = 총
              {(freezeCartPrice + freezeShipPrice).toLocaleString("en")}원
            </p>
            <p className="price-bold">무료배송</p>
            <Link href="">더 담으러 가기</Link>
          </div>
        </section>
        <section className="cart-total-price-box">
          <p className="cart-total-price-text">총 주문 금액</p>
          <div className="product-price">
            <p>상품 금액</p>
            <p className="price-bold">{totalPrice.toLocaleString("en")}원</p>
          </div>
          <div className="discount-price">
            <p>할인 금액</p>
            <p className="price-bold">0원</p>
          </div>
          <div className="delivery-price">
            <p>배송비</p>
            <p className="price-bold">
              {(shipPrice + freezeShipPrice).toLocaleString("en")}원
            </p>
          </div>
          <hr className="middle-line" />
          <div className="cart-total-price">
            <p>최종 결제 금액</p>
            <p id="cart-total-price">
              {(totalPrice + shipPrice + freezeShipPrice).toLocaleString("en")}
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
      </div>
      <CartFooter
        count={totalCount}
        totalPrice={price}
        checked={checkedList}
        allItems={allCartItems}
      />

      
    </>
  );
}
