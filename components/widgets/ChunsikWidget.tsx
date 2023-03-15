import React, { useEffect, useState } from 'react'
import { eventProductListType } from '@/types/fetchDataType'
import ColProductListCard from '../ui/ColProductListCard'

export default function ChunsikWidget(props: { title: string, eventId: number }) {

  const [chunsikItemList, setChunsikItemList] = useState<eventProductListType[]>()

  useEffect(() => {
    fetch(`http://localhost:3001/event-product-list?eventId=${props.eventId}`)
      .then(res => res.json())
      .then(data => setChunsikItemList(data))
  }, [])

  return (
    <section className="chunsik">
      <div className="recommand-md-products">
        <h2>{props.title}</h2>
        {
          chunsikItemList && chunsikItemList.map(item => (
            <ColProductListCard
              key={item.id}
              producId={item.productId}
            />
          ))
        }
      </div>
    </section>
  )
}
