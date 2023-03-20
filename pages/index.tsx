import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import ChunsikWidget from '@/components/widgets/ChunsikWidget'
import { useEffect, useState } from 'react'
import { mainEventListType } from '@/types/fetchDataType'

const Home: NextPageWithLayout = () => {

  const [eventListData, setEventListData] = useState<mainEventListType[]>()
  const [chunsikListData, setChunsikListData] = useState<mainEventListType[]>()

  useEffect(() => {
    fetch('http://localhost:3001/main-event-list')
      .then(res => res.json())
      .then(data => setEventListData(data))
  }, [])

  return (
    <>
      <Head>
        <title>StarBucks Clone Site</title>
      </Head>
      <section id="event-banner">
        <div className="event-banner">
          <div className="event-banner__item">
            <div className="event-banner__item__img">
              <img src="assets/images/banner/banner01.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {
        eventListData && eventListData.map(event => (
          event.eventId === 5 ?
            <ChunsikWidget
              key={event.id}
              title={event.title}
              eventId={event.eventId}
            />
            :
            <RecommandWidget
              key={event.id}
              title={event.title}
              eventId={event.eventId}
            />
        ))
      }
    </>
  )
}

export default Home