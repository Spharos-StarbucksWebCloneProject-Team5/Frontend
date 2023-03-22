import React from 'react'
import { productListCardType } from '@/types/product/fetchDataType';

export default function ColProductListCard(props: { data: productListCardType }) {

  return (
    <>
      {
        props.data &&
        <div className="chunsik-item">
          <img src={props.data.thumbnail} alt={props.data.description} />
          <div className="chunsik-item-info">
            <p className="item-title">{props.data.productName}</p>
            <p className="item-price"><span>{props.data.price.toLocaleString()}</span>원</p>
          </div>
        </div>
      }
    </>
  )
}
