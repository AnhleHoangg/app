import { Pagination, Select } from "@mantine/core";
import React from "react";
import { listItem } from "../../data/mock-listItem";
import { ProductItem } from "../../components/cartItem/ProductItem";
import { Filter } from "../../components/fillter/Fillter";

export const Shop: React.FC = () => {
  return (
    <div className="uppercase flex flex-col items-center pt-[25px]">
      <div className="flex justify-center items-center w-full h-[300px] bg-[url('https://mcdn.coolmate.me/uploads/October2021/Fashion_Week_02.jpg')] bg-center bg-cover mb-[30px]">
        <h1 className="text-[40px] text-[white] mb-[70px] tracking-widest font-semibold">
          Shop
        </h1>
      </div>
      <div className="w-full md:w-[1200px] flex items-center justify-between">
        <div className=" md:w-[20%] hidden md:block">
          <Filter />
        </div>
        <div className=" md:w-[75%] w-[full]">
          <div className=" mx-[20px] flex items-center justify-between">
            <span className="text-[11px]">SHOWING 1–12 OF 100 RESULTS</span>
            <div className="">
              <Select
                placeholder="DEFAULT SORTING"
                size="sm"
                data={[
                  "DEFAULT SORTING",
                  "Price: Lowest First",
                  "Price: Highest First",
                  "Best seller",
                ]}
              ></Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start overflow-hidden">
            {listItem.map((item) => (
              <div key={item.id} className="md:flex w-screen">
                {item.item.map((item) => (
                  <div
                    key={item.title}
                    className="px-[15px] w-fit inline-block "
                  >
                    <ProductItem items={item} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mb-3 mt-[35px]">
            <Pagination total={9} color="gray" radius="9999px" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
