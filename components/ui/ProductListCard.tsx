import { productListCardType } from "@/types/fetchDataType";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ProductListCard(prosps: { productId: number }) {
  const [productData, setProductData] = useState<productListCardType>();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${prosps.productId}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [prosps.productId]);

  return (
    <>
      {productData && (
        <div className="recommand-product-item">
          <div className="recommand-product-item__img">
            <Link href={`/product/${prosps.productId}`}>
              <img src={productData.imgUrl} alt={productData.title} />
            </Link>
          </div>
          <div className="recommand-product-item__info">
            {productData.isNew ? <p className="item-new">New</p> : null}
            <p className="item-title">{productData.title}</p>
            <p className="item-price">
              <span>{productData.price}</span>원
            </p>
          </div>
        </div>
      )}
    </>
  );
}
