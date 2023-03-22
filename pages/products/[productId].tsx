import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "@/configs/config.export";

import {
  productImageType,
  productListCardType,
} from "../../types/product/fetchDataType";

export default function Product() {
  const { query } = useRouter();
  const baseUrl = Config().baseUrl;
  const [productData, setProductData] = useState<productListCardType>();
  const [productImageData, setProductImageData] = useState<productImageType[]>(
    []
  );
  useEffect(() => {
    axios(`${baseUrl}/v1/api/products/${query.productId}`).then((res) => {
      console.log(res.data);
      setProductData(res.data);
    });
    axios(`${baseUrl}/v1/api/product-images/${query.productId}`).then((res) => {
      console.log(res.data);
      setProductImageData(res.data);
      //console.log(productImageData?.productId);
    });
  }, []);

  // useEffect(() => {
  //   axios(`${baseUrl}/v1/api/product-images/1`).then((res) => {
  //     //console.log(res.data);
  //     setProductImageData(res.data);
  //     //console.log(productImageData?.productId);
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>{productData?.name}</title>
      </Head>
      <section id="thumb-details">
        <div className="thumb">
          <img className="thumbnail" src={productData?.thumbnail} alt="" />
        </div>
      </section>

      <section id="product-details">
        <div className="product-details-list">
          <div className="product-name">
            <h3>
              {productData?.name}
              <img src="../assets/images/icons/share.png" />
            </h3>
          </div>
          <div className="product-description">
            <p>{productData?.description}</p>
          </div>
          <div className="product-price">
            <p>
              <span>{productData?.price}</span>원
            </p>
          </div>
          <div className="product-remark">
            <p>주의사항</p>
          </div>
        </div>
      </section>

      <section id="product-details-img">
        <div className="product-img">
          {productImageData.map((item) => (
            <img key={item.id} src={item.image} alt="" />
          ))}
        </div>
      </section>

      <section id="product-etc">
        <div className="etc">
          <h3>이용조건 및 배송 안내</h3>
        </div>
        <div className="etc">
          <h3>상품제공정보고시</h3>
        </div>
        <div className="etc">
          <h3>교환/반품 안내</h3>
        </div>
        <div className="etc">
          <h3>취소/환불 안내</h3>
        </div>
        <div></div>
      </section>

      <footer>
        <div className="product-footer">
          <div className="product-add-details">
            <img src="../assets/images/icons/grayLine.png" />
          </div>
          <div className="product-order">
            <p>구매하기</p>
          </div>
        </div>
      </footer>
    </>
  );
}
