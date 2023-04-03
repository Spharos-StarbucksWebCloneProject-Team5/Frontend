import React, { useEffect } from 'react'
import Link from 'next/link'

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton'
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function ShippingAddressInfo() {
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  const handleShippingAddressAdd = () => {
    // axios.post(`${baseUrl}/v1/api/shippingAddress`, {
    //   headers: {
    //     Authorization: `Bearer ${cookies.id}`,
    //   },
    // }).then((res) => {
    // });
  }

  return (
    <>
      <section id="shipping-header">
        <div>배송지 정보</div>
      </section>
      <section id="shipping-input">
        <div>
          <input type="text" placeholder="주소 별칭" />
          <input type="text" placeholder="받는 분 *" />
          <div className="post-number">
            <input type="text" placeholder="우편번호 *" />
            <Link href="">
              <div className="search-address">
                주소검색
              </div>
            </Link>
          </div>
          <input type="text" placeholder="기본주소 *" />
          <input type="text" placeholder="상세주소 *" />
          <input type="text" placeholder="연락처1 *" />
          <input type="text" placeholder="연락처2" />
          <div className="shipping-memo">
            <p>배송 메모</p>
            <select name="" id="">
              <option value="">배송 메모를 선택해 주세요.</option>
              <option value="">배송 전 연락 바랍니다.</option>
              <option value="">부재 시 경비실에 맡겨주세요.</option>
              <option value="">부재 시 문 앞에 놓아주세요.</option>
              <option value="">부재 시 전화 또는 문자 남겨주세요.</option>
              <option value="">직접 입력</option>
            </select>
          </div>
          <div className="save-shipping">
            <input type="checkbox" /><span>기본 배송지로 저장합니다.</span>
          </div>
        </div>
      </section>
      <section className="submit-container">
        <StButton
          buttonText="등록하기"
          textSize="1.0rem"
          handler={handleShippingAddressAdd}
        />
      </section>
    </>
  )
}
