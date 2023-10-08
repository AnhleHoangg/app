import { HeaderAction } from "../header/Header";
import { Footer } from "../footer/Footer";
import config from "../../config";
import { LoginHeader } from "../../components/loginheader/LoginHeader";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconHeader } from "../../components/iconheader/IconHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

type layoutProps = {
  children?: React.ReactNode;
};

function DefaultLayout({ children }: layoutProps) {
  const [menu, setMenu] = useState(true);
  return (
    <div className="grid grid-cols-1 overflow-x-hidden">
      <div className=" flex flex-col items-center relative">
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="flex-col">
            <div className="w-[full] flex justify-center bg-[#fafafa]">
              <LoginHeader />
            </div>
            <div className="bg-[#fafafa] flex-col relative">
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
                className="w-[full] absolute right-0 cursor-pointer"
              >
                {menu ? (
                  <FontAwesomeIcon
                    className="md:hidden  text-[50px] m-[10px] hover:text-[#e67880]"
                    icon={faBars}
                  />
                ) : (
                  <>
                    <div className="bg-[#fafafa]">
                      <FontAwesomeIcon
                        className="md:hidden  text-[50px] m-[10px] hover:text-[#e67880]"
                        icon={faXmark}
                      />
                    </div>
                    <div className="w-screen h-[220px] py-[10px] bg-[#fafafa] flex-col uppercase font-bold">
                      <div className="w-[full] h-[50px] py-[5px] flex justify-center items-center ct-hoverDefault">
                        <Link
                          className="w-[full] h-[full] text-[20px]"
                          to={config.Routes.home}
                        >
                          Home
                        </Link>
                      </div>
                      <div className="w-[full] h-[50px] py-[5px] flex justify-center items-center ct-hoverDefault">
                        <Link
                          className="w-[full] h-[full] text-[20px]"
                          to={config.Routes.shop}
                        >
                          Shop
                        </Link>
                      </div>
                      <div className="w-[full] h-[50px] py-[5px] flex justify-center items-center ct-hoverDefault">
                        <Link
                          className="w-[full] h-[full] text-[20px]"
                          to={config.Routes.page}
                        >
                          Pages
                        </Link>
                      </div>
                      <div className="w-[full] h-[50px] py-[5px] flex justify-center items-center ct-hoverDefault">
                        <Link
                          className="w-[full] h-[full] text-[20px]"
                          to={config.Routes.contact}
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </button>
              <div className="md:hidden pb-[5px] pt-[7px]">
                <IconHeader />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <HeaderAction
              links={[
                {
                  label: "Home",
                  link: config.Routes.home,
                },
                {
                  label: "Shop",
                  link: config.Routes.shop,
                },
                {
                  label: "Page",
                  link: config.Routes.page,
                },
                {
                  label: "Contact",
                  link: config.Routes.contact,
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full mt-[180px] z-0">{children}</div>
        <div className="w-[full]">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
