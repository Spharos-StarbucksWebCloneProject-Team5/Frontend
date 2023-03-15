import { bottomSubNavMenuType } from '@/types/navMenuType'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function SubNavigation() {

  const router = useRouter()
  console.log(router.pathname)

  const [subNavBottomData, setSubNavBottomData] = useState<bottomSubNavMenuType[]>()

  useEffect(() => {
    fetch('http://localhost:3001/sub-nav')
      .then(res => res.json())
      .then(data => setSubNavBottomData(data))
  }, [])

  return (
    <>

      <div className="header-sub">
        <nav>
          <ul>
            {
              subNavBottomData && subNavBottomData.map(nav => (
                <li
                  key={nav.id}
                  className={router.pathname === nav.link ? "active" : ""}
                >
                  <Link href={nav.link}>{nav.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  )
}
