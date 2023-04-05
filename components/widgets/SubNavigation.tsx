import Config from '@/configs/config.export'
import { bottomSubNavMenuType } from '@/types/header/navMenuType'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function SubNavigation() {

  const router = useRouter()
  const baseUrl = Config().baseUrl;

  const [subNavBottomData, setSubNavBottomData] = useState<bottomSubNavMenuType[]>()

  let subName = ""
  let id = ""

  if (router.pathname === '/event') {
    subName = `${baseUrl}/v1/api/events/all`
  } else if (router.pathname === '/best') {
    subName = `${baseUrl}/v1/api/categories/main/side`
  }

  useEffect(() => {
    axios(subName)
      .then(res => {
        setSubNavBottomData(res.data)
      })

  }, [router.pathname])

  return (
    <>
      <div className="header-sub">
        <nav>
          <ul>
            {
              subNavBottomData && subNavBottomData.map(nav => (
                <li
                  key={nav.id}
                  className={router.query.category === String(router.pathname === '/event' ? nav.eventId : nav.id) ? "active" : ""}
                >
                  <Link href={`${router.pathname}?category=${router.pathname === '/event' ? nav.eventId : nav.id}`}>{nav.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  )
}
