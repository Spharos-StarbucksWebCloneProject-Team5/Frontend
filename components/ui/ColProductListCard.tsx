import React, { useEffect, useState } from 'react'
import { productListCardType } from '@/types/fetchDataType';

export default function ColProductListCard(props: { data: productListCardType }) {

  // const [productData, setProductData] = useState<productListCardType>()

  // const baseUrl = Config().baseUrl;

  // useEffect(() => {
  //   axios(`${baseUrl}/v1/api/event-products/${props.productId}`)
  //     .then(res => {
  //       console.log(res.data)
  //       setProductData(res.data)
  //     })
  // }, [props.productId]);

  return (
    <>
      {
        props.data &&
        <div className="chunsik-item">
          <img src={props.data.thumbnail} alt={props.data.description} />
          <div className="chunsik-item-info">
            <p className="item-title">{props.data.name}</p>
            <p className="item-price"><span>{props.data.price}</span>원</p>
          </div>
        </div>
      }
    </>
  )
}
