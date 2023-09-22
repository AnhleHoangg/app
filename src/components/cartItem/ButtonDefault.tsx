import React from "react";

interface propsButton {
  title: string;
}

export const ButtonDefault: React.FC<propsButton> = ({ title }) => {
  return (
    <div className="group">
      <div className="uppercase py-[10px] px-[30px] rounded-3xl">
        <button className="py-1 px-2 ">{title}</button>
      </div>
    </div>
  );
};
