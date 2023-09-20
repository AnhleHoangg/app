import React from "react";

interface propsButton {
  title: string;
}

export const ButtonDefault: React.FC<propsButton> = ({ title }) => {
  return (
    <div className="group">
      <div className="box-border outline rounded-xl hover: bg-red-400 ">
        <button className="py-1 px-2 group-hover: block">{title}</button>
      </div>
    </div>
  );
};
