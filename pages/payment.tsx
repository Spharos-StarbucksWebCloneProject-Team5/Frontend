import MiddleLine from "@/components/ui/MiddleLine";
import ShippingInfo from "@/components/widgets/ShippingInfo";
import Config from "@/configs/config.export";
import {
  cartPaymentState,
  cartBuyNowState,
  buyNowState,
  paymentState,
  payingState,
} from "@/state/atom/paymentState";
import { shippingState } from "@/state/atom/shippingState";
import { userLoginState } from "@/state/atom/userLoginState";
import { buyType } from "@/types/cart/cartDataType";
import { productBuyType } from "@/types/product/fetchDataType";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import Swal from "sweetalert2";

export default function payment() {
  const baseUrl = Config().baseUrl;
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const router = useRouter();
  const { isLogin } = useRecoilValue(userLoginState);

  const [cartListPay, setCartListPay] = useRecoilState(cartPaymentState); //카트 여러 개 구매
  const [cartPay, setCartPay] = useRecoilState(cartBuyNowState); //카트 바로 구매
  const [buyPay, setBuyPay] = useRecoilState(buyNowState); //상품 바로 구매
  //const [productData, setProductData] = useRecoilState(paymentState);
  const [productData, setProductData] = useRecoilState(payingState); //상품정보 저장(새고 시 날라가면 안됨)
  const [sbCardCheck, setSbCardCheck] = useState<boolean>(true); //스벅 체크
  const [creditCardCheck, setCreditCardCheck] = useState<boolean>(false); //신카 체크
  const [payData, setPayData] = useRecoilState(paymentState); //결제내역 저장(새고 시 날라가면 안됨)
  const [isShippingId, setIsShippingId] = useRecoilState(shippingState);//배송지 선택여부 체크


  //const [recoilList,setRecoilList] = useState<string[]>([""])

  useEffect(() => {
    const myLogin = cookies.id;
    //console.log(isLogin);
    if (!myLogin && !isLogin) {
      Swal.fire({
        icon: "warning",
        text: "로그인이 필요합니다!",
      });
      router.push("/login");
      return;
    }

    if (cartListPay.length !== 0) {
      console.log(`카트 1 ${cartListPay}`);
      cartListPay.map((item) => {
        console.log(`item  ${item}`);
        axios
          .get(`${baseUrl}/v1/api/carts/${item}`, {
            headers: {
              Authorization: `Bearer ${cookies.id}`,
            },
          })
          .then((res) => {
            console.log(`res  ${res.data}`);
            setProductData([
              ...productData,
              {
                productId: res.data.productId,
                productName: res.data.productName,
                price: res.data.productPrice,
                thumbnail: res.data.productThumbnail,
                count: res.data.count,
              },
            ]);
          });
      });
    } else if (cartPay !== 0) {
      console.log(`카트 2 ${cartPay}`);
      axios
        .get(`${baseUrl}/v1/api/carts/${cartPay}`, {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setProductData([
            ...productData,
            {
              productId: res.data.productId,
              productName: res.data.productName,
              price: res.data.productPrice,
              thumbnail: res.data.productThumbnail,
              count: res.data.count,
            },
          ]);
        });
    } else if (buyPay) {
      console.log(`카트 3 ${buyPay}`);
      axios
        .get(`${baseUrl}/v1/api/products/${buyPay.productId}`)
        .then((res) => {
          console.log(res.data);
          setProductData([
            ...productData,
            {
              productId: res.data.id,
              productName: res.data.name,
              price: res.data.price,
              thumbnail: res.data.thumbnail,
              count: buyPay.count,
            },
          ]);
        });
    }
    //결제내역 초기화
    setPayData([]);
  }, []);

  let orderPrice = 0;

  productData.map((item) => {
    orderPrice = item.price * item.count + orderPrice;
  });

  let shipPrice = orderPrice < 30000 ? 3000 : 0;
  let totalPrice = orderPrice + shipPrice;

  //결제 처리
  const buyHandler = () => {
    if(isShippingId===0){
      Swal.fire({
        icon: "warning",
        text: "배송지를 선택해주세요.",
      });
    }
    else{
      //결제 디비 등록
    productData.map((item) => {
      axios.post(
        `${baseUrl}/v1/api/payments`,
        {
          productId: item.productId,
          productCount: item.count,
          shippingAddressId: 1,
          payType: sbCardCheck ? 1 : 2,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        }
      );

      setPayData([
        ...payData,
        {
          productId: item.productId,
          productName: item.productName,
          price: item.price,
          thumbnail: item.thumbnail,
          count: item.count,
          payType: sbCardCheck ? 1 : 2,
        },
      ]);
    });
    //카트에서 삭제
    if (cartListPay.length !== 0) {
      console.log(`삭제삭제 ${cartListPay}`);
      cartListPay.map((item) => {
        axios.put(`${baseUrl}/v1/api/carts/${item}`, {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        });
      });
    } else if (cartPay !== 0) {
      console.log(`카트 2 삭제삭제 ${cartPay}`);
      axios.put(`${baseUrl}/v1/api/carts/${cartPay}`, {
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      });
    }
    //recoil에서 삭제
    setCartListPay([]);
    setCartPay(0);
    setBuyPay({
      productId: 0,
      count: 0,
    });
    setProductData([]);

    Swal.fire({
      title: "결제가 완료되었습니다.",
      confirmButtonText: `확인`,
    });
    router.push("/paymentInfo");

    }
    
  };

  const sbCheckHandler = (check: boolean) => {
    setSbCardCheck(check);
    setCreditCardCheck(!check);
  };
  const creditCheckHandler = (check: boolean) => {
    setCreditCardCheck(check);
    setSbCardCheck(!check);
  };

  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <ShippingInfo />
      <section className="payment-products-bg">
        <div className="payment-title">
          <p>상품내역</p>
          <img
            src="./assets/images/icons/arrow-down-sign-to-navigate.png"
            alt=""
          />
        </div>
        {productData.map((item, idx) => (
          <div className="payment-products" key={idx}>
            <img src={item.thumbnail} alt="" />
            <p>{item.productName}</p>
          </div>
        ))}
      </section>
      <section className="payment-option-info">
        <div className="payment-title">
          <p>쿠폰 및 할인</p>
          <img
            src="./assets/images/icons/arrow-down-sign-to-navigate.png"
            alt=""
          />
        </div>
        <div className="payment-coupon">
          <img src="./assets/images/icons/service/voucher.png" alt="" />
          <p>쿠폰</p>
        </div>
        <MiddleLine />
        <div className="payment-mobile-gift payment-title">
          <p>모바일 상품권</p>
          <div className="payment-mobile-gift-right">
            <p>사용하기</p>
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <MiddleLine />
        <div className="payment-type">
          <p>결제 수단</p>
          <div>
            <div
              id="product-normal"
              className={sbCardCheck ? "check-active" : "check-all"}
              onClick={() => sbCheckHandler(!sbCardCheck)}
            />
            <label>스타벅스 카드</label>
          </div>
          <div>
            <div
              id="product-normal"
              className={creditCardCheck ? "check-active" : "check-all"}
              onClick={() => creditCheckHandler(!creditCardCheck)}
            />
            <label>신용 카드</label>
          </div>
        </div>
        <MiddleLine />
        <div className="payment-info">
          <div className="payment-title">
            <p>결제 정보</p>
          </div>
          <div className="payment-order-price">
            <p>주문 금액</p>
            <p>{totalPrice.toLocaleString("en")}원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>상품 금액</p>
            <p>{orderPrice.toLocaleString("en")}원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>배송비</p>
            <p>{shipPrice.toLocaleString("en")}원</p>
          </div>
        </div>
        <MiddleLine />
        <div>
          <div className="payment-order-price">
            <p>할인 금액</p>
            <p>0원</p>
          </div>
          <div className="payment-info-price-fb">
            <p>상품 할인</p>
            <p>0원</p>
          </div>
        </div>
        <MiddleLine />
        <div className="payment-order-price">
          <p>결제 금액</p>
          <p>{totalPrice.toLocaleString("en")}원</p>
        </div>
        <div className="payment-info-price-fb">
          <p>모바일 상품권</p>
          <p>0원</p>
        </div>
        <MiddleLine />
        <div className="payment-title payment-order-price">
          <p>최종 결제 금액</p>
          <p>{totalPrice.toLocaleString("en")}원</p>
        </div>
        <p className="payment-description">
          위 주문 내용을 확인하였으며, 결제에 동의합니다.
          <br />
          (전자상거래법 8조 2항)
        </p>
      </section>
      <div className="cart-footer">
        <div className="submit-container cart-footer-padding">
          <div className="payment-btn-order">
            <button onClick={buyHandler}>
              {totalPrice.toLocaleString("en")}원 결제하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
