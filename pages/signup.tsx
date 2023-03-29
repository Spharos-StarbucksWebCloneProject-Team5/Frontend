import React, { useEffect, useState } from "react";
import StButton from "@/components/ui/StButton";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Swal from "sweetalert2";
import Step01 from "@/components/page/signup/Step01";
import Step02 from "@/components/page/signup/Step02";
import Step03 from "@/components/page/signup/Step03";
import { useRouter } from "next/router";
import CloseButton from "@/components/ui/CloseButton";
import axios from "axios";
import Config from "@/configs/config.export";

export default function SignUp() {
  const router = useRouter();
  const baseUrl = Config().baseUrl;

  const [stepId, setStepId] = useState<number>(1);
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: "",
    userNickname: "",
    birthday: new Date(),
    address: "",
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
  ];

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const handleStepNext = () => {
    console.log(inputData.privateAgree);
    if (stepId === 1 && inputData.privateAgree) {
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
    } else if (stepId === 2) {
      if (!inputData.isUserConfirm) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "이메일 중복 확인 및 인증을 해주세요.",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        return;
      }
      if (inputData.password === "" || inputData.confirmPassword === "") {
        Swal.fire({
          icon: "error",
          text: `비밀번호를 입력해주세요.`,
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        return;
      }
      if (inputData.password !== inputData.confirmPassword) {
        Swal.fire({
          icon: "error",
          text: `비밀번호가 일치하지 않습니다.`,
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        return;
      }
      setStepId(stepId + 1);
    } else if (stepId === 3) {
      if (inputData.userNickname === "") {
        Swal.fire({
          icon: "warning",
          text: `닉네임을 정하지 않았습니다, 그대로 진행하시겠습니까?`,
          cancelButtonText: "닉네임 정하기",
          showCancelButton: true,
          customClass: {
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            setStepId(stepId + 1);
          }
          return;
        });
      } else {
        console.log(inputData.userNickname);
        Swal.fire({
          icon: "warning",
          text: `닉네임을 ${inputData.userNickname}으로 정하시겠습니까?`,
          cancelButtonText: "다시 정하기",
          showCancelButton: true,
          customClass: {
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
          },
        }).then((result) => {
          if (result.isConfirmed) {
          } else {
            setInputData({
              ...inputData,
              userNickname: "",
            });
          }
          return;
        });
      }
    }
    axios
      .post(`${baseUrl}/api/v1/users/sign-up`, {
        email: inputData.userEmail,
        password: inputData.password,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          text: `회원가입이 완료되었습니다.`,
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login");
          }
        });
      });
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
