import { HeaderAction } from "../header/Header";
import { Footer } from "../footer/Footer";
import config from "../../config";
import { NavLink } from "react-router-dom";

type layoutProps = {
  children?: React.ReactNode;
};

function DefaultLayout({ children }: layoutProps) {
  return (
    <div className=" flex flex-col items-center  ">
      <div className=" bg-[#fafafa] uppercase text-[14px] font-semibold tracking-wide flex w-full pl-[190px] py-[13px]">
        <div className="text-[#948c83]">
          <span>Welcome Guest!</span>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active after:w-[1px] after:border after:ml-[5px] px-[5px]"
                : "after:w-[1px] after:border after:ml-[5px] px-[5px]"
            }
            to={config.Routes.loginRegister}
          >
            Login
          </NavLink>
          <NavLink to={config.Routes.loginRegister}>Register</NavLink>
        </div>
      </div>
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
      ></HeaderAction>
      <div className="w-full"> {children} </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default DefaultLayout;
