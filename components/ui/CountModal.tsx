import Config from "@/configs/config.export";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { countModalState, countState } from "@/state/atom/cartState";
import { cartListType } from "@/types/cart/cartDataType";
import cart from "@/pages/cart";
import CloseButton from "./CloseButton";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function ModifyCountModal(props: {
  //setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartId: number;
}) {
  const baseUrl = Config().baseUrl;
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
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
    axios.get(`${baseUrl}/v1/api/carts/${props.cartId}`,{
      headers: {
        Authorization: `Bearer ${cookies.id}`,
      },
    }).then((res) => {
      setCartData(res.data);
      setCount(res.data.count);
      console.log(res.data);
    });
  }, []);

  const modifyCount = ()=>{

    //useEffect(() => {
      axios.patch(`${baseUrl}/v1/api/carts/update/${props.cartId}`,
        {
           "count": count,
        },{
        headers: {
          Authorization: `Bearer ${cookies.id}`,
        },}
      ).then((res) => {
        setCartData(res.data);
        setCount(res.data.count);
        console.log(res.data);
      });
    //});
    //props.setModalOpen(false)
    location.reload();
    setModalOpen(false)

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
  <div className="countModifyModal">
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
            <img src="./assets/images/icons/minus.png" alt=""onClick={countMinus} />
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
          <button onClick={()=> setModalOpen(false)}>취소</button>
          <button onClick={modifyCount}>확인</button>
        </div>
      </div>
    </section>
    </div>
  )
}
