import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";

export default function ModalUi(props: {
  isModalView: boolean;
  setIsModalView: Dispatch<SetStateAction<boolean>>;
  modalName: string;
}) {
  const [thisModalName, setThisModalName] = useState<string>(props.modalName);
  useEffect(() => {
    setThisModalName(props.modalName);
  }, [props.modalName]);

  const [modalComponent, setModalComponent] = useState<any>({
    login: (
      <LoginModal
        thisModalName={thisModalName}
        setThisModalName={setThisModalName}
      />
    ),
    signup: <SignupModal />,
  });

  if (!props.isModalView) return null;

  return (
    <div className="modal">
      <div onClick={() => props.setIsModalView(false)}>
        <img src="./assets/images/icons/close.png" className="back-button" />
      </div>

      {modalComponent[thisModalName]}

      <section className="submit-container">
        <Link href="/">
          <button type="submit">다음</button>
        </Link>
      </section>
    </div>
  );
}
