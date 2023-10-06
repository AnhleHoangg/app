import { Pagination, Select } from "@mantine/core";
import React from "react";
import { listItem } from "../../data/mock-listItem";
import { ProductItem } from "../../components/cartItem/ProductItem";

export const Shop: React.FC = () => {
  return (
    <div className="uppercase flex flex-col items-center pt-[70px] ">
      <div className="w-[1200px] flex flex-col items-center">
        <h1 className="text-[40px] mb-[70px] tracking-widest font-semibold ">
          Shop
        </h1>
        <div className="w-full mb-[30px]">
          <div className=" flex justify-center items-center md:justify-between ">
            <div className="text-[11px] px-[50px]">
              SHOWING 1–12 OF 100 RESULTS
            </div>
            <div className="px-[50px]">
              <Select
                placeholder="DEFAULT SORTING"
                color="#fafafa"
                size="sm"
                radius={"10px"}
                limit={2}
                data={[
                  "DEFAULT SORTING",
                  "Price: Lowest First",
                  "Price: Highest First",
                  "Best seller",
                ]}
                className="mantine-Select-input"
              ></Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start">
            {listItem.map((item) => (
              <div className=" md:flex w-[600px]">
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
