import ProductListCard from "@/components/ui/ProductListCard";
import Config from "@/configs/config.export";
import { eventImageType } from "@/types/main/eventDataType";
import { productListCardType } from "@/types/product/fetchDataType";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";

export default function Event() {
  const [eventItemList, setEventItemList] = useState<productListCardType[]>();
  const [imageData, setImageData] = useState<eventImageType>();
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const router = useRouter();
  const baseUrl = Config().baseUrl;

  useEffect(() => {
    if (!router.isReady) return;
    axios(`${baseUrl}/v1/api/event-images/${router.query.category}`)
      .then((res) => {
        getImageSize(res.data.image).then((res) => {
          setSize(res);
        });
        setImageData(res.data);
      });
  }, [router.query.category]);

  useEffect(() => {
    if (!router.isReady) return;
    axios(`${baseUrl}/v1/api/event-products/${router.query.category}`)
      .then((res) => {
        setEventItemList(res.data);
      });
  }, [router.query.category]);

  return (
    <>
      <Head>
        <title>Event</title>
      </Head>
      <section>
        <div className="event-image">
          {
            imageData && (
              <Image
                src={imageData.image}
                alt={imageData.description}
                width={390}
                height={size.height}
              />
            )
          }
        </div>
        <div>
          <div className="event-product-list">
            {eventItemList &&
              eventItemList.map((item) => (
                <ProductListCard key={item.id} productId={item.id} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
