import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { logo } from "../../data/mock-logo";

export const SlideShowLogo: React.FC = () => {
  return (
    <div className="py-[50px] w-[1200px]  cursor-pointer">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={true}
        modules={[Autoplay, Parallax]}
        className="mySwiper"
      >
        {logo.map((item) => (
          <div key={item.src} className="w-[1200px] px-[50px] pb-[30px]">
            <SwiperSlide>
              <div className="flex justify-center">
                <img src={item.src} alt="Lehoanganh"></img>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
