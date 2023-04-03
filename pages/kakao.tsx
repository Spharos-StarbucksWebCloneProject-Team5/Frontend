import Config from '@/configs/config.export';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { resolve } from 'path/posix';
import { useCallback, useEffect } from 'react';


interface ResponseType {
  ok: boolean;
  error?: any;
}

export default function Kakao() {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;
 // const code = router.query
  //console.log(code)
  const baseUrl = Config().baseUrl;

  const loginHandler = useCallback(
    
    async (code: string | string[]) => { 
      // 백엔드에 전송2
      await axios.get(`${baseUrl}/login/kakao?code=${code}`).then((res) => console.log(res));
      
      //if (response.ok) { // 성공하면 홈으로 리다이렉트
        router.push('/');
     // } else { // 실패하면 에러 페이지로 리다이렉트
      //  router.push('/login');
     /// }
    },
    [router]
  );
 
// useEffect(async(code: string | string[]) => {
//     await axios.get(`${baseUrl}/login/kakao?code=${code}`).then((res) => {console.log(res)})
//         .catch((error) => {
//             console.log('kakaoLogin Failed');
//         });
//     router.push('/');
// }, []);

//   useEffect(() => {
//     if (authCode) {
//       loginHandler(authCode);
      
//       // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
//     } else if (kakaoServerError) { 
//       router.push('/login');
//     }
//   }, [loginHandler, authCode, kakaoServerError, router]);

  return (
          <h2>로그인 중입니다..</h2>
  );
};