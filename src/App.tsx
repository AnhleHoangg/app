import React from "react";
import { HeaderAction } from "./components/header/Header";

function App() {
  return (
    <div className="">
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
    </div>
  );
}

export default App;
