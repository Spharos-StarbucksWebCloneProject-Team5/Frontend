import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import Config from "@/configs/config.export";

import { searchState } from "@/state/atom/searchState";
import { tagData } from "@/datas/tagData";

import CloseButton from "@/components/ui/CloseButton";
import MiddleLine from "@/components/ui/MiddleLine";
import Swal from "sweetalert2";

export default function search() {
  const baseUrl = Config().baseUrl;
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [recentSearch, setRecentSearch] = useRecoilState(searchState); //최근 검색어

  //검색어 저장
  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  //검색버튼 눌렀을 때
  const buttonHandle = () => {
    if (search.length !== 0) {
      setRecentSearch([...recentSearch, search]);
      router.push(`/search/${search}`);
    } else {
      Swal.fire({
        icon: "info",
        text: "검색어를 입력해 주세요.",
      });
    }
    if (recentSearch.includes(search)) {
      setRecentSearch([
        ...recentSearch.filter((item) => item !== search),
        search,
      ]);
    }

  };
  //엔터키 눌렀을 때
  const enterHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //e.preventDefault();
    if (e.key === "Enter") {
      if (search.length !== 0) {
        setRecentSearch([...recentSearch, search]);
        router.push(`/search/${search}`);
      } else {
        e.preventDefault();
        Swal.fire({
          icon: "info",
          text: "검색어를 입력해 주세요.",
        });
      }
      if (recentSearch.includes(search)) {
        setRecentSearch([
          ...recentSearch.filter((item) => item !== search),
          search,
        ]);
      } else setRecentSearch([...recentSearch, search]);

      router.push(`/search/${search}`);
    }
  };

  //선택 삭제
  const handleDelete = (keyword: string) => {
    setRecentSearch(recentSearch.filter((item) => item !== keyword));
  };
  //전체 삭제
  const allDelete = () => {
    setRecentSearch([]);
  };

  //태그 검색
  const tagClick = (tag: string) => {
    setRecentSearch([...recentSearch, tag]);
    const tagSlice = tag.slice(1);
    router.push(`/search/${tagSlice}`);
  };

  const searchClick = (keyword: string) => {
    if (keyword[0] === '#') {
      router.push(`/search/${keyword.split('#')[1]}`);
      return;
    }
    router.push(`/search/${keyword}`);
  }

  return (
    <>
      <div className="search-top">
        <div className="search-bar">
          <form action="">
            <input
              type="text"
              placeholder="검색어를 입력해 주세요."
              onChange={searchHandle}
              onKeyDown={enterHandle}
            />
          </form>
        </div>
        <div className="search-icons">
          <ul>
            <li onClick={buttonHandle}>
              <img src="assets/images/icons/search.svg" />
            </li>
            <li>
              <CloseButton />
            </li>
          </ul>
        </div>
      </div>
      {
        recentSearch.length !== 0 ?
          <div className="search-latest">
            <div className="search-latest-title">
              <h3>최근 검색어</h3>
            </div>
            <div className="search-latest-keywords">
              {recentSearch
                ? recentSearch
                  .slice(0)
                  .reverse()
                  .map((item, idx) => (
                    <div className="keywords" key={idx}>
                      <p onClick={() => searchClick(item)}>{item}</p>
                      <img
                        src="assets/images/icons/close.png"
                        onClick={() => handleDelete(item)}
                      />
                    </div>
                  ))
                : ""}
            </div>
            <MiddleLine
              gutterSize={15}
              gutterSize2={10}
            />
            <div className="delete-keywords">
              <button onClick={allDelete}>전체삭제</button>
            </div>
          </div>
          :
          <div className="none-recent-search">
            <p>최근 검색어가 없습니다.</p>
          </div>
      }
      <div className="recommand-tag">
        <div className="recommand-tage-title">
          <h3>추천태그</h3>
        </div>
        <div className="tag-list">
          {tagData.map((item) => (
            <button
              key={item.id}
              className="tag-list-item"
              onClick={() => tagClick(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}