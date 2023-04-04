import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';

import axios from 'axios';

import Config from '@/configs/config.export';
import StButton from '@/components/ui/StButton';

import { ShippingAddressReq } from '@/types/shippingAddress/shipAddressDataType';
import Swal from 'sweetalert2';
import { useRecoilValue } from 'recoil';
import { userLoginState } from '@/state/atom/userLoginState';

export default function ShippingAddress() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;

  const { isLogin } = useRecoilValue(userLoginState);
  const [cookies] = useCookies(["id"]);

  const [allShippingAddress, setAllShippingAddress] = useState<ShippingAddressReq[]>([]);

  const handleShippingAdd = () => {
    router.push("/shippingAddressRegister")
  }

  const handleShippingDelete = (shippingAddressId: number) => {
    Swal.fire({
      icon: "warning",
      text: `배송지를 삭제하시겠습니까?`,
      cancelButtonText: "cancle",
      showCancelButton: true,
      customClass: {
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${baseUrl}/v1/api/shippingAddress/${shippingAddressId}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        })
        Swal.fire({
          icon: "success",
          text: `배송지가 삭제되었습니다.`,
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        }).then((result) => {
          router.reload();
        });
      }
    });
  }

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/shippingAddress`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }).then((res) => {
      setAllShippingAddress(res.data);
    });
  }, []);

  return (
    <>
      <section id="shipping-header">
        <p>배송지 관리</p>
      </section>
      <div className='shipping-address-section-box'>
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
                      <div onClick={() => handleShippingDelete(item.id)}>삭제</div>
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
      </div>
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