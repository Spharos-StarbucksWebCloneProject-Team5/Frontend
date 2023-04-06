import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CloseButton2() {
  const router = useRouter()
  return (
    <div onClick={() => router.push("/")}>
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
