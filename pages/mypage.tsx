import Config from "@/configs/config.export";
import { userLoginState } from "@/state/atom/userLoginState";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";
import {shippingPayment} from "@/types/shippingAddress/shipAddressDataType"

export default function mypage() {
  const { push } = useRouter();
  const baseUrl = Config().baseUrl;

  const { isLogin } = useRecoilValue(userLoginState);
  const [cookies] = useCookies(["id"]);
  const [shipStatus,setShipStatus] = useState<shippingPayment>({
    preparingProduct: 0,
    preparingForDelivery: 0,
    shipping: 0,
    deliveryCompleted: 0
  });

  function btnClick() {
    console.log("Click Button");
  }

  function orderListClick() {
    const nowDate = new Date()
    const agoDate = new Date()
    //agoDate.setMonth(agoDate.getMonth()-3)
    axios.get(`${baseUrl}/v1/api/payments/get`,
      {
        headers:{
          Authorization: `Bearer ${cookies.id}`,
        }
      }
    )
    .then((res) => {
      console.log(res);
      if(res.data.length ===0 ){
        push('/orderList')
      }
      push('/orderListItem')
    }); 
  }

  useEffect(() => {
    const myLogin = cookies.id;
    if (!myLogin && !isLogin) {
      Swal.fire({
        icon: "warning",
        text: "로그인이 필요합니다!",
      });
      push("/login");
      return;
    } else {
      axios.get(`${baseUrl}/v1/api/payments/shipping`, {
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      }).then(res=>{
        console.log(res)
        setShipStatus(res.data)
      })
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mypage</title>
      </Head>
      <section className="order-delivery-status-list">
        <div className="status-text">
          <p>주문/배송 현황</p>
          <p>최근 3개월 동안 구매한 상품</p>
        </div>
        <div className="order-delivery-status">
          <div className="status">
            <p>{shipStatus?.preparingProduct}</p>
            <p>상품준비중</p>
          </div>
          <div className="direction">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
          <div className="status">
            <p>{shipStatus?.preparingForDelivery}</p>
            <p>배송준비중</p>
          </div>
          <div className="direction">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
          <div className="status">
            <p>{shipStatus?.shipping}</p>
            <p>배송중</p>
          </div>
          <div className="direction">
            <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
          <div className="status">
            <p>{shipStatus?.deliveryCompleted}</p>
            <p>배송완료</p>
          </div>
        </div>
      </section>
      <section className="mypage-bottom">
        <div className="bottom-service-list">
          <p>서비스</p>
        </div>
        <div className="bottom-service" onClick={orderListClick}>
          <img
            src="assets/images/icons/service/shopping-list.png"
            alt="shopping-list"
          />
          <div className="bottom-service-button">
            <p>주문 내역</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img
            src="assets/images/icons/service/present-box.png"
            alt="present-box"
          />
          <div className="bottom-service-button">
            <p>선물함</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/voucher.png" alt="voucher" />
          <div className="bottom-service-button">
            <p>쿠폰</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div
          className="bottom-service"
          onClick={() => push("/shippingAddress")}
        >
          <img
            src="assets/images/icons/service/delivery-truck.png"
            alt="delivery-truck"
          />
          <div className="bottom-service-button">
            <p>배송지 관리</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img src="assets/images/icons/service/bell.png" alt="bell" />
          <div className="bottom-service-button">
            <p>입고 알림 내역</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
        <div className="margin-bottom"></div>
        <div className="bottom-service-list">
          <p>약관 및 정책</p>
        </div>
        <div className="bottom-service" onClick={btnClick}>
          <img
            src="assets/images/icons/service/megaphone.png"
            alt="megaphone"
          />
          <div className="bottom-service-button">
            <p>배송지 정보 수집 및 이용 동의</p>
            <img src="assets/images/icons/arrow-point-to-right.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
