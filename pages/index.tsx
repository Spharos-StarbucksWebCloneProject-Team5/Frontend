import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import RecommandWidget from "@/components/widgets/RecommandWidget";
import ChunsikWidget from "@/components/widgets/ChunsikWidget";
import { useEffect, useState } from "react";
//import { mainEventListType } from "@/types/main/eventDataType";
import Config from "@/configs/config.export";
import axios from "axios";
import { eventType } from "@/types/main/eventDataType";
import Mainbanner from "@/components/widgets/Mainbanner";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const [eventListData, setEventListData] = useState<eventType[]>();
  // const [chunsikListData, setChunsikListData] = useState<eventType[]>();

  const baseUrl = Config().baseUrl;
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const router = useRouter();

  useEffect(() => {
    axios(`${baseUrl}/v1/api/events/all`).then((res) => {
      setEventListData(res.data);
    });
  }, []);

  

  return (
    <>
    <link rel="stylesheet" href="assets/css/style.css" />
      
      <Head>
        <title>StarBucks Clone Site</title>
      </Head>
      
      <Mainbanner />
      {eventListData &&
        eventListData.map((event: eventType, index) =>
          eventListData.length === index + 1 ? (
            <ChunsikWidget key={event.id} data={event} />
          ) : (
            <RecommandWidget key={event.id} data={event} />
          )
        )}
    </>
  );
};

export default Home;
