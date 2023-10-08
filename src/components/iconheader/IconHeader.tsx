import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "../../config";

export const IconHeader: React.FC = () => {
  const numberCart = useSelector((state: any) => state.cart);

  return (
    <div>
      <div className="h-14 w-full mb-10 ">
        <div className="flex justify-around flex-row items-center ">
          <div className=" text-m text-gray-600 ">
            <FontAwesomeIcon
              className="px-2 cursor-pointer"
              icon={faFacebookF}
            />
            <FontAwesomeIcon className="px-2 cursor-pointer" icon={faTwitter} />
            <FontAwesomeIcon
              className="px-2 cursor-pointer"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="px-2 cursor-pointer"
              icon={faPinterestP}
            />
          </div>
          <div>
            <Link to="/">
              <img
                className="cursor-pointer"
                src="https://nouthemes.net/html/zorka/assets/images/logo.png"
                alt="/logo"
              ></img>
            </Link>
          </div>
          <div className=" md:w-[116px] text-center flex justify-center text-3xl text-gray-600 cursor-pointer relative group w-fit mx-[60px]">
            <Link className="flex" to={config.Routes.shoppingcart}>
              <FontAwesomeIcon className="z-0 " icon={faCartArrowDown} />
              <div className=" absolute top-[-10px] right-[28px] bg-[#cc797f] rounded-full text-[10px] text-[white] px-2 font-bold h-[21px] flex items-center group-hover:animate-bounce ">
                {numberCart.number}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
