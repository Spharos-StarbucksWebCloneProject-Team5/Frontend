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

  const [pageData, setPageData] = useState<number>(0);
  const [productData, setProductData] = useState<productAllType[]>([]);
  const [page, setPage] = useState(0);
  const [queryUrl, setQueryUrl] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const router = useRouter();

  //Category.tsx에서 push 받은 쿼리로 url 만들고 상품 필터
  useEffect(() => {
    setProductData([]);
    console.log(router.query);
    let url = "";
    if (router.query.category && !router.query.subCategory) {
      url = `category=${router.query.category}`;
      setPage(0)

    } else if (router.query.category && router.query.subCategory) {
      if (router.query.subCategory.length <= 1) {
        //길이가 1
        setPage(0)
        url = `category=${router.query.category}&subCategory=${router.query.subCategory}`;

      } else {
        setPage(0)
        if (Array.isArray(router.query.subCategory)) {
          setProductData([])
          router.query.subCategory.map((item) => {
            fetchMoreData(router.query.category as string, item as string)
          });
          return;
        }
      }
    } else {
      url = ``;
    }

    axios(`${baseUrl}/v1/api/categories/?${url}&pageNum=0`).then((res) => {
      console.log(res.data);
      setProductData(res.data.content);
      setPageData(res.data.content.totalPage);
    });
  }, [router.query]);

  const fetchData = () => {
    let url = "";
    if (router.query.category && !router.query.subCategory) {
      url = `category=${router.query.category}`;

    } else if (router.query.category && router.query.subCategory) {
      if (router.query.subCategory.length <= 1) {
        //길이가 1
        url = `category=${router.query.category}&subCategory=${router.query.subCategory}`;

      } else {
        let newPage = page + 1;
        if (Array.isArray(router.query.subCategory)) {
          router.query.subCategory.map((item) => {
            fetchMoreDataPage(router.query.category as string, item as string, newPage)
          });
          setPage(newPage)
          return;
        }
      }
    } else {
      url = ``;
    }

    axios(`${baseUrl}/v1/api/categories/?${url}&pageNum=${page + 1}`).then(
      (res) => {
        setProductData([...productData, ...res.data.content]);
        setPageData(res.data.content.totalPage);
      }
    );
    setPage(page + 1);
  };

  const fetchMoreData = async (categoryId: string, subCategoryId: string) => {
    const data = await axios(`${baseUrl}/v1/api/categories/?category=${categoryId}&subCategory=${subCategoryId}&pageNum=${page}`)
    setProductData([...productData, ...data.data.content]);
  }

  const fetchMoreDataPage = async (categoryId: string, subCategoryId: string, page: number) => {
    const data = await axios(`${baseUrl}/v1/api/categories/?category=${categoryId}&subCategory=${subCategoryId}&pageNum=${page}`)
    setProductData([...productData, ...data.data.content]);
  }

  console.log(router.query.category)

  return (
    <section>
      {
        router.query.category === "1" || 
        router.query.category === "2" || 
        router.query.category === "3" ?
        <div className="sort-box-listview change-margin">
          {/* <select name="sort" className="sort">
          <option value="">신상품순</option>
          <option value="">추천순</option>
          <option value="">낮은가격순</option>
          <option value="">높은가격순</option>
        </select> */}
        </div>
        : <div className="sort-box-listview">
      </div>
      }
      <InfiniteScroll
        dataLength={productData.length}
        next={fetchData}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        hasMore={page > pageData ? false : true}
        loader={<h4></h4>}
      >
        <div className="product-list">
          <div className="event-product-list">
            {productData &&
              productData.map((item: productAllType, idx: number) => (
                <ProductListCard
                  key={idx}
                  productId={item.productId}
                />
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </section>
  );
}
