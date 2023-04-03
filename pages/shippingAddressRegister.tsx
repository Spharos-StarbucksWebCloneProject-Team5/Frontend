import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ShippingAddressModifyReq } from '@/types/shippingAddress/shipAddressDataType';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function ShippingAddressInfo() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  console.log(cookies)

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

  const handleShippingAddressAdd = () => {
    axios.post(`${baseUrl}/v1/api/shippingAddress`, {
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
      nickname: shippingAddressModify.nickname,
      receiver: shippingAddressModify.receiver,
      zipCode: shippingAddressModify.zipCode,
      address: shippingAddressModify.address,
      detailAddress: shippingAddressModify.detailAddress,
      shippingPhone1: shippingAddressModify.shippingPhone1,
      shippingPhone2: shippingAddressModify.shippingPhone2,
      shippingMemo: shippingAddressModify.shippingMemo,
      choiceMain: shippingAddressModify.choiceMain,
    }).then((res) => {
      Swal.fire({
        icon: "success",
        text: `배송지가 등록되었습니다.`,
        customClass: {
          confirmButton: "swal-confirm-button",
        },
      });
      router.back();
    });
  }

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

  useEffect(() => {
    console.log(shippingAddressModify);
  }, [shippingAddressModify]);

  return (
    <>
      <section id="shipping-header">
        <div>배송지 정보</div>
      </section>
      <section id="shipping-input">
        <div>
          <input type="text" name="nickname" placeholder="주소 별칭" onChange={handleChange} />
          <input type="text" name="receiver" placeholder="받는 분 *" onChange={handleChange} />
          <div className="post-number">
            <input type="text" name="zipCode" placeholder="우편번호 *" onChange={handleChange} />
            <Link href="">
              <div className="search-address">
                주소검색
              </div>
            </Link>
          </div>
          <input type="text" name="address" placeholder="기본주소 *" onChange={handleChange} />
          <input type="text" name="detailAddress" placeholder="상세주소 *" onChange={handleChange} />
          <input type="text" name="shippingPhone1" placeholder="연락처1 *" onChange={handleChange} />
          <input type="text" name="shippingPhone2" placeholder="연락처2" onChange={handleChange} />
          <div className="shipping-memo">
            <p>배송 메모</p>
            <select name="shippingMemo" onChange={handleSelect}>
              <option value="배송 메모를 선택해 주세요.">배송 메모를 선택해 주세요.</option>
              <option value="배송 전 연락 바랍니다.">배송 전 연락 바랍니다.</option>
              <option value="부재 시 경비실에 맡겨주세요.">부재 시 경비실에 맡겨주세요.</option>
              <option value="부재 시 문 앞에 놓아주세요.">부재 시 문 앞에 놓아주세요.</option>
              <option value="부재 시 전화 또는 문자 남겨주세요.">부재 시 전화 또는 문자 남겨주세요.</option>
            </select>
          </div>
          <div className="save-shipping">
            <input type="checkbox" name="choiceMain" onChange={handleCheck} /><span>기본 배송지로 저장합니다.</span>
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
