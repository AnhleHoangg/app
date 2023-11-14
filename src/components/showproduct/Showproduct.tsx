import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { listProductSinger } from "../../data/mock-listproduct-singer";
import { listProductSingerSmall } from "../../data/mock-listproduct-singer-small";
import { ButtonNextPrev } from "../buttonnextprevlist/ButtonNextPrev";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

export const Showproduct: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="w-[600px] px-[15px]">
      <Swiper className="w-[570px] h-[760px] mb-[20px]" loop={true}>
        {listProductSinger.map((item) => (
          <SwiperSlide onClick={open}>
            <img key={item.thumbnail} src={item.thumbnail} alt="LeHoangAnh" />
            <Modal opened={opened} onClose={close}>
              <img key={item.thumbnail} src={item.thumbnail} alt="LeHoangAnh" />
            </Modal>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper loop={true} spaceBetween={30} slidesPerView={6}>
        {listProductSingerSmall.map((item) => (
          <SwiperSlide>
            <img key={item.thumbnail} src={item.thumbnail} alt="LeHoangAnh" />
          </SwiperSlide>
        ))}
        <div className="mt-[15px]">
          <ButtonNextPrev />
        </div>
      </Swiper>
    </div>
  );
};
