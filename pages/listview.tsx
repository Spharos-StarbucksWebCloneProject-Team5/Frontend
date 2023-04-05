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
  const [queryUrl, setQueryUrl] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const router = useRouter();

  //Category.tsx에서 push 받은 쿼리로 url 만들고 상품 필터
  useEffect(() => {
    console.log(router.query);
    let url = "";
    if (router.query.category && !router.query.subCategory) {
      url = `category=${router.query.category}`;
    } else if (router.query.category && router.query.subCategory) {
      if (router.query.subCategory.length <= 1) {
        //길이가 1
        url = `category=${router.query.category}&subCategory=${router.query.subCategory}`;
      } else {
        //길이 2이상
        let myStr =  router.query.subCategory.toString().replace(",","")
        console.log("subcategory " +myStr);
        //console.log(typeof router.query.subCategory);

        // if(typeof router.query.subCategory === 'string'){
        //setSubCategory(myStr);
        var step;
        for (step = 0; step < myStr.length-1; step++) {
          let str = myStr.substring(step,step+1)
          console.log("숫자 "+str)
            //axios(`${baseUrl}/v1/api/categories/?${str}&pageNum=0`).then((res) => {
            //console.log(res.data)
            //setPageData(res.data);
            //setProductData(res.data.content);
          //});
        }
        // }

        //   axios(`${baseUrl}/v1/api/categories/?${url}&pageNum=0`).then((res) => {
        //     console.log(res.data)
        //     setPageData(res.data);
        //     setProductData(res.data.content);
        //   });

        // return;
      }
    } else {
      url = ``;
    }
    setQueryUrl(url);

    //console.log(`${baseUrl}/v1/api/categories/?${url}&pageNum=0`)

    axios(`${baseUrl}/v1/api/categories/?${url}&pageNum=0`).then((res) => {
      console.log(res.data);
      setPageData(res.data);
      setProductData(res.data.content);
    });
  }, [router.query]);

  const fetchData = () => {
    console.log(queryUrl);
    axios(`${baseUrl}/v1/api/categories/?${queryUrl}&pageNum=${page + 1}`).then(
      (res) => {
        setPageData(res.data);
        setProductData([...productData, ...res.data.content]);
      }
    );
    setPage(page + 1);
  };

  // useEffect(() => {
  //   console.log(router.query);
  //   if (router.query.categoryId !== "0") {
  //     //메인카테고리
  //     setProductData(
  //       productData.filter(
  //         (item) => item.mainCategoryId.toString() === router.query.categoryId
  //       )
  //     );
  //   }
  //   if (router.query.subCategory !== "15") {
  //     //롤케이크
  //     setProductData(
  //       productData.filter(
  //         (item) => item.mainCategoryId === 1 && item.middleCategoryId === 1
  //       )
  //     );
  //   }
  //   if (Array.isArray(router.query.subCategoryId)) {
  //     // router.query.subCategoryId.map((item) =>
  //     //   setSubCategory([...subCategory, item])
  //     // );
  //     router.query.subCategoryId.map((item) => {
  //       console.log(item);
  //       subCategory.includes(item)
  //         ? subCategory.filter((c) => c !== item)
  //         : setSubCategory([...subCategory, item]);
  //     });
  //   }
  // }, [router.query]);

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
