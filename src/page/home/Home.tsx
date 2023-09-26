import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faEnvelope,
  faHeart,
  faRotate,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

import { SlideShow } from "../../components/slideshow/slideShow";
import { Button } from "../../components/button/ButtonSale";
import { blockItem } from "../../data/mock-blockitem";
import { listBlog } from "../../data/mock-listblog";
import { SlideShowLogo } from "../../components/slideshow/slideShowLogo";
import { listBanner } from "../../data/mock-listbanner";
import { TrendingProduct } from "../../components/trendingproduct/TrendingProduct";

export function Home() {
  return (
    <>
      <div className="wrapper">
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
          <TrendingProduct />

          <div className=" w-[1200px] flex justify-between -tracking-tighter mt-[40px] mb-[10px] ">
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
            <h5 className="mb-[10px] text-[13px] normal-case ">Up to 50%</h5>
            <div className="">
              <SlideShow />
            </div>
            <div className="flex w-full justify-around">
              {blockItem.map((items) => (
                <div className=" box-border w-[370px] bg-[#fafafa] p-[30px] pb-0">
                  <h3 className="mt-[10px] mb-[30px]">{items.name}</h3>
                  <div className="flex w-[310px]">
                    <div className="relative">
                      {items.filter.map((item) => (
                        <div className="w-full flex text-[13px]  mb-[30px]">
                          <img
                            className="w-[110px] h-[130px] mr-[10px]"
                            src={item.thumbnail}
                            alt="Lehoanganh"
                          ></img>
                          <div className="relative w-full">
                            <h4 className="pb-[5px] ">
                              <a className="font-semibold" href="/">
                                {item.title}
                              </a>
                            </h4>
                            <p className="mb-[10px] text-[#cc797f] font-bold">
                              {item.price} USD
                            </p>
                            <div className="flex absolute bottom-0 right-0">
                              <div className="group">
                                <div className="ct-buttonCirle">
                                  <FontAwesomeIcon
                                    className=" text-[20px] group-hover:text-[white] group-hover:duration-150 p-2"
                                    icon={faShoppingBag}
                                  />
                                </div>
                              </div>
                              <div className="group">
                                <div className="ct-buttonCirle">
                                  <FontAwesomeIcon
                                    className=" text-[20px] group-hover:text-[white] group-hover:duration-150 p-2"
                                    icon={faRotate}
                                  />
                                </div>
                              </div>
                              <div className="group">
                                <div className="ct-buttonCirle">
                                  <FontAwesomeIcon
                                    className=" text-[20px] group-hover:text-[white] group-hover:duration-150 p-2"
                                    icon={faHeart}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" blog-updates w-[1200px] flex flex-col items-center pt-[60px]">
            <h3 className=" mb-[0px] border-none">BLOG UPDATES</h3>
            <h5 className="mb-[60px] text-[13px] normal-case ">Our stories</h5>
            <div className="flex">
              {listBlog.map((item) => (
                <div className="w-[400px] h-[150px] px-[15px] flex -tracking-tighter">
                  <img
                    className="w-[170px] h-[150px] pr-[20px]"
                    src={item.thumbnail}
                    alt="Lehoanganh"
                  ></img>
                  <div className="media-body text-[12px]">
                    <h4 className="mb-[15px] font-semibold">
                      <a href="/">{item.title}</a>
                    </h4>
                    <div className="box-border">
                      <p className="mb-[15px] text-[#8090a1]">
                        {item.description}
                      </p>
                      <a
                        className="readmore text-[#cc797f] font-semibold "
                        href="/"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex fle-col justify-center items-center h-[350px] my-[70px] bg-[url(https://nouthemes.net/html/zorka/assets/images/home-bg-3.jpg)] bg-no-repeat bg-center">
          <div className="container text-[white]">
            <div className="text-center">
              <FontAwesomeIcon className="text-[30px]" icon={faEnvelope} />
            </div>
            <h3 className="m-auto my-[20px] tracking-widest">SUBSCRIBE</h3>
            <h5 className="text-center text-[12px] mb-[35px]">
              Get the latest news &amp; updates from Zorka
            </h5>
            <div className="text-center text-[12px] ">
              <form action="subscribe.php" method="post">
                <input
                  className="w-[250px] h-[42px] px-[10px] text-[black] text-center font-semibold rounded-3xl"
                  type="email"
                  name="your_email"
                  placeholder="YOUR EMAIL ADDRESS"
                />
                <button
                  className="ml-[25px] w-[120px] h-[42px] bg-[#cc797f] rounded-3xl hover:bg-[white] hover:text-[#cc797f] hover:border-[#cc797f] hover:border ct-hoverDefault  "
                  type="submit"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <SlideShowLogo />
        </div>
        <div className=" mediaOpen w-1200px flex justify-center py-[50px] border-t border-[#b5b5b5]">
          {listBanner.map((item) => (
            <div className="w-[370px] px-[40px] py-[30px] mx-[15px] bg-[white] border border-[#cc797f] ct-hoverDefault group">
              <div className="media flex ">
                <div className="media-left flex justify-center items-center ">
                  <FontAwesomeIcon
                    className="text-[49px] text-[#cc797f] pr-[20px] group-hover:text-[white] group-hover:transition-all group-hover:delay-150 group-hover:ease-in-out"
                    icon={item.icon}
                  />
                </div>
                <div className="media-body tracking-widest ">
                  <h4 className="mt-[5px]  font-semibold text-[13px]">
                    {item.title}
                  </h4>
                  <h5 className="my-[10px] text-[12px]">{item.slogan}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
