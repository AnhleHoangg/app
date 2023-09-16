import { HeaderAction } from "../header/Header";

type layoutProps = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: layoutProps) {
  return (
    <div className="w-3/4 flex flex-col">
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
    </div>
  );
}

export default DefaultLayout;
