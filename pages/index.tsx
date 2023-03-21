import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import ChunsikWidget from '@/components/widgets/ChunsikWidget'
import { useEffect, useState } from 'react'
import { mainEventListType } from '@/types/fetchDataType'
import Config from '@/configs/config.export'
import axios from 'axios'
import { eventType } from '@/types/main/eventDataType'

const Home: NextPageWithLayout = () => {

  const [eventListData, setEventListData] = useState<eventType[]>()
  const [chunsikListData, setChunsikListData] = useState<eventType[]>()

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios(`${baseUrl}/v1/api/events/all`)
      .then(res => {
        console.log(res.data)
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
              key={event.index}
              data={event}
            />
            :
            <RecommandWidget
              key={event.index}
              data={event}
            />
        ))
      }
    </>
  )
}

export default Home