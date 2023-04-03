import { useState, useRef } from "react";
import styled from "styled-components";
import myStyle from "@/public/assets/css/modules/ProductOrderSection.module.css";
import Sheet, { SheetRef } from "react-modal-sheet";
import Separator from "@/components/ui/Separator";
import { useRecoilState } from "recoil";
import { buyNowState } from "@/state/atom/paymentState";
import { useRouter } from "next/router";
import axios from "axios";
import { useCookies } from "react-cookie";
import Config from "@/configs/config.export";
import Swal from "sweetalert2";

const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`;
const OrderButton = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: rgb(0, 155, 57);
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  padding: 8px 0;
`;
const OrderButton35width = styled(OrderButton)`
  width: 40%;
  padding: 9px 0px;
  font-weight: 400;
`;
const OrderButton38widthColorReverse = styled(OrderButton35width)`
  background: white;
  color: rgb(0, 155, 57);
  border: 1px solid rgb(0, 155, 57);
  padding: 7px 0px;
`;

export default function ProductOrderSection(props: {
  productId: number;
  productName: string;
  productPrice: number;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [buyProduct, setBuyProduct] = useRecoilState(buyNowState);
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;
  const ref = useRef<SheetRef>();
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const minusCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const buyHandle = () => {
    setBuyProduct({ productId: props.productId, count: count });
    router.push(`/payment`);
  };

  const addCart = () => {
    //console.log(`buyProduct------${buyProduct.productId}`)
    axios
      .post(
        `${baseUrl}/v1/api/carts`,
        {
          productId: props.productId,
          count: count,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${cookies.id}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          title: "장바구니에 추가되었습니다",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: `장바구니 가기`,
          denyButtonText: `상품 더보기`,
        }).then((result) => {
          if (result.isConfirmed) {
            router.push(`/cart`);
          } else {
            router.push(`/listview`);
          }
        });
      });
  };
  let totalPrice = count * props.productPrice;

  return (
    <>
      <div
        className={
          isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection
        }
      >
        {!isOpen ? <OrderToggleButton onClick={handleOpen} /> : null}

        {!isOpen ? (
          <OrderButton onClick={handleOpen}>구매하기</OrderButton>
        ) : (
          <div className={myStyle.productOrderSectionOpenBottomWrap}>
            <img
              src="../assets/images/icons/shopping-cart.svg"
              onClick={addCart}
            />
            <OrderButton38widthColorReverse>
              선물하기
            </OrderButton38widthColorReverse>
            <OrderButton35width onClick={buyHandle}>
              구매하기
            </OrderButton35width>
          </div>
        )}
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
        style={{
          zIndex: 100,
        }}
      >
        <Sheet.Container>
          <Sheet.Content>
            <div
              style={{
                height: "300px",
                boxSizing: "border-box",
                paddingTop: "1rem",
              }}
            >
              <OrderToggleButton onClick={() => setIsOpen(false)} />
              <div className={myStyle.greyWrap}>
                <div className={myStyle.greyboxWrap}>
                  <div className={myStyle.greybox}>
                    <div className={myStyle.title}>{props.productName}</div>

                    <div className={myStyle.QtyCountWrap}>
                      <div className={myStyle.QtyCount}>
                        <img
                          src="../assets/images/icons/minus.png"
                          onClick={minusCount}
                        />
                        {count}
                        <img
                          src="../assets/images/icons/add.png"
                          onClick={addCount}
                        />
                      </div>
                      <div className={myStyle.priceBold}>
                        {props.productPrice.toLocaleString("en")}원
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator color="lightgrey" gutter={0.6} />

              <div className={myStyle.bottomPriceWrap}>
                합계{" "}
                <span className={myStyle.rightBottomBoldPrice}>
                  {totalPrice.toLocaleString("en")}원
                </span>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
