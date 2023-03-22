import ProductListCard from '@/components/ui/ProductListCard';
import Config from '@/configs/config.export';
import { productListCardType } from '@/types/product/fetchDataType';
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Best() {

  const [bestItemList, setBestItemList] = useState<productListCardType[]>();

  const router = useRouter()
  const baseUrl = Config().baseUrl;

  useEffect(() => {
    if (!router.isReady) return;
    axios(`${baseUrl}/v1/api/payments/best?main=${router.query.category}`)
      .then(res => {
        console.log(res.data)
        setBestItemList(res.data)
      })
  }, [router.query.category]);

  return (
    <>
      <Head>
        <title>Best</title>
      </Head>
      <section>
        <div>
          <div className="best-product-list">
            <div className="event-product-list">
              {
                bestItemList &&
                bestItemList.map((item) => (
                  <ProductListCard key={item.id} data={item} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
