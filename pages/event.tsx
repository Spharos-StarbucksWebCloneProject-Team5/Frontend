import ProductListCard from '@/components/ui/ProductListCard'
import Config from '@/configs/config.export';
import { productListCardType } from '@/types/product/fetchDataType';
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Event() {
  const [eventItemList, setEventItemList] = useState<productListCardType[]>();

  const router = useRouter()
  const baseUrl = Config().baseUrl;

  useEffect(() => {
    if (!router.isReady) return;
    axios(`${baseUrl}/v1/api/event-products/${router.query.category}`)
      .then(res => {
        console.log(res.data)
        setEventItemList(res.data)
      })
  }, [router.query.category]);

  return (
    <>
      <Head>
        <title>Event</title>
      </Head>
      <section>
        <div className="event-image">
          <img src="assets/images/event/event1.jpg" width="100%" height="100%" alt="이벤트" />
        </div>
        <div>
          <div className="event-product-list">
            {
              eventItemList &&
              eventItemList.map((item) => (
                <ProductListCard key={item.productId} data={item} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
