import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import config from "../../config";
import { Avatar } from "@mantine/core";

export const LoginHeader = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("TokenID")
  );
  useEffect(() => {
    const handleStorage = () => {
      const storedToken = localStorage.getItem("TokenID");
      if (storedToken !== token) {
        setToken(storedToken);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [token]);
  const handleLogOut = () => {
    if (token) {
      localStorage.removeItem("TokenID");
    }
  };

  return (
    <div className=" relative bg-[#fafafa] uppercase text-[14px] font-semibold tracking-wide w-[1200px] pl-[10px] py-[13px]">
      {!token ? (
        <div className=" text-[#948c83]">
          <span>Welcome Guest!</span>
          <NavLink
            className="after:w-[1px] after:border after:ml-[5px] px-[5px] hover:text-[#e67880] "
            to={config.Routes.loginRegister}
          >
            Login
          </NavLink>
          <Link
            className="hover:text-[#e67880] "
            to={config.Routes.loginRegister}
          >
            REGISTER
          </Link>
        </div>
      ) : (
        <div className=" flex items-center justify-start w-[full] text-[#948c83]">
          <div className="flex">
            <span className="mr-[10px] after:border-r after:ml-[10px]">
              Welcome to Yorka
            </span>
            <a
              className="hover:text-[#e67880] "
              onClick={handleLogOut}
              href={config.Routes.home}
            >
              LogOut
            </a>
          </div>
          <div className="flex items-center">
            <span className="px-[10px]">Lê Hoàng Anh</span>
            <div>
              <Avatar
                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/241418152_1217220758784217_8362403967180308444_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=fe8171&_nc_ohc=GjsGThQE8hwAX8Ow6dD&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDnFCCDZP_X5k5cvUeuciK2cpOhS-fDuFu6Cuyyl6Y8hg&oe=6523A4E1"
                radius="xl"
              ></Avatar>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
