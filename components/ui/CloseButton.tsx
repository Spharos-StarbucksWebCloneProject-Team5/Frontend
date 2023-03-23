import React from "react";
import Image from "next/image";
import router from "next/router";

export default function CloseButton() {
  return (
    <div onClick={() => router.back()}>
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
