import { bottomNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Login from '../modals/Login'
import { useRecoilValue } from 'recoil'
import { cartState } from '@/state/cartState'
// import { bottomNavData } from '../../datas/navData'

export default function MainLayout(props: { children: React.ReactNode }) {

  const router = useRouter()
  console.log(router.pathname)

  // const cartPathName:String = '/cart';
  // const [ isCart, setIsCart ] = useState<Boolean>(false)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()
  const [isLoginView, setIsLoginView] = useState<Boolean>(false)

  // 회원가입 모달창 테스트
  // const [ isSignupView, setIsSignupView ] = useState<Boolean>(false)

  const cartCnt = useRecoilValue(cartState)

  useEffect(() => {
    // if(router.pathname === cartPathName) {
    //   setIsCart(true)
    // }
    fetch('http://localhost:3001/nav')
      .then(res => res.json())
      .then(data => setNavBottomData(data))
  }, [])

  return (
    <>
      <Login
        isLoginView={isLoginView}
        setIsLoginView={setIsLoginView}
      />
      {/* <Signup
        isSignupView = {isSignupView}
        setIsSignupView = {setIsSignupView}
      /> */}
      <Head>
        <meta name="description" content="StarBucks Clone Site" />
        <meta name="keywords" content="StarBucks, Clone, Site" />
        <meta name="author" content="Jason Ahn" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>StarBucks Clone Site</title>
      </Head>
      <div className="container">
        <header>
          <div className="header-top">
            <div className="menu-icon">
              <a href="menu.html"><img src="assets/images/icons/menu.svg" alt="" /></a>
            </div>
            <h1>온라인 스토어</h1>
            <nav>
              <ul>
                <li><img src="assets/images/icons/search.svg" /></li>
                <li>
                  <p className='cart-badge'>{cartCnt}</p>
                  <img src="assets/images/icons/shopping-cart.svg" />
                </li>
                <li onClick={() => setIsLoginView(true)}><img src="assets/images/icons/user.svg" /></li>
                {/* <li onClick={()=>setIsSignupView(true)}><img src="assets/images/icons/user.svg" /></li> */}
              </ul>
            </nav>
          </div>
          {
            router.pathname !== '/cart' ?
              <div className="header-bottom">
                <nav>
                  <ul>
                    {
                      navBottomData && navBottomData.map(nav => (
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
              //  : 
              //  router.pathname !== '/best'?

              : ""
          }

        </header>
      </div>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}
