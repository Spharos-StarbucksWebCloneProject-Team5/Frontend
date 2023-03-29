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
export interface sizeType {
  width: number;
  height: number;
}

export default function Mainbanner() {
  const [slideData, setSlideData] = useState<bannerInfoType[]>();

  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/api/events/image`)
      .then((res) => {
        console.log(res.data);
        setSlideData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getSize = (url: string) => {
    let myImage = {
      width: 0,
      height: 0,
    };
    getImageSize(url).then((res) => {
      myImage.width = res.width;
      myImage.height = res.height;
    });
    return myImage;
  };

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
          {slideData &&
            slideData.map((slide: bannerInfoType, idx: number) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="event-banner__item">
                    <div className="event-banner__item__img">
                      <Image
                        src={slide.titleImage}
                        width={getSize(slide.titleImage).width}
                        height={getSize(slide.titleImage).height}
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
