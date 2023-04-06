import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import axios from "axios";

import Config from "@/configs/config.export";
import { ShippingAddressRes } from "@/types/shippingAddress/shipAddressDataType";
import { useRecoilState } from "recoil";
import { shippingState } from "@/state/atom/shippingState";

export default function ShippingInfo() {
  const router = useRouter();
  const [cookies] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;

  const [isPrimaryShippingAddress, setIsPrimaryShippingAddress] = useState<ShippingAddressRes>({
    id: 0,
    receiver: "",
    nickname:"",
    choiceMain: false,
    zipCode:0,
    address: "",
    detailAddress: "",
    shippingPhone1: "",
    shippingPhone2: "",
    shippingMemo: ""})
  const [isShippingId, setIsShippingId] = useRecoilState(shippingState);

  const handleButton = () => {
    router.push("/shippingAddressRegister")
  }

  const handleShippingAddressChange = () => {

    router.push("/shippingAddressChange")
  }

  useEffect(() => {
    if (router.query.shippingAddressId === undefined) {
      axios.get(`${baseUrl}/v1/api/shippingAddress/main`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      }).then((res) => {
        setIsPrimaryShippingAddress(res.data);
      });
    } else {
      axios.get(`${baseUrl}/v1/api/shippingAddress/${router.query.shippingAddressId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },
      }).then((res) => {
        setIsPrimaryShippingAddress(res.data);
      });
    }
  }, []);

  useEffect(() => {
    setIsShippingId(isPrimaryShippingAddress.id)
  }, [isPrimaryShippingAddress]);
  return (
    <section className="padding-lr-20">
      <div id="payment">
        <p>결제하기</p>
      </div>
      {isPrimaryShippingAddress &&
        isPrimaryShippingAddress.id !== 0 ?
        <div className="payment-box-shipping-info">
          <div className="box-shipping-info">
            <div className="payment-title">
              <p>배송 정보</p>
            </div>
            <div id="btn-update">
              <button onClick={handleShippingAddressChange}>변경</button>
            </div>
          </div>
          <div className="shipping-address">
            <p>{isPrimaryShippingAddress.receiver} ({isPrimaryShippingAddress.nickname})</p>
            <p>({isPrimaryShippingAddress.zipCode}) {isPrimaryShippingAddress.address}</p>
            <p>{isPrimaryShippingAddress.detailAddress}</p>
            <p>{isPrimaryShippingAddress.shippingPhone1}</p>
          </div>
        </div>
        :
        <>
          <div className="none-shipping-info">
            <p>배송 정보</p>
          </div>
          <div className="shipping-info-text">
            <p>등록된 배송지가 없습니다.</p>
            <p>배송지를 등록해주세요.</p>
          </div>
          <div className="shipping-info-button">
            <button onClick={handleButton}>배송지 등록</button>
          </div>
        </>
      }
    </section>
  );
}