import { faClock, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const BlogPost = () => {
  return (
    <div className=" pb-[50px] mb-[40px] border-b">
      <div className="w-[870px]">
        <h3 className="mb-[25px] border-none text-[36px]">
          <a href="single-post.html">Zorka Men Spring/Summer Vacation</a>
        </h3>
        <div className="box-border w-fit h-[40px] border p-3 mb-[20px] text-[11px] rounded-3xl border-[#8d8d8d] text-[#8d8d8d]">
          <span className="mr-[30px]">
            <a href="/">
              <FontAwesomeIcon className="mr-[5px]" icon={faUser} />
              <i className="font-semibold">ADMIN</i>
            </a>
          </span>
          <span className="mr-[30px]">
            <a href="/">
              <FontAwesomeIcon className="mr-[5px]" icon={faClock} />
              <i className="font-semibold"> JANUARY 15, 2015 </i>
            </a>
          </span>
          <span className="mr-[30px]">
            <a href="/">
              <FontAwesomeIcon className="mr-[5px]" icon={faComment} />
              <i className="font-semibold"> 10 COMMENTS</i>
            </a>
          </span>
        </div>
        <div className="my-[30px]">
          <img
            className=""
            src="https://nouthemes.net/html/zorka/assets/images/blog-img-4.jpg"
            alt="img"
          />
        </div>
        <div className="mb-[30px]">
          Cras ut magna quis metus tristique vulputate. Ut a sapien scelerisque,
          fermentum lorem a, aliquet mi. Ut lobortis lorem nisl, vel euismod
          ligula ornare quis. In consectetur elit sed leo fringilla, a placerat
          ipsum mollis. Proin suscipit metus vitae lectus malesuada scelerisque.
          Quisque interdum malesuada nisi non accumsan. Suspendisse eget lorem
          libero.
        </div>
        <button className="px-[20px] pt-[5px] pb-[7px] border rounded-3xl bg-[#cc797f] text-web-100">
          <a className="text-[14px] h-fit " href="/">
            CONTINUE READING
          </a>
        </button>
      </div>
    </div>
  );
};
