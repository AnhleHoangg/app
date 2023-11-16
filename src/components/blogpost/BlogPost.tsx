import { faClock, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const BlogPost: React.FC = () => {
  return (
    <div className="pb-[50px] mb-[40px] border-b">
      <div className="w-[full] h-[200px] flex justify-center items-center bg-[url('https://www.unlv.edu/sites/default/files/styles/1200_width/public/articles/main-images/Goldfield-Newspaper1_0.jpg?itok=5L5QT6f_')]">
        <h1 className="text-[white] uppercase text-[40px] tracking-wider font-bold">
          Blog In Lorka
        </h1>
      </div>
      <div className="w-screen md:w-[870px]">
        <h3 className="mb-[25px] border-none text-[36px]">
          <a href="single-post.html">Zorka Men Spring/Summer Vacation</a>
        </h3>
        <div className="box-border  w-fit h-[40px] border p-3 mb-[20px] text-[11px] rounded-3xl border-[#8d8d8d] text-[#8d8d8d]">
          <div className="w-[350px] flex justify-center">
            <span className="m-auto">
              <a href="/">
                <FontAwesomeIcon className="mr-[5px]" icon={faUser} />
                <i className="font-semibold">ADMIN</i>
              </a>
            </span>
            <span className="m-auto">
              <a href="/">
                <FontAwesomeIcon className="mr-[5px]" icon={faClock} />
                <i className="font-semibold"> JANUARY 15, 2015 </i>
              </a>
            </span>
            <span className="m-auto">
              <a href="/">
                <FontAwesomeIcon className="mr-[5px]" icon={faComment} />
                <i className="font-semibold"> 10 COMMENTS</i>
              </a>
            </span>
          </div>
        </div>
        <div className="my-[30px]">
          <img
            className=""
            src="https://nouthemes.net/html/zorka/assets/images/blog-img-4.jpg"
            alt="img"
          />
        </div>
        <div className="block mb-[30px] pr-5">
          Cras ut magna quis metus tristique vulputate. Ut a sapien scelerisque,
          fermentum lorem a, aliquet mi. Ut lobortis lorem nisl, vel euismod
          ligula ornare quis. In consectetur elit sed leo fringilla, a placerat
          ipsum mollis. Proin suscipit metus vitae lectus malesuada scelerisque.
          Quisque interdum malesuada nisi non accumsan. Suspendisse eget lorem
          libero.
        </div>
        <button className="px-[20px] pt-[5px] pb-[7px] border rounded-3xl bg-[#cc797f] text-web-100">
          <a className="text-[14px] h-fit " href="/baiviet">
            CONTINUE READING
          </a>
        </button>
       
      </div>
    </div>
  );
};
