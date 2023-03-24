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
        console.log(res.data);
        setChunsikItemList(res.data);
      }
    );
  }, []);

  return (
    <section className="chunsik">
      <div className="recommand-md-products">
        <h2>{props.data.description}</h2>
        {chunsikItemList &&
          chunsikItemList.map((item: productListCardType) => (
            <ColProductListCard key={item.id} data={item} />
          ))}
      </div>
    </section>
  );
}
