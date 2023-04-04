import Config from "@/configs/config.export";
import { paymentState } from "@/state/atom/paymentState";
import { ShippingAddressReq } from "@/types/shippingAddress/shipAddressDataType";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";

export default function paymentInfo() {
  const [payData, setPayData] = useRecoilState(paymentState);
  const router = useRouter();
  const [cookies] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;

  const [shippingAddress, setShippingAddress] = useState<ShippingAddressReq>({
    id: 0,
    receiver: "",
    nickname: "",
    choiceMain: false,
    zipCode: 0,
    address: "",
    detailAddress: "",
    shippingPhone1: "",
    shippingPhone2: "",
    shippingMemo: "",
  });

  const goMain = () => {
    setPayData([]);
    router.push("/");
  };

  let orderPrice = 0;

  payData.map((item) => {
    //console.log(item.count);
    orderPrice = item.price * item.count + orderPrice;
  });

  let shipPrice = orderPrice < 30000 ? 3000 : 0;
  let totalPrice = orderPrice + shipPrice;

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/shippingAddress/main`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }).then((res) => {
      setShippingAddress(res.data);
    });
  }, []);

  return (
    <div className="container">
      <form className="payment-info-form">
        <div className="payment-info-header">
          <div className="payment-info-title">
            <h1>주문이 완료되었습니다.</h1>
          </div>
        </div>
        <div className="pay-info-address-form">
          <h1>배송정보</h1>
        </div>
        {
          <div className="pay-info-address">
            <p>{shippingAddress.receiver}({shippingAddress.nickname})</p>
            <p>
              ({shippingAddress.zipCode}) {shippingAddress.address}
              <br />
              {shippingAddress.detailAddress}
              <br />
              {shippingAddress.shippingPhone1}
            </p>
          </div>
        }

        <div className="payment-product-list-form">
          <div className="payment-product-list">
            <p>주문상품({payData.length})</p>
          </div>
          {payData.map((item, idx) => (
            <div className="payment-product-list-info" key={idx}>
              <img className="red-mug-img" src={item.thumbnail} alt="" />
              <div className="payment-total-product">
                <p>{item.productName}</p>
                <p>{item.count}개</p>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-total-wrap-list">
          <div className="payment-total-wrap">
            <p>결제 금액</p>
            <div className="payment-total-won">
              <p>{totalPrice.toLocaleString("en")}원</p>
              <img
                className="pay-info-right-img"
                src="./assets/images/icons/arrow-down-sign-to-navigate.png"
              />
            </div>
          </div>
        </div>

        <div className="payment-total-sum-list">
          <div className="payment-total-sum">
            {payData[0]?.payType === 1 ? <p>스타벅스 카드</p> : <p>신용카드</p>}

            <p>{totalPrice.toLocaleString("en")}원</p>
          </div>
        </div>
        <div className="pay-info-btn-list">
          <button className="pay-info-btn">상세정보 확인</button>
          <button className="go-main-btn" onClick={goMain}>
            메인으로 가기
          </button>
        </div>
      </form>
    </div>
  );
}
