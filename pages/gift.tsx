import MiddleLine from '@/components/ui/MiddleLine'
import Head from 'next/head'
import React from 'react'

export default function gift() {
  return (
    <>
      <Head>
        <title>Gift</title>
      </Head>
      <section id="gift">
        <div className="thumb">
          <img className="thumbnail" src="assets/images/products/01.png" alt="" />
        </div>
        <div className="gift-templates">
          <div className="gift-templates-item">
            <div className="circle-1">
            </div>
            <p>Spring</p>
          </div>
          <div className="gift-templates-item">
            <div className="circle-2">
            </div>
            <p>감사</p>
          </div>
          <div className="gift-templates-item">
            <div className="circle-3">
            </div>
            <p>축하</p>
          </div>
          <div className="gift-templates-item">
            <div className="circle-4">
            </div>
            <p>사랑</p>
          </div>
          <div className="gift-templates-item">
            <div className="circle-5">
            </div>
            <p>응원</p>
          </div>
          <div className="gift-templates-item">
            <div className="circle-6">
            </div>
            <p>부탁</p>
          </div>
        </div>
        <MiddleLine />
        <div className="to-gift">
          <p>받는 사람</p>
          <div className="phone-address">
            <p>+ 연락처 가져오기</p>
          </div>
        </div>
        <div className="to-gift-input">
          <input type="text" name="name" id="name" placeholder="이름" />
        </div>
        <div className="to-gift-input">
          <input type="tel" name="tel" id="tel" placeholder="휴대 전화 번호" />
        </div>
        <div className="gift-info">
          <p className="gift-info-char">ⓘ</p>
          <p className="gift-info-text">선물은 결제 완료 후 카카오 알림톡으로 발송되며, 입력된 이름 그대로 수신자 메시지에 표시됩니다.</p>
        </div>
        <div className="product-footer">
          <div className="product-order">
            <p>결제 및 선물하기</p>
          </div>
        </div>
      </section>
    </>
  )
}
