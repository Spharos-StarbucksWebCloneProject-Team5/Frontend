import React from "react";
import Image from "next/image";
import router from "next/router";
import { useRecoilState } from "recoil";
import {
  cartPaymentState,
  cartBuyNowState,
  buyNowState,
  paymentState,
  payingState,
} from "@/state/atom/paymentState";

export default function BackButton3() {
  const [cartListPay, setCartListPay] = useRecoilState(cartPaymentState); //카트 여러 개 구매
  const [cartPay, setCartPay] = useRecoilState(cartBuyNowState); //카트 바로 구매
  const [buyPay, setBuyPay] = useRecoilState(buyNowState); //상품 바로 구매
  const [productData, setProductData] = useRecoilState(payingState);
  return (
    <div
      onClick={() => {
        setCartListPay([]);
        setCartPay(0);
        setBuyPay({
          productId: 0,
          count: 0,
        });
        setProductData([]);
        router.push("/");
      }}
    >
      <Image
        src="/assets/images/icons/back.png"
        width={50}
        height={50}
        className="back-button"
        alt="backButton"
      />
    </div>
  );
}
