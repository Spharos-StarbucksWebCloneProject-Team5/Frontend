import React from "react";
import Image from "next/image";
import router from "next/router";

//카트에서 로그인으로 갔을 때 사용하는 뒤로가기 버튼

export default function BackButton2() {
  return (
    <div onClick={() => router.push("/")}>
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
