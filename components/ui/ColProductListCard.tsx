import { productListCardType } from '@/types/fetchDataType'
import React, { useEffect, useState } from 'react'

export default function ColProductListCard(prosps: { producId: number }) {

  const [productData, setProductData] = useState<productListCardType>()
  
  useEffect(() => {
    fetch(`http://localhost:3001/products/${prosps.producId}`)
      .then(res => res.json())
      .then(data => setProductData(data))
  }, [prosps.producId])

  return (
    <>
      {
        productData &&
        <div className="chunsik-item">
          <img src={productData.imgUrl} alt={productData.title} />
          <div className="chunsik-item-info">
            <p className="item-title">{productData.title}</p>
            <p className="item-price"><span>{productData.price}</span>원</p>
          </div>
        </div>
      }
    </>
  )
}
