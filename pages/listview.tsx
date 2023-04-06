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
    setProductData([]);
    console.log(router.query);
    let url = "";
    if (router.query.category && !router.query.subCategory) {
      url = `category=${router.query.category}`;
      
    } else if (router.query.category && router.query.subCategory) {
      if (router.query.subCategory.length <= 1) {
        //길이가 1
        url = `category=${router.query.category}&subCategory=${router.query.subCategory}`;
        
      } else {
        console.log("서브카테고리 내용", router.query.subCategory);
        if(Array.isArray(router.query.subCategory)){
           console.log("서브카테고리 내용", router.query.subCategory)
           router.query.subCategory.map((item) => {
            fetchMoreData(router.query.category as string,item as string)
          });
          return;
        }
      }
    } else {
      url = ``;
    }
    // setQueryUrl(url);

    //console.log(`${baseUrl}/v1/api/categories/?${url}&pageNum=0`)

    axios(`${baseUrl}/v1/api/categories/?${url}&pageNum=0`).then((res) => {
      console.log(res.data);
      setPageData(res.data);
      setProductData(res.data.content);
    });
  }, [router.query]);

  const fetchData = () => {
    console.log(router.asPath)
    axios(`${baseUrl}/v1/api/categories/?${queryUrl}&pageNum=${page + 1}`).then(
      (res) => {
        setPageData(res.data);
        setProductData([...productData, ...res.data.content]);
      }
    );
    setPage(page + 1);
  };

  const fetchMoreData = async (categoryId:string ,subCategoryId:string) => {
    const data = await axios(`${baseUrl}/v1/api/categories/?category=${categoryId}&subCategory=${subCategoryId}&pageNum=0`)
    console.log('array list get',data.data);
    setProductData([...productData, ...data.data.content]);
  }

  return (
    <section>
      <div className="sort-box-listview">
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
              productData.map((item: productAllType, idx:number) => (
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
