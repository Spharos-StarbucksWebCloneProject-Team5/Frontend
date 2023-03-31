import Config from "@/configs/config.export";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { countState } from "@/state/atom/cartState";
import { cartListType } from "@/types/cart/cartDataType";
import cart from "@/pages/cart";
import CloseButton from "./CloseButton";

export default function ModifyCountModal(props: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartId: number;
}) {
  const baseUrl = Config().baseUrl;

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
  const [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    axios.get(`${baseUrl}/v1/api/carts/${props.cartId}`).then((res) => {
      setCartData(res.data);
      setCount(res.data.count);
      console.log(res.data);
    });
  }, []);

  const countAdd = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    setCount(count - 1);
  };

  let price = cartData?.productPrice;
  let totalPrice = count * price;

  return (
    <>
      <header id="store-head">
        <div className="store-header-top">
          <div className="menu-icon"></div>
          <h1>
            <a href="">주문 수정</a>
          </h1>
          <CloseButton />
        </div>
      </header>
      <section id="item-change">
        <img src={cartData.productThumbnail} alt="" />
        <div>
          <p>{cartData.productName}</p>
          <p>{cartData.productPrice.toLocaleString("en")}원</p>
        </div>
      </section>
      <section id="change-quantity">
        <div>
          <p>상품 주문 수량</p>
          <div className="change">
            <div className="quantity">
              <img
                src="./assets/images/icons/minus.png"
                alt=""
                onClick={countMinus}
              />
              <div>{count}</div>
              <img
                src="./assets/images/icons/add.png"
                alt=""
                onClick={countAdd}
              />
            </div>
            <p>{totalPrice.toLocaleString("en")}원</p>
          </div>
        </div>
      </section>
      <section className="submit-container">
        <div className="submit-box">
          <div className="change-final">
            <p>주문금액</p>
            <p className="price">
              합계 <span>{totalPrice.toLocaleString("en")}원</span>
            </p>
          </div>
          <div className="buttons">
            <button>취소</button>
            <button>확인</button>
          </div>
        </div>
      </section>
    </>
  );
}
