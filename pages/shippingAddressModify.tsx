import React, { useEffect } from 'react'
import Link from 'next/link'

import axios from 'axios';

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton'
import { useCookies } from 'react-cookie';

export default function ShippingAddressModify() {
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  const handleShippingAddressModify = () => {
    // axios.put(`${baseUrl}/v1/api/shippingAddress/${id}`, {
    //   headers: {
    //     Authorization: `Bearer ${cookies.id}`,
    //   },
    // }).then((res) => {
    // });
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
        <div>배송지 정보</div>
      </section>
      <section id="shipping-input">
        <div className='shipping-modify-input'>
          <p>주소 별칭</p>
          <input type="text" />
          <p>받는 분 *</p>
          <input type="text" />
          <div className="post-number">
            <div>
              <p>우편번호 *</p>
              <input type="text" />
            </div>
            <Link href="">
              <div className="search-address">
                주소검색
              </div>
            </Link>
          </div>
          <p>기본주소 *</p>
          <input type="text" />
          <p>상세주소 *</p>
          <input type="text" />
          <p>연락처1 *</p>
          <input type="text" />
          <p>연락처2</p>
          <input type="text" />
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
          buttonText="수정하기"
          textSize="1.0rem"
          handler={handleShippingAddressModify}
        />
      </section>
    </>
  )
}
