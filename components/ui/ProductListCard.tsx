import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { getImageSize } from "react-image-size";

import { productListCardType } from "@/types/product/fetchDataType";
import axios from "axios";
import Config from "@/configs/config.export";

export default function ProductListCard(props: { productId: number }) {
  const { baseUrl } = Config();
  const [data, setData] = useState<productListCardType>();
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    axios(`${baseUrl}/v1/api/products/${props.productId}`)
      .then((res) => {
        getImageSize(res.data.thumbnail).then((res) => {
          setSize(res);
        });
        setData(res.data);
      });
  }, []);

  return (
    <>
      {data && (
        <div key={data.id} className="recommand-product-item">
          <div className="recommand-product-item__img">
            <Link href={`/products/${data.id}`}>
              <Image
                src={data.thumbnail}
                alt={data.description}
                width={160}
                height={160}
                priority
              />
            </Link>
          </div>
          <div className="recommand-product-item__info">
            {data.isNew ? <p className="item-new">New</p> : null}
            <p className="item-title">{data.name}</p>
            <p className="item-price">
              <span>{data.price.toLocaleString()}</span>원
            </p>
          </div>
        </div>
      )}
    </>
  );
}
