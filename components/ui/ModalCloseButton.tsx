import React from "react";
import Image from "next/image";
import router from "next/router";

export default function ModalCloseButton(props:{
  setModalOpen: Function
}) {

  const handleClose = () => {
    document.body.style.overflow = "unset";
    props.setModalOpen(false);
  }

  return (
    <div onClick={handleClose}>
      <Image
        src="/assets/images/icons/close.png"
        width={23}
        height={23}
        className="back-button"
        alt="closeButton"
      />
    </div>
  );
}
