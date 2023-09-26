import React from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faComment, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "swiper/modules";

export const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[1200px] py-[70px] flex">
        <div>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>

        <div className="px-[15px]">
          <aside className="mb-[50px]">
            <h4 className=" pb-[5px] border-b mb-[20px] ">GET CONNECTED</h4>
            <div className="w-full flex justify-between">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </aside>
          <aside className="mb-[50px]">
            <h4 className="pb-[5px] border-b mb-[20px] ">SEARCH THE BLOG</h4>
            <form className="flex items-center  w-fit h-[41px] border rounded-3xl px-[10px] ">
              <input
                className=" py-[5px] px-[10px] outline-none placeholder:italic focus:border-sky-500"
                type="text"
                placeholder="LET’S SEARCH"
              />
              <button className="w-[34px] p-[5px] " type="submit">
                <FontAwesomeIcon className="text-[17px]" icon={faSearch} />
              </button>
            </form>
          </aside>
          <aside className="mb-[50px]">
            <h4 className="pb-[5px] border-b mb-[20px] ">RECENT COMMENTS</h4>
            <ul className="mb-[10px] text-[#8d8d8d]">
              <li className="py-[10px] border-b flex items-center">
                <FontAwesomeIcon
                  className="text-[45px] px-[10px]"
                  icon={faComment}
                />
                <a className="text-[14px] font-semibold" href="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </li>
              <li className="py-[10px] border-b flex items-center">
                <FontAwesomeIcon
                  className="text-[45px] px-[10px]"
                  icon={faComment}
                />
                <a className="text-[14px] font-semibold" href="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </li>
              <li className="py-[10px] border-b flex items-center">
                <FontAwesomeIcon
                  className="text-[45px] px-[10px]"
                  icon={faComment}
                />
                <a className="text-[14px] font-semibold" href="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </a>
              </li>
            </ul>
          </aside>
          <aside className="">
            <h4 className="">POPULAR TAGS</h4>
            <ul className="">
              <li>
                <a href="blog.html">CLOTHES</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};
