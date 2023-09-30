import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { ProductItem } from "../cartItem/ProductItem";
import { listproduct } from "../../data/mock-listproduct";
import { ButtonNextPrev } from "../buttonnextprevlist/ButtonNextPrev";

type children = {
  chirldren?: boolean;
};

export const SlideShow: React.FC<children> = (props) => {
  return (
    <div className=" py-[50px] w-[1200px] cursor-pointer relative ">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={props.chirldren}
        watchOverflow={true}
        modules={[Pagination, Navigation]}
      >
        <div>
          <ButtonNextPrev />
        </div>
        {listproduct.map((item) => (
          <div>
            <SwiperSlide>
              <ProductItem items={item} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
