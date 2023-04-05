import Config from "@/configs/config.export";
import { paymentType } from "@/types/payment/paymentType";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function orderListItem() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;
  const [paymentData, setPaymentData] = useState<paymentType[]>()

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/v1/api/payments/get?startDate=2023-04-05&endDate=2023-04-05`,
        {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        //setPaymentData()
      });
  }, []);

  return (
    <div className="container">
      <header>
        <div className="header-top">
          <div className="menu-icon">
            <img src="assets/images/icons/left-chevron.svg" alt="" />
          </div>
          <h1>온라인 스토어</h1>
          <nav>
            <ul>
              <li>
                <img src="assets/images/icons/search.svg" />
              </li>
              <li>
                <img src="assets/images/icons/shopping-cart.svg" />
              </li>
              <li>
                <img src="assets/images/icons/close.svg" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <form className="order-list-page-form">
        <div className="order-list-page-title">
          <h1>주문 내역</h1>
        </div>
        <div className="order-list-page-date">
          <p>전체</p>
          <div className="order-list-page">
            <p>2022.04.01~2023.03.31</p>
            <div className="order-img">
              <img src="assets/images/icons/left-chevron.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="order-detail-page-date">
          <p>2023-03-28</p>
          <div className="order-detail-page">
            <p>주문 상세</p>
            <div className="order-detail-img">
              <img src="assets/images/icons/left-chevron.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="order-product-card-wrap">
          <div className="order-product-card-inner">
            <div className="order-product-card-left">
              <img src="assets/images/pic/커티스 머그1.png" alt="" />
            </div>
            <div className="order-product-card-right">
              <p className="order-product-title">주문취소</p>
              <p>23 커티스 쿨릭 레드 머그 355ml</p>
              <p className="order-product-price">
                34,000원<span>1개</span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
