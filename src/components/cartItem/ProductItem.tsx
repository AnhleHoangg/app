import React from "react";
import { ButtonDefault } from "./ButtonDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRotate } from "@fortawesome/free-solid-svg-icons";

interface productItem {}
{
  /* <div className="w-[270px] h-[360px] m-6">
        <a>
          <img
            className="w-[270px] h-[360px] object-contain"
            src="https://marketplace.canva.com/EAFO_G5Kocw/1/0/450w/canva-m%C3%A0u-be-%C4%91%E1%BB%93ng-h%E1%BB%93-c%C3%A1t-h%C3%ACnh-n%E1%BB%81n-nh%E1%BA%AFc-nh%E1%BB%9F-c%E1%BA%A5t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-e89075KBGQE.jpg"
          ></img>
        </a>
        <div className="flex flex-col items-center">
          <a className="hove: text-red-400"> Sản Phẩm </a>
          <span></span>
        </div>
        <div className="flex justify-between">
          <ButtonDefault title=" Add to cart"></ButtonDefault>
          <ButtonDefault title=""></ButtonDefault>
        </div>
      </div> */
}

export const ProductItem: React.FC<productItem> = (props) => {
  return (
    <div className="  w-[270px] text-sm mb-5 px-4">
      <div className=" m-1 relative">
        <a href="">
          <img
            className="w-[270px] h-[360px] object-contain "
            src="https://marketplace.canva.com/EAFO_G5Kocw/1/0/450w/canva-m%C3%A0u-be-%C4%91%E1%BB%93ng-h%E1%BB%93-c%C3%A1t-h%C3%ACnh-n%E1%BB%81n-nh%E1%BA%AFc-nh%E1%BB%9F-c%E1%BA%A5t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-e89075KBGQE.jpg"
            alt="img"
          />
        </a>
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
        <a className="font-medium " href="">
          UTILITY JACKET
        </a>
        <p className="mt-[10px] mb-[20px] text-[#cc797f] font-bold">
          189.99 USD
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
