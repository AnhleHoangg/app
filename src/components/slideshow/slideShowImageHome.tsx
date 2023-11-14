import React from "react";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/parallax";
import { listImage } from "../../data/mock-listimage";
import { NavLink } from "react-router-dom";

export const SlideShowImageHome: React.FC = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        parallax={true}
        modules={[Autoplay, Parallax]}
        className="mySwiper"
      >
        {listImage.map((image) => (
          <SwiperSlide>
            <div
              className="swiper h-[700px] text-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div
                className="parallax-bg"
                data-swiper-parallax-duration="2000"
                data-swiper-parallax="-50%"
              ></div>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className=" h-[700px] flex flex-col justify-center items-center">
                    <div
                      data-swiper-parallax="-200"
                      data-swiper-parallax-duration="2000"
                    >
                      <h1 className="text-[27px] font-bold">{image.title}</h1>
                    </div>
                    <div
                      data-swiper-parallax="-100"
                      data-swiper-parallax-duration="1000"
                    >
                      <p className="font-semibold text-[50px]">
                        {image.slogant}
                      </p>
                    </div>
                    <div
                      data-swiper-parallax-duration="1000"
                      data-swiper-parallax-scale="0.5"
                    >
                      <NavLink to={image.link}>
                        <button className="mt-[20px] ct-hoverDefault py-2 px-6 rounded-full bg-web-100 font-semibold">
                          Shop Now
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                ...
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
