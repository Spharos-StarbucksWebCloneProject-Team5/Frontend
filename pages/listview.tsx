import ProductListCard from "@/components/ui/ProductListCard";
import { productListCardType } from "@/types/product/fetchDataType";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "@/configs/config.export";
import Product from "./products/[productId]";

export default function ProductListView() {
  const baseUrl = Config().baseUrl;

  const [productData, setProductData] = useState<productListCardType[]>();

  useEffect(() => {
    axios(`${baseUrl}/v1/api/products/?pageNum=0`).then((res) =>
      setProductData(res.data)
    );
  }, []);

  return (
    <section>
      <div className="sort-box">
        <select name="sort" className="sort">
          <option value="">신상품순</option>
          <option value="">추천순</option>
          <option value="">낮은가격순</option>
          <option value="">높은가격순</option>
        </select>
      </div>
      <div className="product-list">
        <div className="event-product-list">
          {productData &&
            productData.map((item) => (
              <ProductListCard key={item.id} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
