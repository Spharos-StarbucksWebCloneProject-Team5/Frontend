import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import CloseButton from '../ui/CloseButton';

export default function HeaderTopShipping() {
  const { pathname } = useRouter();

  return (
    <div className="shipping-header-top">
      <div className="menu-icon">
      </div>
      <div className='shipping-header-name'>
        <p>배송지 {
          pathname === "/shippingAddressModify/[shippingAddressId]" ? "수정" :
            pathname === "/shippingAddressRegister" ? "등록" : "변경"
        }</p>
      </div>
      <nav>
        <ul>
          <CloseButton />
        </ul>
      </nav>
    </div>
  )
}
