import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iconPay } from "../../data/mock-data";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col ml-[50px] md:ml-0">
      <div className=" pt-[70px] pb-[30px] w-screen bg-web-100 flex md:flex-row flex-col justify-around uppercase text-xs tracking-widest">
        <div className=" flex-[1/4] px-[15px]">
          <h3>Location</h3>
          <div className="pt-2 mb-[30px] font-semibold">
            113/6A Đông Bắc, Đông Hưng Thuận, Quận 12,
            <br /> Thành Phố Hồ Chí Minh.
          </div>
          <p className="box-border mb-[10px] ">
            Tel.
            <a className="p-[3px] hover:text-[#cc797f]" href="Tel.0927993249">
              (+84) 927993249
            </a>
          </p>
          <p className="box-border mb-[10px]">
            Email.
            <a
              className="p-[3px] hover:text-[#cc797f]"
              href="mailto.kallickanhle@gmai.com"
            >
              kallickanhle@gmail.com
            </a>
          </p>
          <div className="flex justify-around mt-[20px] text-base ">
            <a href="/">
              <FontAwesomeIcon
                className="hover:text-[#cc797f]"
                icon={faFacebookF}
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                className="hover:text-[#cc797f]"
                icon={faTwitter}
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                className="hover:text-[#cc797f]"
                icon={faInstagram}
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                className="hover:text-[#cc797f]"
                icon={faPinterestP}
              />
            </a>
          </div>
        </div>
        <div className="flex-[1/4] px-[15px]">
          <h3>Help</h3>
          <ul className="pt-2">
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">How To Buy</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">General Information</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">Payment</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">Shipping</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">Returns</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">Exchanges</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">Gift Card</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">My Account</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">Watches</a>
            </li>
          </ul>
        </div>
        <div className="flex-[1/4] px-[15px]">
          <h3>Contact</h3>
          <ul className="pt-2">
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">ABOUT US</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">OFFICES</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">STORES</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">WORK WITH US</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="flex-[1/4] px-[15px]">
          <h3>Company</h3>
          <ul className="pt-2">
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f] ">
              <a href="/">Company</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">OFFICES</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">STORES</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">WORK WITH US</a>
            </li>
            <li className="mb-[10px] p-[3px] hover:text-[#cc797f]">
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row box-border bg-web-100 pt-[50px] justify-around">
        <span className="mt-[10px] text-xs mb-[10px]">
          ©COPYRIGHT 2015.THEME MADE BY THEMEMOVE
        </span>
        <ul className="flex  mt-[10px] mb-[10px]  ">
          {iconPay.map((item) => (
            <li key={item.thumNail} className=" px-2 cursor-pointer ">
              <img src={item.thumNail} alt="Lehoanganh"></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
