import React, { useState } from "react";
import { listItem } from "../../data/mock-listItem";
import { ProductItem } from "../cartItem/ProductItem";

export const TrendingProduct: React.FC = () => {
  const [subItems, setSubItems] = useState(listItem[0]);
  const handleId = (id: number) => {
    setSubItems(listItem[id]);
  };
  return (
    <div className="box-border lg:w-[1200px] h-fit ">
      <div className="w-full text-center mb-[20px]">
        <div className="pb-[10px] mb-[5px] ">
          <div className=" mb-[10px] select-none">
            {listItem.map((item) => {
              return (
                <span
                  key={item.id}
                  className=" inline-block mx-[20px] hover:text-[#cc797f] cursor-pointer items-center"
                  onClick={() => handleId(item.id)}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
          <div className=" grid grid-cols-2 items-center lg:flex lg:flex-row ">
            {subItems.item.map((item) => (
              <div key={item.id} className=" md:px-[15px] px-[0px]">
                <ProductItem items={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
