import Config from "@/configs/config.export";
import axios from "axios";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function ShippingInfo() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;
  // useEffect(() => {
  //   console.log(cookies.id);

  //   axios
  //     .get(`${baseUrl}/v1/api/shippingAddress`, {
  //       headers: {
  //         Authorization: `Bearer ${cookies.id}`,
  //       },
  //     })
  //     .then((res) => {});
  // }, []);

  return (
    <section className="padding-lr-20">
      <div id="payment">
        <p>결제하기</p>
      </div>
      <div className="payment-box-shipping-info">
        <div className="box-shipping-info">
          <div className="payment-title">
            <p>배송 정보</p>
          </div>
          <div id="btn-update">
            <button>변경</button>
          </div>
        </div>
        <div className="shipping-address">
          <p>이름 (배송지이름)</p>
          <p>(우편번호) 주소</p>
          <p>상세주소</p>
          <p>전화번호</p>
        </div>
      </div>
    </section>
  );
}
