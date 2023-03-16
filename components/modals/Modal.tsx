import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import Link from 'next/link';

export interface ModalProps {
  isModal: string,
  setIsModal: Dispatch<SetStateAction<string>>
}

export default function Modal({ isModal, setIsModal }: ModalProps) {

  const [isSignupView, setIsSignupView] = useState<Boolean>(false)
  const [isLoginView, setIsLoginView] = useState<Boolean>(false)

  if (!isModal) {
    return null;
  }

  // useEffect(() => {
  //   if(isModal === "login"){

  //   }
  // }, [])

  return (
    <>
      <div className='modal'>
        <div onClick={() => setIsLoginView(false)}>
          <img src="./assets/images/icons/close.png" className="back-button" />
        </div>

        {
          isModal && isModal === "login" ?
          <Login
            isLoginView={isLoginView}
            setIsLoginView={setIsLoginView}
          />
          :
          <Signup
            isSignupView={isSignupView}
            setIsSignupView={setIsSignupView}
          />
        }

        <section className="submit-container">
          <Link href="/signup_certified.html">
            <button type="submit">다음</button>
          </Link>
        </section>
      </div>
    </>
  )
}
