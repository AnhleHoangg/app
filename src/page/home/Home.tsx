import { Button } from "../../components/button/Button";
import { ProductItem } from "../../components/cartItem/ProductItem";
import { listItem } from "../../data/mock-listItem";

export function Home() {
  return (
    <>
      <div>
        <img
          className="w-full h-full"
          src="https://nouthemes.net/html/zorka/assets/images/slideshow1.jpg"
          alt="Lehoanganh"
        ></img>
        <div className="">
          <Button></Button>
        </div>
        <div className="flex flex-col justify-center mt-20 items-center uppercase -tracking-tight ">
          <h3 className="mb-[0px] border-none">Trendy clothing</h3>
          <h5 className="mb-[30px] text-[13px] normal-case ">Trending</h5>
          <div className=" box-border w-[1200px] h-fit">
            <div className="w-full text-center mb-[20px]">
              <div className="pb-[10px] mb-[5px] ">
                <span className=" mx-[20px] hover:text-[#cc797f] cursor-pointer">
                  FEATURES
                </span>
                <span className=" mx-[20px] hover:text-[#cc797f] cursor-pointer">
                  FEATURES
                </span>
                <span className=" mx-[20px] hover:text-[#cc797f] cursor-pointer">
                  FEATURES
                </span>
                <span className=" mx-[20px] hover:text-[#cc797f] cursor-pointer">
                  FEATURES
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
