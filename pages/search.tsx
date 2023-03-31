import { useRouter } from "next/router";

import Config from "@/configs/config.export";
import CloseButton from "@/components/ui/CloseButton";
import MiddleLine from "@/components/ui/MiddleLine";

import React, { useState } from "react";

export default function search() {
  const [search, setSearch] = useState("");

  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const router = useRouter();

  return (
    <>
      <div className="search-top">
        <div className="search-bar">
          <form action="">
            <input
              type="text"
              placeholder="검색어를 입력해 주세요."
              onChange={searchHandle}
            />
          </form>
        </div>
        <div className="search-icons">
          <ul>
            <li onClick={() => router.push(`/search/${search}`)}>
              <img src="assets/images/icons/search.svg" />
            </li>
            <li>
              <CloseButton />
            </li>
          </ul>
        </div>
      </div>
      <div className="search-latest">
        <div className="search-latest-title">
          <h3>최근 검색어</h3>
        </div>
        <div className="search-latest-keywords">
          <div className="keywords">
            워커 핑크
            <img src="assets/images/icons/close.png" />
          </div>
          <div className="keywords">
            워커 핑크
            <img src="assets/images/icons/close.png" />
          </div>
          <div className="keywords">
            워커 핑크
            <img src="assets/images/icons/close.png" />
          </div>
          <div className="keywords">
            워커 핑크
            <img src="assets/images/icons/close.png" />
          </div>
          <div className="keywords">
            워커 핑크
            <img src="assets/images/icons/close.png" />
          </div>
        </div>
        <MiddleLine />
        <div className="delete-keywords">
          <button>전체삭제</button>
        </div>
      </div>

      <div className="recommand-tag">
        <div className="recommand-tage-title">
          <h3>추천태그</h3>
        </div>
        <div className="tag-list">
          <button className="tag-list-item">#케이크</button>
          <button className="tag-list-item">#케이크</button>
          <button className="tag-list-item">#케이크</button>
          <button className="tag-list-item">#케이크</button>
          <button className="tag-list-item">#케이크</button>
        </div>
      </div>
    </>
  );
}
