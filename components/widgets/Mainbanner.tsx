import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import axios from "axios";
import { getImageSize } from "react-image-size";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerInfoType } from "@/types/main/mainBannerType";
import Config from "@/configs/config.export";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Mainbanner() {
  const [slideData, setSlideData] = useState<bannerInfoType[]>([]);

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/api/events/image`)
      .then((res) => {
        console.log(res.data);
        res.data.map(async (item: bannerInfoType) => {
          const { width, height } = await getImageSize(item.titleImage);
          setSlideData((prev) => [
            ...prev,
            {
              id: item.id,
              eventId: item.eventId,
              name: item.name,
              description: item.description,
              titleImage: item.titleImage,
              width: width,
              height: height,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="event-banner">
      <div className="event-banner">
        <Swiper
          className="banner"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: false }}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {slideData.map((slide: bannerInfoType, idx: number) => {
            return (
              <SwiperSlide key={idx}>
                <div className="event-banner__item">
                  <div className="event-banner__item__img">
                    <Image
                      src={slide.titleImage}
                      width={slide.width}
                      height={slide.height}
                      alt={slide.description}
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
