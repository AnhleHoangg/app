import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

import { SlideShow } from "../../components/slideshow/slideShow";
import { Button } from "../../components/button/Button";
import { ProductItem } from "../../components/cartItem/ProductItem";
import { listItem } from "../../data/mock-listItem";

export function Home() {
  return (
    <>
      <div className="">
        <img
          className="w-full mt-[10px]"
          src="https://nouthemes.net/html/zorka/assets/images/slideshow1.jpg"
          alt="Lehoanganh"
        ></img>
        <div className="">
          <Button></Button>
        </div>
        <div className="flex flex-col justify-center mt-[60px] items-center uppercase tracking-widest ">
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
          <div className=" w-[1200px] flex justify-between -tracking-tighter mt-[40px] mb-[10px]">
            <div className="box-border w-[570px] h-[220px] bg-[url('https://nouthemes.net/html/zorka/assets/images/home-bg-1.jpg')] bg-center bg-cover">
              <a className=" " href="/">
                <h3 className="border-none w-full h-full flex justify-center items-center font-bold text-[30px] text-[white]">
                  Zorka
                  <br />
                  Fashion
                  <br />
                  Store
                </h3>
              </a>
            </div>
            <div className=" flex justify-center items-center box-border w-[570px] h-[220px] bg-[url('https://nouthemes.net/html/zorka/assets/images/home-bg-2.jpg')] bg-center bg-cover ">
              <a href="/">
                <div className="w-ful h-ful flex items-center border-4 border-[white]">
                  <div className="h-fit box-border border-r-4 border-[white]">
                    <FontAwesomeIcon
                      className="text-[41px] text-[white] p-3"
                      icon={faAnchor}
                    />
                  </div>
                  <div className=" h-full text-[white]">
                    <h3 className=" border-none m-auto p-0 font-bold text-[25px] ">
                      50% OFF
                    </h3>
                    <h5 className="mx-[5px]">EVERY TUESDAY</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className=" w-[1200px] flex flex-col justify-center mt-[60px] items-center uppercase tracking-widest">
            <h3 className=" mb-[0px] border-none">Sale Off</h3>
            <h5 className="mb-[30px] text-[13px] normal-case ">Up to 50%</h5>
            <div className="">
              <SlideShow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
