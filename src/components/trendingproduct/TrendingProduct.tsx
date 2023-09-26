import React, { useState } from "react";
import { listItem } from "../../data/mock-listItem";
import { ProductItem } from "../cartItem/ProductItem";

export const TrendingProduct: React.FC = () => {
  const [subItems, setSubItems] = useState(listItem[0]);
  const handleId = (id: number) => {
    setSubItems(listItem[id]);
  };
  return (
    <div>
      <div className=" box-border w-[1200px] h-fit ">
        <div className="w-full text-center mb-[20px]">
          <div className="pb-[10px] mb-[5px] ">
            <div className="mb-[10px] select-none">
              {listItem.map((item) => {
                return (
                  <span
                    id="titleHotTrend"
                    key={item.id}
                    className="mx-[20px] hover:text-[#cc797f] cursor-pointer"
                    onClick={() => handleId(item.id)}
                  >
                    {item.title}
                  </span>
                );
              })}
            </div>
            <div className=" flex ">
              {subItems.item.map((item) => (
                <div key={item.title} className="px-[15px] ">
                  <ProductItem items={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
