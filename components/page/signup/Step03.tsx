import React, { useState, useEffect } from "react";

import CheckBox from "@/components/ui/CheckBox";

import { inputRegisterType } from "@/types/UserRequest/Request";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step03 = ({ inputData, setInputData }: ChildProps) => {

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'isPrivacyAgree') {
      setInputData({
        ...inputData,
        [name]: checked,
      });
    }
    if (name === 'userNickname') {
      setInputData({
        ...inputData,
        [name]: value,
      });
    };
  };

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  return (
    <>
      <div className="slide-in">
        {/* <div className="signup-header">
          <p className="page-num">①－②－③－❹</p>
        </div> */}
        <section className="greeting">
          <h2 className="signup-info">
            닉네임을
            <br />
            입력해 주세요.
          </h2>
        </section>
        <form className="agree-input" id="agree-main">
          <CheckBox
            lableText="선택적 개인정보 수집동의 및 이용약관"
            isArrow={true}
            inputName="isPrivacyAgree"
            link=""
            handler={handleInput}
            value={inputData.isPrivacyAgree}
          />
          <div id="id-password-input">
            <input
              type="text"
              name="userNickname"
              placeholder="닉네임 (한글 6자리 이내)"
              onChange={handleInput}
            />
          </div>
        </form>

        <section className="email-guideline">
          <p className="notice">
            · 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러 드립니다.
          </p>
        </section>
      </div>
    </>
  );
};

export default Step03;
