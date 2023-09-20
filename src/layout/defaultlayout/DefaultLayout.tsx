import { link } from "fs";
import { HeaderAction } from "../header/Header";
import { Footer } from "../footer/Footer";

type layoutProps = {
  children?: React.ReactNode;
};

function DefaultLayout({ children }: layoutProps) {
  return (
    <div className=" flex flex-col items-center  ">
      <HeaderAction
        links={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Shop",
            link: "/",
          },
          {
            label: "Blog",
            link: "/",
          },
          {
            label: "Pages",
            link: "/",
          },
          {
            label: "Contact",
            link: "/",
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
