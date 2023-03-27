import React, { useEffect, useState } from "react";
import ProductListCard from "../ui/ProductListCard";
import { productListCardType } from "@/types/product/fetchDataType";
import { eventType } from "@/types/main/eventDataType";
import Config from "@/configs/config.export";
import axios from "axios";

export default function RecommandWidget(props: { data: eventType }) {
  const [eventItemList, setEventItemList] = useState<productListCardType[]>();

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios(`${baseUrl}/v1/api/event-products/${props.data.eventId}`).then(
      (res) => {
        setEventItemList(res.data);
      }
    );
  }, []);

  return (
    <section id="recommand-md-1">
      <div className="recommand-md-products">
        <h2>{props.data.name}</h2>
        <div className="recommand-product-list">
          {eventItemList &&
            eventItemList.map((item) => (
              <ProductListCard key={item.id} productId={item.id} />
            ))}
        </div>
      </div>
    </section>
  );
}
