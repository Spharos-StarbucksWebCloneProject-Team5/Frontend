import React, { useState } from 'react'
import styled from 'styled-components'
import myStyle from './ProductOrderSection.module.css'

const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`

const OrderButton = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: rgb(0, 155, 57);
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  padding: 8px 0;
`

const OrderInfoSection = styled.div`
  width: 100%;
`

const OrderInfo = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: rgb(0, 0, 0, 0.3);
  box-size: border-box;
  height: 100px;
  `

export default function ProductOrderSection() {

  const [isOrder, setIsOrder] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOrder(!isOrder)
  }

  return (
    // <Sheet isOpen={isOrder} onClose={handleOpen}>
    //   <Sheet.Container>
    //     <Sheet.Header />
    //     <Sheet.Content>
    //       <OrderToggleButton />
    //     </Sheet.Content>
    //   </Sheet.Container>
    // </Sheet>
    <div className={myStyle.productOrderSection}>
      <OrderToggleButton onClick={handleOpen} />
      {
        isOrder && <OrderInfoSection >
          <OrderInfo>this is info section</OrderInfo>
        </OrderInfoSection>
      }
      {
        !isOrder ? <OrderButton onClick={handleOpen}>구매하기</OrderButton> : <OrderButton onClick={handleOpen}>장바구니</OrderButton>
      }
    </div>
  )
}
