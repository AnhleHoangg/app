import React, { useState } from "react";
import { BreadCrums } from "../../components/breadCrums/BreadCrums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { listSocial } from "../page/Page";
import { Showproduct } from "../../components/showproduct/Showproduct";
import { SlideShow } from "../../components/slideshow/slideShow";

export const SingerProduct = () => {
  const [upDateQuanlity, setUpDateQuanlity] = useState(1);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center pt-[0px] md:pt-[70px]">
        <div>
          <Showproduct />
        </div>
        <div className="w-[600px] px-[15px] mt-[25px] md:mt-0">
          <div className="text-[12px]">
            <BreadCrums />
          </div>
          <h2 className="mt-[30px] mb-[40px] text-[36px] font-bold">
            Blue Stripes Summer Supreme Top
          </h2>
          <div>
            <span className="mr-[20px]">30 Reviews</span>
            {[1, 2, 3, 4].map((index) => (
              <span key={index}>
                <FontAwesomeIcon className="text-[#fdd34d]" icon={faStar} />
              </span>
            ))}
          </div>
          <div className="my-[30px] text-[36px] text-[#cc797f] font-bold">
            $290.95
          </div>
          <div className=" py-[10px] flex flex-col">
            <div className=" flex ">
              <div className="w-[120px] px-[5px] h-[36px] border flex justify-between rounded-3xl mr-[10px]">
                <button
                  onClick={(e) => {
                    setUpDateQuanlity(upDateQuanlity - 1);
                  }}
                  className="minus-btn p-[2px]"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="flex items-center justify-center">
                  {upDateQuanlity}
                </span>
                <button
                  onClick={(e) => {
                    setUpDateQuanlity(upDateQuanlity + 1);
                  }}
                  className="plus-btn p-[2px]"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="mb-[20px]">
                <button className="py-[8px] px-[40px] bg-[#cc797f] rounded-3xl text-[white] ct-hoverDefault">
                  Add To Cart
                </button>
              </div>
            </div>
            <Link className="flex items-center mb-[20px]" to="/">
              <FontAwesomeIcon
                className="text-[15px] p-[10px] border rounded-full mr-2"
                icon={faHeart}
              />
              Add To Wishlist
            </Link>
            <div>
              <ul>
                <li className="pb-[10px] mb-[10px] border-b">
                  SKU: 123456789
                  <Link to="/"></Link>
                </li>
                <li className="pb-[10px] mb-[10px]  border-b">
                  Categories:
                  <Link to="/">Jackets & Coats</Link>,
                  <Link to="/">Men’s Clothing</Link>,
                  <Link to="/">Pants & Chinos</Link>.
                </li>
                <li className="pb-[10px] mb-[10px]  border-b">
                  Tags:
                  <Link to="/">Shop</Link>,<Link to="/"> Theme</Link>,
                  <Link to="/">WooCommerce</Link>.
                </li>
              </ul>
              <div className="flex items-center">
                <h4 className="mr-[20px]">SHARE THIS:</h4>
                <ul>
                  {listSocial.map((item) => (
                    <li
                      key={item.link}
                      className=" w-[40px] h-[40px] inline-block p-[8px] item-center mr-[5px] border rounded-full text-[#8d8d8d] ct-hoverDefault"
                    >
                      <a
                        className="flex justify-center items-center"
                        href={item.link}
                      >
                        <FontAwesomeIcon
                          className="flex justify-center items-center text-[22px]"
                          icon={item.icon}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] pt-[25px]">
        <div className="flex flex-col justify-between items-center">
          <h3 className=" tracking-[7px] font-bold ">RELATED PRODUCTS</h3>
        </div>
        <div>
          <SlideShow chirldren={false} />
        </div>
      </div>
    </div>
  );
};
