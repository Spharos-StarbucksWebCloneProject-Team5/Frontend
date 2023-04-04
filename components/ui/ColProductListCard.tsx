import React, { useEffect, useState } from "react";
import { productListCardType } from "@/types/product/fetchDataType";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Config from "@/configs/config.export";
import { useRouter } from "next/router";

export default function ColProductListCard(props: { productId: number }) {
  const { baseUrl } = Config();
  const { push } = useRouter();

  const [data, setData] = useState<productListCardType>({
    id: 0,
    description: "",
    name: "",
    price: 0,
    thumbnail: "",
    isNew: false,
  });

  const handleLink = () => {
    push(`/products/${data.id}`);
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
