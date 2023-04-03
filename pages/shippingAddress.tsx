import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';

import axios from 'axios';

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton';

import { ShippingAddressReq } from '@/types/shippingAddress/shipAddressDataType';

export default function ShippingAddress() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  const [allShippingAddress, setAllShippingAddress] = useState<ShippingAddressReq[]>([]);

  const handleShippingAdd = () => {
    router.push("/shippingAddressRegister")
  }

  const handleShippingDelete = () => {
    // axios.delete(`${baseUrl}/v1/api/shippingAddress/${id}`, {
    //   headers: {
    //     Authorization: `Bearer ${cookies.id}`,
    //   },
    // }).then((res) => {
    // });
  }

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/shippingAddress`, {
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }).then((res) => {
      console.log(res.data)
      setAllShippingAddress(res.data);
    });
  }, []);

  return (
    <>
      <section id="shipping-header">
        <p>배송지 관리</p>
      </section>
      {
        allShippingAddress && allShippingAddress.map((item, idx) => (
          <section id="shipping-manage-list" key={idx}>
            <div className="shipping-manage">
              <div className="shipping-info">
                <div className="shipping-name">
                  <div className="name">
                    {item.receiver} ({item.nickname})
                  </div>
                  {
                    item.choiceMain === true ?
                      <div className="is-primary">기본</div> : null
                  }
                </div>
              </div>
              <Link href={`/shippingAddressModify/${item.id}`}>수정</Link>
              {
                item.choiceMain !== true ?
                  <>
                    <div>|</div>
                    <div onClick={handleShippingDelete}>삭제</div>
                  </>
                  : null
              }
            </div>
            <p>({item.zipCode}) {item.address}</p>
            <p>{item.detailAddress}</p>
            <p>{item.shippingPhone1}</p>
            {
              item.shippingPhone2 && item.shippingPhone2 !== "" ?
                <p>{item.shippingPhone2}</p> : null
            }
            <p>{item.shippingMemo}</p>
          </section>
        ))
      }
      {/* <section id="shipping-manage-list">
        <div className="shipping-manage">
          <div className="shipping-info">
            <div className="shipping-name">
              <div className="name">죠르디</div>
            </div>
          </div>
          <Link href="/shippingAddressModify">수정</Link>
          <div>|</div>
          <div onClick={handleShippingDelete}>삭제</div>
        </div>
        <p>(48950) 부산광역시 중구 용두산길 35-7(광복동2가) 용두산공원</p>
        <p>상세주소</p>
        <p>010-1234-5678</p>
        <p>배송 전 연락 바랍니다.</p>
      </section>
      <section id="shipping-manage-list">
        <div className="shipping-manage">
          <div className="shipping-info">
            <div className="shipping-name">
              <div className="name">어피치(회사)</div>
            </div>
          </div>
          <Link href="/shippingAddressModify">수정</Link>
          <div>|</div>
          <div onClick={handleShippingDelete}>삭제</div>
        </div>
        <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
        <p>상세주소</p>
        <p>010-1234-5678</p>
        <p>부재시 문 앞에 놓아주세요.</p>
      </section> */}
      <section className="submit-container">
        <StButton
          buttonText="+ 새 배송지 추가"
          textSize="1.0rem"
          handler={handleShippingAdd}
        />
      </section>
    </>
  )
}