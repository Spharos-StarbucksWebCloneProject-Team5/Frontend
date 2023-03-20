import React, { useEffect, useState } from "react";
import ProductListCard from "../ui/ProductListCard";
import { eventProductListType } from "@/types/fetchDataType";
import { eventType } from "@/types/main/eventDataType";
import Config from "@/configs/config.export";

export default function RecommandWidget(props: {
  data: eventType
}) {
  const [eventItemList, setEventItemList] = useState<eventProductListType[]>();

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    fetch(`/v1/api/event-products/${props.data.id}`)
      .then((res) => res.json())
      .then((data) => setEventItemList(data));
  }, []);

  return (
    <section id="recommand-md-1">
      <div className="recommand-md-products">
        <h2>{props.data.name}</h2>
        <div className="recommand-product-list">
          {eventItemList &&
            eventItemList.map((item) => (
              <ProductListCard key={item.id} productId={item.productId} />
            ))}
        </div>
      </div>
    </section>
  );
}
