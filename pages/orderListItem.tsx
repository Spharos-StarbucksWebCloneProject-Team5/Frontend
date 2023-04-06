import Config from "@/configs/config.export";
import { paymentType } from "@/types/payment/paymentType";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function orderListItem() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;
  const [paymentData, setPaymentData] = useState<paymentType[]>()


  



  const nowDate = new Date()
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth()+1
  const nowMonth1 = nowMonth >= 10 ? nowMonth : "0" + nowMonth; //month 두자리로 출력
  
  const nowDay = nowDate.getDate()
  const nowDay1 = nowDay >= 10 ? nowDay : "0" + nowDay; //day 두자리로 출력
  const joinNowDate = `${nowYear}-${nowMonth1}-${nowDay1}`
 
  const agoDate = new Date()
  agoDate.setMonth(agoDate.getMonth() - 3);
  const agoYear = agoDate.getFullYear();``
  const agoMonth = agoDate.getMonth()+1
  const agonMonth1 = agoMonth >= 10 ? agoMonth : "0" + agoMonth; //month 두자리로 출력
  const agoDay = agoDate.getDate()
  const agoDay1 = agoDay >= 10 ? agoDay : "0" + agoDay; //day 두자리로 출력
  const joinAgoDate = `${agoYear}-${agonMonth1}-${agoDay1}`

  console.log(`joinAgoDate ${joinAgoDate}`)

  useEffect(() => {
    axios
      (
        `${baseUrl}/v1/api/payments/get?startDate=${joinAgoDate}&endDate=${joinNowDate}`,
        {
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPaymentData(res.data)
      });
  }, []);

  return (
    <div className="container">
      
      <form className="order-list-page-form">
        <div className="order-list-page-title">
          <h1>주문 내역</h1>
        </div>
        <div className="order-list-page-date">
          <p>전체</p>
          <div className="order-list-page">
            <p>{joinAgoDate}~{joinNowDate}</p>
            <div className="order-img">
              <img src="/assets/images/icons/left.png" alt="" />
            </div>
          </div>
        </div>
        {paymentData?.map(item=>(<>
        <div className="order-detail-page-date">
          <p>{item.date.substring(0,10)}</p>
          <div className="order-detail-page">
            <p>주문 상세</p>
            <div className="order-detail-img">
              <img src="/assets/images/icons/left.png" alt="" />
            </div>
          </div>
        </div>
          <div className="order-product-card-wrap">
          <div className="order-product-card-inner">
            <div className="order-product-card-left">
              <img src={item.productThumbnail} alt="" />
            </div>
            <div className="order-product-card-right">
              <p className="order-product-title">{item.payStatus===1?"주문완료":item.payStatus===0?"주문취소":""}</p>
              <p>{item.productName}</p>
              <p className="order-product-price">
              {item.productPrice.toLocaleString("en")}원<span>{item.count}개</span>
              </p>
            </div>
          </div>
        </div>
        </>
        )) }
        
      </form>
    </div>
  );
}
