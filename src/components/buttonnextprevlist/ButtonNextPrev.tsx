import React from "react";
import { useSwiper } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export const ButtonNextPrev: React.FC = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center">
      <button
        className="mr-[5px] flex justify-center items-center border rounded-full w-[36px] h-[36px] ct-hoverbtn-next-prev"
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon className="p-[10px]" icon={faArrowCircleLeft} />
      </button>
      <button
        className="mr-[5px] flex justify-center items-center border rounded-full w-[36px] h-[36px] ct-hoverbtn-next-prev"
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon className="p-[10px]" icon={faArrowCircleRight} />
      </button>
    </div>
  );
};
