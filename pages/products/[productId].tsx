import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "@/configs/config.export";

import {
  productImageType,
  productListCardType,
} from "../../types/product/fetchDataType";
import { useRecoilState } from "recoil";
import { buyNowState } from "@/state/atom/paymentState";
import ProductOrderSection from "@/components/page/product/ProductOrderSection";

export default function Product() {
  const { query, push } = useRouter();
  const baseUrl = Config().baseUrl;
  const [productData, setProductData] = useState<productListCardType>({
    id: 0,
    description: "",
    name: "",
    price: 0,
    thumbnail: "",
    isNew: false,
  });
  const [productImageData, setProductImageData] = useState<productImageType[]>(
    []
  );

  //console.log(query);
  useEffect(() => {
    //if (!router.isReady) return;
    axios(`${baseUrl}/v1/api/products/${query.productId}`).then((res) => {
      console.log(res.data);
      setProductData(res.data);
    });
    axios(`${baseUrl}/v1/api/product-images/${query.productId}`).then((res) => {
      setProductImageData(res.data);
    });
  }, []);

  // useEffect(() => {${Number(query.productId)}
  //   axios(`${baseUrl}/v1/api/product-images/1`).then((res) => {
  //     //console.log(res.data);
  //     setProductImageData(res.data);
  //     //console.log(productImageData?.productId);
  //   });
  // }, []);

  // const movePayment = () => {
  //   setBuyProduct(productData?.id, count);
  //   push(`/payment`);
  // };

  return (
    <>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <section id="thumb-details">
        <div className="thumb">
          <img className="thumbnail" src={productData.thumbnail} alt="" />
        </div>
      </section>

      <section id="product-details">
        <div className="product-details-list">
          <div className="product-name">
            <h3>
              {productData.name}
              <img src="../assets/images/icons/share.png" />
            </h3>
          </div>
          <div className="product-description">
            <p>{productData.description}</p>
          </div>
          <div className="product-price">
            <p>
              <span>{productData.price.toLocaleString()}</span>원
            </p>
          </div>
        </div>
        <div className="product-remark"></div>
      </section>

      <section id="product-details-img">
        <p className="product-info">상품 정보</p>
        <div className="product-img">
          {productImageData.map((item) => (
            <img key={item.id} src={item.image} alt="" />
          ))}
        </div>
      </section>

      <section id="product-etc">
        <div className="etc">
          <h3>이용조건 및 배송 안내</h3>
          <img src="../assets/images/icons/arrow-point-to-right.png" alt="" />
        </div>
        <div className="etc">
          <h3>상품제공정보고시</h3>
          <img src="../assets/images/icons/arrow-point-to-right.png" alt="" />
        </div>
        <div className="etc">
          <h3>교환/반품 안내</h3>
          <img src="../assets/images/icons/arrow-point-to-right.png" alt="" />
        </div>
        <div className="etc">
          <h3>취소/환불 안내</h3>
          <img src="../assets/images/icons/arrow-point-to-right.png" alt="" />
        </div>
        <div></div>
      </section>

      {/* <footer>
        <div className="product-footer">
          <div className="product-add-details">
            <img src="../assets/images/icons/grayLine.png" />
          </div>
          <div className="product-order" onClick={movePayment}>
            <p>구매하기</p>
          </div>
        </div>
      </footer> */}
      <ProductOrderSection
        productId={productData.id}
        productName={productData?.name}
        productPrice={productData?.price}
      />
    </>
  );
}
