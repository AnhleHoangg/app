import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { ProductItem } from "../cartItem/ProductItem";
export const SlideShow: React.FC = () => {
  return (
    <div className="pt-[50px] w-[1200px] cursor-pointer">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
