import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import ChunsikWidget from '@/components/widgets/ChunsikWidget'
import { useEffect, useState } from 'react'
import Config from '@/configs/config.export'
import axios from 'axios'
import { eventType } from '@/types/main/eventDataType'

const Home: NextPageWithLayout = () => {

  const [eventListData, setEventListData] = useState<eventType[]>()

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios(`${baseUrl}/v1/api/events/all`)
      .then(res => {
        setEventListData(res.data)
      })
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
        eventListData && eventListData.map((event: eventType) => (
          event.eventId === 7 ?
            <ChunsikWidget
              key={event.id}
              data={event}
            />
            :
            <RecommandWidget
              key={event.id}
              data={event}
            />
        ))
      }
    </>
  )
}

export default Home