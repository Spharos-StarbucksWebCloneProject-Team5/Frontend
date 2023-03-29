import ProductListCard from "@/components/ui/ProductListCard";
import { pageProductType, productAllType } from "@/types/product/fetchDataType";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "@/configs/config.export";

import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

export default function ProductListView() {
  const baseUrl = Config().baseUrl;

  const [pageData, setPageData] = useState<pageProductType>();
  const [productData, setProductData] = useState<productAllType[]>([]);
  const [page, setPage] = useState(0);
  const [subCategory, setSubCategory] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    axios(`${baseUrl}/v1/api/products/?pageNum=0`).then((res) => {
      setPageData(res.data);
      setProductData(res.data.content);
    });
  }, []);

  const fetchData = () => {
    axios(`${baseUrl}/v1/api/products/?pageNum=${page + 1}`).then((res) => {
      setPageData(res.data);
      setProductData([...productData, ...res.data.content]);
    });
    setPage(page + 1);
  };

  useEffect(() => {
    console.log(router.query);
    if (router.query.categoryId !== "0") {
      //메인카테고리
      setProductData(
        productData.filter(
          (item) => item.mainCategoryId.toString() === router.query.categoryId
        )
      );
    }
    if (router.query.subCategory !== "15") {
      //롤케이크
      setProductData(
        productData.filter(
          (item) => item.mainCategoryId === 1 && item.middleCategoryId === 1
        )
      );
    }
    if (Array.isArray(router.query.subCategoryId)) {
      // router.query.subCategoryId.map((item) =>
      //   setSubCategory([...subCategory, item])
      // );
      router.query.subCategoryId.map((item) => {
        console.log(item);
        subCategory.includes(item)
          ? subCategory.filter((c) => c !== item)
          : setSubCategory([...subCategory, item]);
      });
    }
  }, [router.query]);

  console.log(subCategory);

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
      <InfiniteScroll
        dataLength={productData.length}
        next={fetchData}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        hasMore={pageData?.pageNum !== pageData?.totalPage ? true : false}
        loader={<h4></h4>}
      >
        <div className="product-list">
          <div className="event-product-list">
            {productData &&
              productData.map((item: productAllType) => (
                <ProductListCard
                  key={item.productId}
                  productId={item.productId}
                />
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </section>
  );
}
