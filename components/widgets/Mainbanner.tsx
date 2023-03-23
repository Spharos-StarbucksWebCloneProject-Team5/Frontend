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

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Mainbanner() {
  const [slideData, setSlideData] = useState<bannerInfoType[]>([]);

  useEffect(() => {
    axios
      .get("http://10.10.10.89:8081/api/v1/banner")
      .then((res) => {
        console.log(res.data.data);
        res.data.data.map(async (item: bannerInfoType) => {
          const { width, height } = await getImageSize(item.bannerImage);
          setSlideData((prev) => [
            ...prev,
            {
              bannerImage: item.bannerImage,
              eventId: item.eventId,
              recommendId: item.recommendId,
              regTime: item.regTime,
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
                      src={slide.bannerImage}
                      width={slide.width}
                      height={slide.height}
                      alt={slide.bannerImage}
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
