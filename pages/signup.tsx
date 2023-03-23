import React, { useEffect, useState } from "react";
import StButton from "@/components/ui/StButton";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Swal from "sweetalert2";
import Step01 from "@/components/page/signup/Step01";
import Step02 from "@/components/page/signup/Step02";
import Step03 from "@/components/page/signup/Step03";
import Step04 from "@/components/page/signup/Step04";
import Step05 from "@/components/page/signup/Step05";
import { useRouter } from "next/router";
import CloseButton from "@/components/ui/CloseButton";

export default function SignUp() {
  const router = useRouter();

  const [stepId, setStepId] = useState<number>(1);
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: "",
    userName: "",
    userNickname: "",
    birthday: new Date(),
    password: "",
    confirmPassword: "",
    phone: "",
    isUserConfirm: false,
    privateAgree: {
      isAgree: false,
      isUseConfirm: false,
      isAdvertisingConfirm: false,
    },
  });

  const steps: any = [
    { 1: <Step01 inputData={inputData} setInputData={setInputData} /> },
    { 2: <Step02 inputData={inputData} setInputData={setInputData} /> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData} /> },
    { 4: <Step04 inputData={inputData} setInputData={setInputData} /> },
    { 5: <Step05 inputData={inputData} setInputData={setInputData} /> },
  ];

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const handleStepNext = () => {
    console.log(inputData.privateAgree);
    if (stepId === 1 && inputData.privateAgree) {
      if (
        !inputData.privateAgree.isAgree || !inputData.privateAgree.isUseConfirm) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "필수 항목을 동의 해주세요.",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        return;
      }
      setStepId(stepId + 1);
    }

    if (stepId === 2 && inputData.privateAgree) {
      if (
        !inputData.privateAgree.isAgree ||
        !inputData.privateAgree.isUseConfirm
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "필수 항목을 동의 해주세요.",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        return;
      }
      setStepId(stepId + 1);
    }
  };

  return (
    <div className="modal">
      <CloseButton />
      {steps[stepId - 1][stepId]}
      <section className="submit-container">
        <StButton
          buttonText="NEXT"
          textSize="1.1rem"
          handler={handleStepNext}
        />
      </section>
    </div>
  );
}
