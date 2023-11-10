import React from "react";
import { Link } from "react-router-dom";

interface propsButton {
  title: string;
  a?: string;
}
export const ButtonDefault: React.FC<propsButton> = ({ title, a }) => {
  return (
    <div className="group">
      <div className="uppercase py-[10px] px-[30px] rounded-3xl">
        <button className="py-1 px-2 ">
          <Link to={"/singer-product"}>{title}</Link>
        </button>
      </div>
    </div>
  );
};
