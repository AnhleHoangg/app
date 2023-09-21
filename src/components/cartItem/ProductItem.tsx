import React from "react";
import { ButtonDefault } from "./ButtonDefault";

interface productItem {}

export const ProductItem: React.FC<productItem> = (props) => {
  return (
    <>
      <div className="w-[270px] h-[360px]">
        <a>
          <img
            className="w-[270px] h-[360px] object-contain"
            src="https://marketplace.canva.com/EAFO_G5Kocw/1/0/450w/canva-m%C3%A0u-be-%C4%91%E1%BB%93ng-h%E1%BB%93-c%C3%A1t-h%C3%ACnh-n%E1%BB%81n-nh%E1%BA%AFc-nh%E1%BB%9F-c%E1%BA%A5t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-e89075KBGQE.jpg"
          ></img>
        </a>
        <div className="flex flex-col items-center">
          <a className="hove: text-red-400"> Sản Phẩm </a>
          <span>199 USD</span>
        </div>
        <div className="flex justify-between">
          <ButtonDefault title=" Add to cart"></ButtonDefault>
          <ButtonDefault title=""></ButtonDefault>
        </div>
      </div>
    </>
  );
};
