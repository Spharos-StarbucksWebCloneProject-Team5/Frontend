import MiddleLine from "@/components/ui/MiddleLine";
import CartFooter from "@/components/page/cart/CartFooter";
import Config from "@/configs/config.export";
import { cartIsCheckState } from "@/state/atom/cartState";
import { cartListState } from "@/state/atom/cartState";
import { freezeIsCheckState } from "@/state/atom/freezeIsCheckState";
import { generalIsCheckState } from "@/state/atom/generalIsCheckState";
import { loginModalState } from "@/state/atom/loginModalState";
import { userLoginState } from "@/state/atom/userLoginState";
import { cartListType, productListCardType } from "@/types/product/fetchDataType";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";

export default function cart() {
  const { isLogin } = useRecoilValue(userLoginState);
  console.log(isLogin);
  const setLoginModal = useSetRecoilState<boolean>(loginModalState);

  const { query, push } = useRouter();
  const baseUrl = Config().baseUrl;
  const [cartData, setCartData] = useState<cartListType[]>();
  const [productData, setProductData] = useState<productListCardType[]>();
  const [checkItems, setCheckItems] = useRecoilState(cartListState); //체크된 체크박스 배열
  const [checkAll, setCheckAll] = useRecoilState(cartIsCheckState);
  const [freezeList, setFreezeList] = useRecoilState(freezeIsCheckState);
  const [generalList, setGeneralList] = useRecoilState(generalIsCheckState);
  //`${baseUrl}/v1/api/carts/get/${query}`

  useEffect(() => {
    axios(`${baseUrl}/v1/api/carts/get/3`).then((res) => {
      console.log(res.data);
      setCartData(res.data);
      //setProductData(res.data.product);
      //console.log(res.data.product);
      //productData?.map(item=>{(item.~ category === 1) : setFreeze(product) ? setGeneral(product )})
    });
  }, []);

  // if (!isLogin) {
  //   Swal.fire({
  //     icon: "warning",
  //     text: "로그인이 필요합니다!",
  //   });
  //   push("/login");
  // }

  const handleAllCheck = () => {
    //   //체크박스 다 선택
    //   if (checked) {
    //     // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
    //     const idArray = [];
    //     data.forEach((el) => idArray.push(el.id));
    //     setCheckItems(idArray);
    //   } else {
    //     // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
    //     setCheckItems([]);
    //   }
  };
  const btnAllDelete = () => {
    //모든 카트 아이템 삭제 처리
  };

  const btnSelectDelete = () => {
    //선택 카트 아이템 삭제 처리
    //checkList.map();
  };
  const handleSingleCheck = (id:number, checked:boolean) => {
    if(checked){
      //setCheckItems([...checkItems, id])
    }
    else{
     // checkItems.filter()//
    }
  };
  const btnGeneralCheck = (check: boolean) => {
    //setCheckList(generalList)
  };
  const btnFreezeCheck = (check: boolean) => {
    //setCheckList(generalList)
  };

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
              <div
                id="select-all"
                onClick={() => handleAllCheck()}
              />
              <label>전체 선택</label>
            </div>
            <div id="btn-cart-delete">
              <div className="btn-delete-inner">
                <p onClick={btnSelectDelete} id="select-delete">
                  선택삭제
                </p>
                <p>|</p>
                <p onClick={btnAllDelete}>전체삭제</p>
              </div>
            </div>
          </div>
          <MiddleLine />
          <div className="advertising-info">
            <input
              type="checkbox"
              id="product-normal"
              onClick={() =>/*일반상품체크*/ }
            />
            <label>일반 상품</label>
          </div>
          <MiddleLine />
          {cartData?.map(element => <div className="advertising-info box-cart">
            
            <input
              type="checkbox"
              id="select-product"
              //onClick={() => handleSingleCheck()}
            />
            <div className="box-cart-product">
              <div className="cart-product-info">
                <img
                  className="img-cart-product"
                  src="./assets/images/products/01.png"
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
                <p>{element.}*{element.count}원</p>
              </div>
              <div className="box-button">
                <button id="box-button-01">주문 수정</button>
                <button id="box-button-02">바로 구매</button>
              </div>
            </div>
          </div>)}
          

          <MiddleLine />
          <div className="advertising-info">
            <input type="checkbox" id="product-normal" />
            <label>냉동 상품</label>
          </div>
          <MiddleLine />
          {cartData?.map(element => <div className="advertising-info box-cart">
            <input
              type="checkbox"
              id="select-product"
              //onClick={() => handleSingleCheck()}
            />
            <div className="box-cart-product">
              <div className="cart-product-info">
                <img
                  className="img-cart-product"
                  src="./assets/images/products/01.png"
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
                <p>{element.productPrice}*{element.count}원</p>
              </div>
              <div className="box-button">
                <button id="box-button-01">주문 수정</button>
                <button id="box-button-02">바로 구매</button>
              </div>
            </div>
          </div>)}
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
        </div>
        <CartFooter/>
    </>
  );
}
