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

const Home: NextPageWithLayout = () => {
  const [eventListData, setEventListData] = useState<eventType[]>();
  const [chunsikListData, setChunsikListData] = useState<eventType[]>();

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios(`${baseUrl}/v1/api/events/all`).then((res) => {
      setEventListData(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>StarBucks Clone Site</title>
      </Head>
      <Mainbanner />
      {eventListData &&
        eventListData.map((event: eventType) =>
          event.eventId === 7 ? (
            <ChunsikWidget key={event.id} data={event} />
          ) : (
            <RecommandWidget key={event.id} data={event} />
          )
        )}
    </>
  );
};

export default Home;
