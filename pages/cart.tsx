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
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";

import { useCookies } from "react-cookie";
import CountModal from "@/components/ui/CountModal";
import { cartPaymentState, cartBuyNowState } from "@/state/atom/paymentState";
import CartTotal from "@/components/page/cart/CartTotal";
import CartCheck from "@/components/page/cart/CartCheck";
import CartProduct from "@/components/page/cart/CartProduct";
import CartFreezeProduct from "@/components/page/cart/CartFreezeProduct";
import CartTop from "@/components/page/cart/CartTop";

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
    else {
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

    checkedList.map((item) =>
      axios.put(`${baseUrl}/v1/api/carts/` + item, {
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      })
    );
    router.reload();
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
    router.reload();
  };

  const [modalOpen, setModalOpen] = useRecoilState(countModalState);
  const [countCartId, setCountCartId] = useState<number>(0);
  const clickProduct = (id: number) => {
    router.push(`/products/${id}`)
  }

  const showModal = (cartId: number) => {
    setModalOpen(!modalOpen);
    setCountCartId(cartId);
  };

  return (
    <>
      {modalOpen && (
        <CountModal cartId={countCartId} />
      )}
      <Head>
        <title>Cart</title>
      </Head>
      <div className="cart-background">
        <CartTop
          isAllCheck={isAllCheck}
          handleAllCartList={handleAllCartList}
          handleSelectDelete={handleSelectDelete}
          handleAllDelete={handleAllDelete}
        />
        <CartProduct
          productType={"일반 상품"}
          isCheck={isCheck}
          cartItems={cartItems}
          handleCartList={handleCartList}
          handleCart={handleCart}
          clickProduct={clickProduct}
          handleCloseDelete={handleCloseDelete}
          showModal={showModal}
          setBuyNow={setBuyNow}
        />
        <CartCheck
          cartCount={cartCount}
          cartPrice={cartPrice}
          shipPrice={shipPrice}
        />
        <CartFreezeProduct
          productType={"냉동 상품"}
          isCheck={isFreezeCheck}
          freezeCartItems={freezeCartItems}
          handleCartList={handleFreezeCartList}
          handleCart={handleCart}
          clickProduct={clickProduct}
          handleCloseDelete={handleCloseDelete}
          showModal={showModal}
          setBuyNow={setBuyNow}
        />
        <CartCheck
          cartCount={freezeCartCount}
          cartPrice={freezeCartPrice}
          shipPrice={freezeShipPrice}
        />
        <CartTotal
          totalPrice={totalPrice}
          shipPrice={shipPrice}
          freezeShipPrice={freezeCartPrice}
        />
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
