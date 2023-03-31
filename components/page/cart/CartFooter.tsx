import { paymentState } from "@/state/atom/paymentState";
import {
  allCartType,
  buyType,
  cartBuyType,
  cartListType,
} from "@/types/cart/cartDataType";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function CartFooter(props: {
  count: number;
  totalPrice: number;
  checked: number[];
  allItems: allCartType;
}) {
  const { push } = useRouter();
  const [buyData, setBuyData] = useRecoilState<buyType>(paymentState);
  const [cartData, setCartData] = useState<cartBuyType>();

  // const buyNow = () => {
  //   //바로 구매
  //   const query = props.checked.map((element) => "id=" + element + "&");
  //   push(`/payment`);
  //   console.log(query);
  // };

  //props.allItems.allCartList.filter(item=>item.cartId === props.checked.map(item1))
  props.checked.map((item) => {
    let result = props.allItems.allCartList.filter(
      (item1) => item === item1.cartId
    );

    // result.map((item2) =>
    //       setCartData({...cartData,
    //       buyList: { productId: item2.productId,
    //             productCount: item2.count,
    //             productName: item2.productName,
    //             price: item2.productPrice,
    //             thumbnail: item2.productThumbnail}
    //       })
    // );
    // result.map((item2) =>
    //       setCartData({...cartData,
    //       buyList: { productId: item2.productId,
    //             productCount: item2.count,
    //             productName: item2.productName,
    //             price: item2.productPrice,
    //             thumbnail: item2.productThumbnail}
    //       })
    // );
  });

  // .map((item2) =>
  //   setCartData({
  //     ...cartData,
  //     productId: item2.productId,
  //     productCount: item2.count,
  //     productName: item2.productName,
  //     price: item2.productPrice,
  //     thumbnail: item2.productThumbnail,
  //   })
  // );
  //console.log(`카트리스트${result.map((item) => item.cartId)}`);

  console.log(
    `카트리스트${props.allItems.allCartList.map((item) => item.cartId)}`
  );

  return (
    <div className="cart-footer">
      <div className="cart-submit-container cart-footer-padding">
        <div className="cart-total">
          <p>
            총 <span id="cart-select-amount">{props.count}</span>건 / 20건
          </p>
          <p id="cart-footer-total-price">
            {props.totalPrice.toLocaleString("en")}원
          </p>
        </div>
        <div className="cart-btn-order">
          <button>선물하기</button>
          <button
            onClick={() => {
              cartData?.buyList.map((item) => {
                setBuyData({
                  productId: item.productId,
                  productCount: item.productCount,
                  productName: item.productName,
                  price: item.price,
                  thumbnail: item.thumbnail,
                });
              });
              push(`/payment`);
            }}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
