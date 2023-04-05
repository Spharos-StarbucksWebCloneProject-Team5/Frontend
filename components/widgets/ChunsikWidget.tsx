import React, { useEffect, useState } from "react";
import { productListCardType } from "@/types/product/fetchDataType";
import ColProductListCard from "../ui/ColProductListCard";
import { eventType } from "@/types/main/eventDataType";
import axios from "axios";
import Config from "@/configs/config.export";

export default function ChunsikWidget(props: { data: eventType }) {
  const [chunsikItemList, setChunsikItemList] =
    useState<productListCardType[]>();

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios(`${baseUrl}/v1/api/event-products/${props.data.eventId}`).then(
      (res) => {
        setChunsikItemList(res.data);
      }
    );
  }, []);

  return (
    <section className="chunsik">
      <div className="recommand-md-products">
        <h2>{props.data.name}</h2>
        {chunsikItemList &&
          chunsikItemList.map((item) => (
            <ColProductListCard key={item.id} productId={item.id} />
          ))}
      </div>
    </section>
  );
}
