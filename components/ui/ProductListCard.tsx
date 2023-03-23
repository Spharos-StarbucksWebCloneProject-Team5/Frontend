import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { getImageSize } from "react-image-size";

import { productListCardType } from "@/types/product/fetchDataType";

export default function ProductListCard(props: { data: productListCardType }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    console.log(getImageSize);
    getImageSize(props.data.thumbnail).then((res) => {
      setSize(res);
    });
  }, []);

  return (
    <>
      {props.data && (
        <div key={props.data.id} className="recommand-product-item">
          <div className="recommand-product-item__img">
            <Link href={`/products/${props.data.id}`}>
              <Image
                src={props.data.thumbnail}
                alt={props.data.description}
                width={size.width}
                height={size.height}
              />
            </Link>
          </div>
          <div className="recommand-product-item__info">
            {props.data.isNew ? <p className="item-new">New</p> : null}
            <p className="item-title">{props.data.name}</p>
            <p className="item-price">
              <span>{props.data.price}</span>원
            </p>
          </div>
        </div>
      )}
    </>
  );
}
