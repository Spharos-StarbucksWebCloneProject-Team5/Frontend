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

  return <></>;
}
