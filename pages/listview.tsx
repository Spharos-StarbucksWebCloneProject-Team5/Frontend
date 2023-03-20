import ProductListCard from '@/components/ui/ProductListCard'
import { productListCardType } from '@/types/fetchDataType'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function ProductListView() {

  const [productData, setProductData] = useState<productListCardType[]>()

  useEffect(() => {
    fetch(`http://localhost:3001/products`)
      .then(res => res.json())
      .then(data => setProductData(data))
  }, [])

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
      <div className="product-list">
        <div className="event-product-list">
          {
            productData && productData.map(item => (
              <ProductListCard
                key={item.id}
                productId={item.id}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
