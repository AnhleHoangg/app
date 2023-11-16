import { useState } from "react";
import { Slider, Box } from "@mantine/core";
import { listitemhighrate } from "../../data/mock-listitemhighrate";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { listTag } from "../../page/page/Page";
import { ProductCategories } from "./ProductCategories";

export const Filter = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="text-[#8d8d8d]">
      <div>
        <h1 className="text-[20px] uppercase my-[20px] py-[20px] border-b font-semibold tracking-wide">
          FILTER BY PRICE
        </h1>
        <Box maw={1000} mx="auto">
          <Slider
            color="gray"
            thumbSize={20}
            max={1000}
            step={10}
            value={value}
            onChange={setValue}
          />
          <div className="flex justify-between items-center my-[10px]">
            <div className=" text-[12px] my-[20px]">
              Price: <span className="from">£0</span> —
              <span className="ml-[5px]">£{value}</span>
            </div>
            <button className="h-[36px] text-[12px] text-[white] py-[5px] px-[25px] uppercase bg-[black] rounded-3xl ct-hoverDefault">
              Filter
            </button>
          </div>
        </Box>
      </div>
      <div>
        <h1 className="text-[20px] uppercase mb-[20px] py-[20px] border-b font-semibold tracking-wide">
          PRODUCT CATEGORIES
        </h1>
        <div>
          <ProductCategories />
        </div>
      </div>
      <div>
        <h1 className="text-[20px] uppercase my-[20px] py-[20px] border-b font-semibold tracking-wide">
          TOP RATED PRODUCTS
        </h1>
        {listitemhighrate.map((item: any) => (
          <div className="flex mb-[10px] text-[#8d8d8d]">
            <img
              className="w-[90px] h-[120px]"
              src={item.link}
              alt="Lehoanganh"
            ></img>
            <div className="flex flex-col ml-[10px]">
              <NavLink to={item.to}>
                <span className="text-[#b5676d] text-[14px] normal-case font-medium">
                  {item.title}
                </span>
              </NavLink>
              <span className="flex text-[12px] text-[#edc74e] my-[8px]">
                {Array.from({ length: item.star }, (_, index) => index + 1).map(
                  () => (
                    <FontAwesomeIcon icon={faStar} />
                  )
                )}
              </span>
              <span className="text-[14px]">£{item.price}.00</span>
            </div>
          </div>
        ))}
      </div>
      <aside>
        <h4 className="text-[20px] uppercase my-[20px] py-[20px] border-b font-semibold tracking-wide">
          POPULAR TAGS
        </h4>
        <ul className=" max-w-[270px] block uppercase text-[#8d8d8d]">
          {listTag.map((item) => (
            <li
              key={item.title}
              className=" w-fit inline-block px-[12px] py-[7px] border  text-[10px] mr-3 mt-3 ct-hoverDefault"
            >
              <a className="font-semibold" href="blog.html">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
