import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'

import axios from 'axios';

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton'
import { useCookies } from 'react-cookie';
import { ShippingAddressReq } from '@/types/shippingAddress/shipAddressDataType';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function ShippingAddressChange() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;
  const [cookies] = useCookies(["id"]);

  const [defaultChecked, setDefaultChecked] = useState<boolean>(false);
  const [checkValue, setIsChecked] = useState<string>();
  const [allShippingAddress, setAllShippingAddress] = useState<ShippingAddressReq[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.value);
    setDefaultChecked(e.target.defaultChecked);
  }

  const handleShippingAddressChange = () => {
    Swal.fire({
      icon: "warning",
      text: `배송지를 변경하시겠습니까?`,
      cancelButtonText: "cancle",
      showCancelButton: true,
      customClass: {
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (checkValue === undefined && !defaultChecked) {
          router.push('/payment');
        } else if (checkValue !== undefined && defaultChecked) {
          router.push('/payment');
        } else {
          router.push(`/payment?shippingAddressId=${checkValue}`);
        }
      }
    });
  }

  useEffect(() => {
    console.log(checkValue);
    console.log(defaultChecked);
  }, [handleChange]);

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/shippingAddress`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }).then((res) => {
      setAllShippingAddress(res.data);
    });
    console.log(checkValue);
    console.log(defaultChecked);
  }, []);

  return (
    <>
      <section id="shipping-header">
        <p>배송지 선택</p>
        <Link href="/shippingAddressRegister">
          <span>+ 새 배송지 추가</span>
        </Link>
      </section>
      {
        allShippingAddress && allShippingAddress.map((item, idx) => (
          <section id="shipping-list" key={idx}>
            <input type="radio" name="shipping-select" value={item.id} defaultChecked={item.choiceMain} onChange={handleChange} />
            <div className="shipping-info" >
              <div className="shipping-name" >
                <div className="name">
                  {item.receiver} ({item.nickname})
                </div>
                {
                  item.choiceMain === true ?
                    <div className="is-primary">기본</div> : null
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
            </div>
            <Link href={`/shippingAddressModify/${item.id}`}>수정</Link>
          </section>
        ))
      }
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
