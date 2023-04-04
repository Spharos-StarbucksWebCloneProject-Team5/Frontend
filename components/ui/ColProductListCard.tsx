import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import axios from "axios";

import { productListCardType } from "@/types/product/fetchDataType";
import Config from "@/configs/config.export";

export default function ColProductListCard(props: { productId: number }) {
  const { baseUrl } = Config();
  const { push } = useRouter();

  const [data, setData] = useState<productListCardType>();

  const handleLink = () => {
    push(`/products/${data?.id}`);
  }

  useEffect(() => {
    axios(`${baseUrl}/v1/api/products/${props.productId}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <>
      {data && (
        <div className="chunsik-item" onClick={handleLink}>
          <Image
            src={data.thumbnail}
            alt={data.description}
            width={100}
            height={100}
            priority
          />
          <div className="chunsik-item-info">
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
