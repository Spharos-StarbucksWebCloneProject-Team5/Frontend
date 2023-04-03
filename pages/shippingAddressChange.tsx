import React, { useEffect } from 'react'
import Link from 'next/link'

import axios from 'axios';

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton'
import { useCookies } from 'react-cookie';

export default function ShippingAddressChange() {
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  const handleShippingAddressChange = () => {
  }

  // useEffect(() => {
  //   axios.get(`${baseUrl}/v1/api/shippingAddress`, {
  //     headers: {
  //       Authorization: `Bearer ${cookies.id}`,
  //     },
  //   }).then((res) => {
  //   });
  // }, []);

  return (
    <>
      <section id="shipping-header">
        <p>배송지 선택</p>
        <Link href="">
          <span>+ 새 배송지 추가</span>
        </Link>
      </section>
      <section id="shipping-list">
        <input type="radio" name="deliver-place" />
        <div className="shipping-info">
          <div className="shipping-name">
            <div className="name">춘식이 (집)</div>
            <div className="is-primary">기본</div>
          </div>
          <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
          <p>상세주소</p>
          <p>010-1234-5678</p>
          <p>부재시 문 앞에 놓아주세요.</p>
        </div>
        <Link href="">수정</Link>
      </section>
      <section id="shipping-list">
        <input type="radio" name="deliver-place" />
        <div className="shipping-info">
          <div className="shipping-name">
            <div className="name">죠르디</div>
          </div>
          <p>(48950) 부산광역시 중구 용두산길 35-7(광복동2가) 용두산공원</p>
          <p>상세주소</p>
          <p>010-1234-5678</p>
          <p>배송 전 연락 바랍니다.</p>
        </div>
        <Link href="">수정</Link>
      </section>
      <section id="shipping-list">
        <input type="radio" name="deliver-place" />
        <div className="shipping-info">
          <div className="shipping-name">
            <div className="name">어피치(회사)</div>
          </div>
          <p>(48060) 부산광역시 해운대구 APEC로 55(우동) 1층 로비</p>
          <p>상세주소</p>
          <p>010-1234-5678</p>
          <p>부재시 문 앞에 놓아주세요.</p>
        </div>
        <Link href="">수정</Link>
      </section>
      <section className="submit-container">
        <StButton
          buttonText="변경하기"
          textSize="1.0rem"
          handler={handleShippingAddressChange}
        />
      </section>
    </>
  )
}
