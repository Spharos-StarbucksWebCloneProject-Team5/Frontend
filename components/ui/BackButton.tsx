import React from "react";
import Image from "next/image";
import router from "next/router";

export default function BackButton() {
  return (
    <div onClick={() => router.back()}>
      <Image
        src="/assets/images/icons/back.png"
        width={50}
        height={50}
        className="back-button"
        alt="backButton"
      />
    </div>
  );
}
