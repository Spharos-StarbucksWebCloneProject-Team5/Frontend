import React, { useEffect, useState } from "react";
import ProductListCard from "../ui/ProductListCard";
import { eventProductListType, productListCardType } from "@/types/product/fetchDataType";
import { eventType } from "@/types/main/eventDataType";
import Config from "@/configs/config.export";
import axios from 'axios'

export default function RecommandWidget(props: { data: eventType }) {

  const [eventItemList, setEventItemList] = useState<productListCardType[]>();

  const baseUrl = Config().baseUrl;

  console.log(props.data.eventId)
  useEffect(() => {
    axios(`${baseUrl}/v1/api/event-products/${props.data.eventId}`)
      .then(res => {
        console.log(res.data)
        setEventItemList(res.data)
      })
  }, []);

  return (
    <section id="recommand-md-1">
      <div className="recommand-md-products">
        <h2>{props.data.name}</h2>
        <div className="recommand-product-list">
          {eventItemList &&
            eventItemList.map((item) => (
              <ProductListCard key={item.id} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
