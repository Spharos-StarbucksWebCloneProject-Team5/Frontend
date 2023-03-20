import { bottomSubNavMenuType } from '@/types/navMenuType'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function SubNavigation() {

  const router = useRouter()

  const [subNavBottomData, setSubNavBottomData] = useState<bottomSubNavMenuType[]>()

  let subName = ""

  if (router.pathname === '/event') {
    subName = 'http://localhost:3001/sub-nav-event'
  } else if (router.pathname === '/best') {
    subName = 'http://localhost:3001/sub-nav-best'
  }

  useEffect(() => {
    fetch(subName)
      .then(res => res.json())
      .then(data => setSubNavBottomData(data))
  }, [router.pathname])

  console.log(router.query)
  return (
    <>
      <div className="header-sub">
        <nav>
          <ul>
            {
              subNavBottomData && subNavBottomData.map(nav => (
                <li
                  key={nav.id}
                  className={router.query.category === nav.name ? "active" : ""}
                >
                  <Link href={`${router.pathname}?category=${encodeURIComponent(nav.name)}`}>{nav.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  )
}
