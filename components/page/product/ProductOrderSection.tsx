import { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Sheet from "react-modal-sheet";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import axios from "axios";
import Swal from "sweetalert2";

import styled from "styled-components";
import myStyle from "@/public/assets/css/modules/ProductOrderSection.module.css";

import Config from "@/configs/config.export";
import Separator from "@/components/ui/Separator";
import ButtonUi from "@/components/ui/ButtonUi";

import { buyNowState } from "@/state/atom/paymentState";
import { userLoginState } from "@/state/atom/userLoginState";

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
  const [successModal, setSuccessModal] = useState(false);
  const [buyProduct, setBuyProduct] = useRecoilState(buyNowState);
  const [cookies] = useCookies(["id"]);
  const baseUrl = Config().baseUrl;
  const router = useRouter();
  const { isLogin } = useRecoilValue(userLoginState);
  const myLogin = cookies.id;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const minusCount = () => {
    if (count === 1) {
      Swal.fire({
        toast: true,
        text: '최소 수량은 1개 입니다.',
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        color: "#067040"
      });
      return;
    }
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const addCount = () => {
    if (count === 3) {
      Swal.fire({
        toast: true,
        text: '최대 수량은 5개 입니다.',
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        color: "#067040"
      });
      return;
    } else {
      setCount(count + 1);
    }
  };

  const buyHandle = () => {
    if (!myLogin && !isLogin) {
      Swal.fire({
        icon: "info",
        text: "로그인이 필요합니다!",
      });
      router.push("/login");
      return;
    } else {
      setBuyProduct({ productId: props.productId, count: count });
      router.push(`/payment`);
    }
  };

  const addCart = () => {
    if (!myLogin && !isLogin) {
      Swal.fire({
        icon: "info",
        text: "로그인이 필요합니다!",
      });
      router.push("/login");
      return;
    } else {
      axios.post(
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
      ).then((res) => {
        Swal.fire({
          toast: true,
          text: '장바구니에 상품을 담았습니다.',
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          color: "#067040"
        });
        setSuccessModal(true);
        setIsOpen(false);
      })
        .catch(err => {
          console.log(err);
        });
    }
  };

  let totalPrice = count * props.productPrice;

  return (
    <>
      <SuccessViewModal
        isModalOpen={successModal}
        setIsModalOpen={setSuccessModal}
      />
      <div
        className={
          isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection
        }
      >
        {!isOpen ? <OrderToggleButton onClick={handleOpen} /> : null}

        {!isOpen ? (
          <ButtonUi type="button" text="구매하기" handler={handleOpen} size="large" colorType="primary" />
        ) : (
          <div className={myStyle.productOrderSectionOpenBottomWrap}>
            <Image
              src="../assets/images/icons/shopping-cart.svg"
              width={20}
              height={20}
              alt="shopping cart icon"
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
                        <div className={count === 1 ? myStyle.QtyCountDisabled : myStyle.QtyCount}>
                          <div className="order-count">
                          <Image
                            src="/assets/images/icons/minus.png"
                            onClick={minusCount}
                            width={20}
                            height={20}
                            alt="-Button"
                          />
                          <p>{count}</p>
                          <Image
                            src="/assets/images/icons/add.png"
                            onClick={addCount}
                            width={20}
                            height={20}
                            alt="+Button"
                          />
                          </div>
                        </div>
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

const SuccessViewModal = (props: { isModalOpen: boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>> }) => {

  if (!props.isModalOpen) { return null; }

  return (
    <>
      <SuccessModalWarp>
        <div className={myStyle.notiWrap}>
          <div>
            <p>장바구니에 추가되었습니다.</p>
            <Image
              src="/assets/images/icons/close.png"
              alt="close"
              width={20}
              height={20}
              onClick={() => props.setIsModalOpen(false)}
            />
          </div>
          <div className={myStyle.buttonWrap}>
            <ButtonUi
              type="button"
              text="장바구니로 이동"
              size="medium"
              colorType="secondary"
              link="/cart"
            />
            <ButtonUi
              type="button"
              text="상품 더보기"
              size="medium"
              colorType="primary"
              link="/listview?category=0"
            />
          </div>
        </div>

      </SuccessModalWarp>
    </>
  )
}
const SuccessModalWarp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  width: 100%
  height: 100%
  z-index: 890;
  padding: 0;
  margin: 0;
`;