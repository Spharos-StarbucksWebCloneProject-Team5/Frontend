import Link from "next/link";
import React from "react";

export default function LoginFooter() {
  return (
    <div className="login-btn">
      <div className="login-btn-inner">
        <ul>
          <li>
            <Link href="">아이디 찾기</Link>
          </li>
          <li>
            <Link href="/modifyPassword">비밀번호 찾기</Link>
          </li>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
