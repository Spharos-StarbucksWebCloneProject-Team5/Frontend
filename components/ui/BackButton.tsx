import React from "react";
import Image from "next/image";
import router from "next/router";

export default function BackButton() {
  return (
    <div onClick={() => history.back()}>
      <Image
        src="/assets/images/icons/back.png"
        width={23}
        height={23}
        className="back-button"
        alt="backButton"
      />
    </div>
  );
}
