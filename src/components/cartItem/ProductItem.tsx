import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRotate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import config from "../../config";

interface productItem {
  items?: {
    title: string;
    thumbnail: string;
    price: number;
    sale?: number;
  };
}

export const ProductItem: React.FC<productItem> = ({ items }) => {
  return (
    <div className="  w-[270px] text-sm mb-5 px-4">
      <div className=" m-1 relative">
        <Link to={config.Routes.singerproduct}>
          <img
            className="w-[270px] h-[360px] object-contain "
            src={items?.thumbnail}
            alt="img"
          />
        </Link>
        {/* <div className=" absolute top-0 right-0 bottom-0 object-contain   ">
          <div>
            <img
              alt="img"
              src="https://nouthemes.net/html/zorka/assets/images/product-img-4-thumb.jpg"
            ></img>
          </div>
        </div> */}
      </div>
      <div className=" my-4 flex flex-col items-center">
        <Link
          className="font-semibold text-xs"
          to={config.Routes.singerproduct}
        >
          {items?.title}
        </Link>
        <p className="mt-[10px] mb-[20px] text-[#cc797f] font-bold">
          {items?.price} USD
        </p>
        <div className=" h-[35px] box-border w-full flex justify-between c">
          <button
            className="flex items-center  border-2 p-3  border-[#c2c2c2]  rounded-3xl ct-hoverDefault "
            type="button"
          >
            <span className="font-bold">Add to Cart</span>
          </button>
          <div className="  flex gap-1 items-center justify-center ">
            <div className="group">
              <div className="w-[35px] h-[35px] border-2 border-[#c2c2c2] p-1 rounded-full flex justify-center items-center group-hover: ct-hoverDefault">
                <FontAwesomeIcon
                  className=" group-hover:text-[white] group-hover:duration-150"
                  icon={faRotate}
                />
              </div>
            </div>
            <div className="group">
              <div className="w-[35px] h-[35px] border-2 border-[#c2c2c2] p-1 rounded-full flex justify-center items-center group-hover: ct-hoverDefault">
                <FontAwesomeIcon
                  className=" group-hover:text-[white] group-hover:duration-150"
                  icon={faHeart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
