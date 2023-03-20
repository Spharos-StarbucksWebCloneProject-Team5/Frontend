import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Product() {
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <Head>
        <title>Product {query.productId}</title>
      </Head>
      <section id="thumb-details">
        <div className="thumb">
          <img
            className="thumbnail"
            src="assets/images/products/01.png"
            alt=""
          />
        </div>
      </section>

      <section id="product-details">
        <div className="product-details-list">
          <div className="product-name">
            <h3>
              스타벅스 그린 멀티백
              <img src="assets/images/icons/share.png" />
            </h3>
          </div>
          <div className="product-description">
            <p>벨트형 핸들의 멀티백입니다.</p>
          </div>
          <div className="product-price">
            <p>
              <span>27,000</span>원
            </p>
          </div>
          <div className="product-remark">
            <p>주의사항</p>
          </div>
        </div>
      </section>

      <section id="product-details-img">
        <div className="product-img">
          <img src="assets/images/products/01.png" />
          <img src="assets/images/products/01.png" />
          <img src="assets/images/products/01.png" />
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
            <img src="assets/images/icons/grayLine.png" />
          </div>
          <div className="product-order">
            <p>구매하기</p>
          </div>
        </div>
      </footer>
    </>
  );
}
