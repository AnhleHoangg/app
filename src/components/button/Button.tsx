import {
  faCartShopping,
  faGift,
  faDiamond,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonHome = [
  {
    id: 1,
    icon: faCartShopping,
    title: "FREE SHIPPING WORLDWIDE",
    color: "bg-[#ca7379]",
    colorIcon: "bg-[#b5676d]",
  },
  {
    id: 2,
    icon: faGift,
    title: "GIVEAWAY EVERYWEEK",
    color: "bg-[#c1ac91]",
    colorIcon: "bg-[#ad9a82]",
  },
  {
    id: 3,
    icon: faDiamond,
    title: "SALE UP TO 70% OFF ON TUESDAY",
    color: "bg-[#8090a1]",
    colorIcon: "bg-[#738191]",
  },
];

export const Button = () => {
  return (
    <div className=" flex items-center gap-10 w-full justify-center cursor-pointer m-[20px] ">
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
