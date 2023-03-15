import MiddleLine from '@/components/ui/MiddleLine'
import React from 'react'

export default function search() {
  return (
    <>
      <div className="search-top">
        <div className="search-bar">
          <form action="">
            <input type="text" placeholder="검색어를 입력해 주세요." />
          </form>
        </div>
        <div className="search-icons">
          <ul>
            <li><img src="assets/images/icons/search.svg" /></li>
            <li><img src="assets/images/icons/close.png" /></li>
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
          <button className="tag-list-item">
            #케이크
          </button>
          <button className="tag-list-item">
            #케이크
          </button>
          <button className="tag-list-item">
            #케이크
          </button>
          <button className="tag-list-item">
            #케이크
          </button>
          <button className="tag-list-item">
            #케이크
          </button>
        </div>
      </div>
    </>
  )
}
