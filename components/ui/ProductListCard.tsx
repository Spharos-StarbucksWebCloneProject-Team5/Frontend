import Link from "next/link";
import React from "react";
import { productListCardType } from "@/types/product/fetchDataType";

export default function ProductListCard(props: { data: productListCardType }) {

  return (
    <>
      {props.data && (
        <div className="recommand-product-item">
          <div className="recommand-product-item__img">
            <Link href={`/product/${props.data.id}`}>
              <img src={props.data.thumbnail} alt={props.data.description} />
            </Link>
          </div>
          <div className="recommand-product-item__info">
            {props.data.isNew ? <p className="item-new">New</p> : null}
            <p className="item-title">{props.data.name}</p>
            <p className="item-price">
              <span>{props.data.price.toLocaleString()}</span>원
            </p>
          </div>
        </div>
      )}
    </>
  );
}
