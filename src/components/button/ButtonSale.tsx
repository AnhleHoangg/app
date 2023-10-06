import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { buttonHome } from "../../data/mock-buttonsale";

export const Button = () => {
  return (
    <div className=" flex flex-col md:flex md:flex-row gap-10 w-full md:justify-center items-center cursor-pointer mt-[35px]">
      {buttonHome.map((item) => (
        <div
          className={`${item.color} flex items-center w-[300px] h-[60px] `}
          key={item.id}
        >
          <div
            className={`${item.color}  text-[white] font-medium p-4 text-xs flex-1 flex  justify-center items-center text-white`}
          >
            {item.title}
          </div>
          <div
            className={`${item.colorIcon} h-full w-[70px] flex justify-center items-center`}
          >
            <FontAwesomeIcon
              className="text-[30px ] text-[white]"
              icon={item.icon}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
