import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import axios from 'axios';

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton'

import Swal from 'sweetalert2';
import { ShippingAddressModifyReq } from '@/types/shippingAddress/shipAddressDataType';

export default function ShippingAddressModify() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  const [shippingAddressModify, setShippingAddressModify] = useState<ShippingAddressModifyReq>({
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

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setShippingAddressModify({
      ...shippingAddressModify,
      [name]: value,
    });
  }

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setShippingAddressModify({
      ...shippingAddressModify,
      [name]: checked,
    });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setShippingAddressModify({
      ...shippingAddressModify,
      [name]: value,
    });
  }

  const handleShippingAddressModify = () => {
    axios.put(`${baseUrl}/v1/api/shippingAddress/${router.query.shippingAddressId}`, 
      {
        nickname: shippingAddressModify.nickname,
        receiver: shippingAddressModify.receiver,
        zipCode: shippingAddressModify.zipCode,
        address: shippingAddressModify.address,
        detailAddress: shippingAddressModify.detailAddress,
        shippingPhone1: shippingAddressModify.shippingPhone1,
        shippingPhone2: shippingAddressModify.shippingPhone2,
        shippingMemo: shippingAddressModify.shippingMemo,
        choiceMain: shippingAddressModify.choiceMain,
      },
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      }
    ).then((res) => {
    Swal.fire({
      icon: "success",
      text: `배송지가 수정되었습니다.`,
      customClass: {
        confirmButton: "swal-confirm-button",
      },
    });
    router.back();
  });
}

useEffect(() => {
  axios.get(`${baseUrl}/v1/api/shippingAddress/${router.query.shippingAddressId}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookies.id}`,
    },
  }).then((res) => {
    console.log(res.data)
    setShippingAddressModify(res.data);
  });
}, []);

useEffect(() => {
  console.log(shippingAddressModify);
}, [shippingAddressModify]);

return (
  <>
    <section id="shipping-header">
      <div>배송지 정보</div>
    </section>
    <section id="shipping-input">
      <div className='shipping-modify-input'>
        <p>주소 별칭</p>
        <input type="text" name="nickname" value={shippingAddressModify.nickname} onChange={handleChange} />
        <p>받는 분 *</p>
        <input type="text" name="receiver" value={shippingAddressModify.receiver} onChange={handleChange} />
        <div className="post-number">
          <div>
            <p>우편번호 *</p>
            <input type="text" name="zipCode" value={shippingAddressModify.zipCode} onChange={handleChange} />
          </div>
          <Link href="">
            <div className="search-address">
              주소검색
            </div>
          </Link>
        </div>
        <p>기본주소 *</p>
        <input type="text" name="address" value={shippingAddressModify.address} onChange={handleChange} />
        <p>상세주소 *</p>
        <input type="text" name="detailAddress" value={shippingAddressModify.detailAddress} onChange={handleChange} />
        <p>연락처1 *</p>
        <input type="text" name="shippingPhone1" value={shippingAddressModify.shippingPhone1} onChange={handleChange} />
        <p>연락처2</p>
        <input type="text" name="shippingPhone2" value={shippingAddressModify.shippingPhone2} onChange={handleChange} />
        <div className="shipping-memo">
          <p>배송 메모</p>
          <select name="shippingMemo" value={shippingAddressModify.shippingMemo} onChange={handleSelect}>
            <option value="배송 메모를 선택해 주세요.">배송 메모를 선택해 주세요.</option>
            <option value="배송 전 연락 바랍니다.">배송 전 연락 바랍니다.</option>
            <option value="부재 시 경비실에 맡겨주세요.">부재 시 경비실에 맡겨주세요.</option>
            <option value="부재 시 문 앞에 놓아주세요.">부재 시 문 앞에 놓아주세요.</option>
            <option value="부재 시 전화 또는 문자 남겨주세요.">부재 시 전화 또는 문자 남겨주세요.</option>
          </select>
        </div>
        <div className="save-shipping">
          <input type="checkbox" name="choiceMain" checked={shippingAddressModify.choiceMain} onChange={handleCheck} /><span>기본 배송지로 저장합니다.</span>
        </div>
      </div>
    </section >
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
