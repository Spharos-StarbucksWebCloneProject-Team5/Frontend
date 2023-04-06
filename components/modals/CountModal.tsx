import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";

import axios from "axios";

import Config from "@/configs/config.export";
import { countModalState } from "@/state/atom/cartState";
import { cartListType } from "@/types/cart/cartDataType";

import ModalCloseButton from "../ui/ModalCloseButton";

export default function ModifyCountModal(props: {
  cartId: number;
}) {
  const baseUrl = Config().baseUrl;
  const router = useRouter()
  const [cookies] = useCookies(["id"]);
  const [modalOpen, setModalOpen] = useRecoilState(countModalState);
  const [cartData, setCartData] = useState<cartListType>({
    cartId: 0,
    productId: 0,
    productName: "",
    productPrice: 0,
    productThumbnail: "",
    count: 0,
    mainCategoryId: 0,
    checked: false,
  });

  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/carts/${props.cartId}`, {
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }).then((res) => {
      setCartData(res.data);
      setCount(res.data.count);
      console.log(res.data);
    });
  }, []);

  const modifyCount = () => {

    axios.patch(`${baseUrl}/v1/api/carts/update/${props.cartId}`,
      {
        "count": count,
      }, {
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }
    ).then((res) => {
      setCartData(res.data);
      setCount(res.data.count);
      console.log(res.data);
    });
    router.reload();
    setModalOpen(false);
  }

  const countAdd = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    setCount(count - 1);
  };

  let price = cartData.productPrice;
  let totalPrice = count * price;

  return (
    <>
      <div className="countModifyModal">
      <div className="count-modal-header">
        <div className="menu-icon">
        </div>
        <div className='count-modal-header-name'>
          <p>주문 수정</p>
        </div>
        <nav>
          <ul>
            <ModalCloseButton
              setModalOpen={setModalOpen}
            />
          </ul>
        </nav>
      </div>
        <div className="advertising-info box-cart cart-quantity-margin-top">
          <div className="box-cart-product cart-quantity-padding-left">
            <div className="cart-product-info">
              <img className="img-cart-product" src={cartData.productThumbnail} alt="product" />
              <div className="cart-product-info-text">
                <p>{cartData.productName}</p>
                <p className="price-bold">{cartData.productPrice.toLocaleString("en")}원</p>
              </div>
            </div>
          </div>
        </div>
        <div className="quantity-box-cart-product">
          <div className="gray-box-line"></div>
        </div>
        <div className="box-cart-product quantity-box-padding">
          <div className="cart-product-quantity">
            <p>
              상품 주문 수량
            </p>
            <div className="change">
              <div className="quantity">
                <img src="./assets/images/icons/minus.png" alt="" onClick={countMinus} />
                <div>{count}</div>
                <img src="./assets/images/icons/add.png" alt="" onClick={countAdd} />
              </div>
              <p>{totalPrice.toLocaleString("en")}원</p>
            </div>
          </div>
        </div>
        <section className="quantity-submit-container">
          <div className="submit-box">
            <div className="change-final">
              <p>주문금액</p>
              <p className="price">합계 <span>{totalPrice.toLocaleString("en")}원</span></p>
            </div>
            <div className="buttons">
              <button onClick={() =>{setModalOpen(false); document.body.style.overflow = "unset";} }>취소</button>
              <button onClick={modifyCount}>확인</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
