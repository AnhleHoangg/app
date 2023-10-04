import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApi, registerAPI } from "../../services/UserServices";
import config from "../../config";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setUseName] = useState("");
  const [password, setPassWord] = useState("");
  const [isIconShowPW, setIsIconShowPW] = useState(false);
  const [loadingIcon, setLoandingIcon] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("TokenID");
    if (token) {
      navigate(config.Routes.home);
    }
  }, []);
  const handleLogin = async () => {
    setLoandingIcon(true);
    try {
      let res = await loginApi({ email, password });
      if (res.data.token && res) {
        localStorage.setItem("TokenID", res.data.token);
        navigate(config.Routes.home);
      }
    } catch (err: any) {
      alert("Tai Khoan MK Sai");
    }
    setLoandingIcon(false);
  };

  const handleRigister = async () => {
    try {
      let res = await registerAPI({ email, password });
      alert("Tao Tk Thanh Cong");
      if (res.data.token && res) {
        localStorage.setItem("TokenID", res.data.token);
        navigate(config.Routes.home);
      }
    } catch (err: any) {
      alert("Tao Tk Khong Thanh Cong");
    }
  };

  return (
    <div className="text-xs grid gap-2 grid-cols-2 w-full h-fit py-[70px] tracking-widest uppercase">
      <div className="w-[570px] h-fit box-border border-solid border-4 border-inherit  border-opacity-5 px-[15px] m-auto ">
        <form className="flex flex-col p-[50px] items-center box-border  bg-web-100 ">
          <p className=" mb-[50px] text-3xl">Login</p>
          <label className="mb-[10px]">Username or Number *</label>
          <input
            className="w-[460px] h-[42px] border-solid border-2 rounded-3xl	px-[20px] mb-[25px]"
            type="text"
            value={email}
            onChange={(e) => setUseName(e.target.value)}
          ></input>
          <label className="mb-[10px]">Your Password *</label>
          <div className="relative">
            <input
              className="w-[460px] h-[42px] border-solid border-2 rounded-3xl	px-[20px] mb-[25px] "
              type={isIconShowPW === true ? "text" : "password"}
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            ></input>
            <div
              className="absolute top-[13px] right-4 text-[15px]"
              onClick={() => setIsIconShowPW(!isIconShowPW)}
            >
              {isIconShowPW === true ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
          <button
            className="uppercase text-web-100 py-[10px] px-[30px]  bg-[#cc797f] rounded-3xl select-none"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {loadingIcon && (
              <FontAwesomeIcon
                className="mr-[10px] animate-spin"
                icon={faSpinner}
              />
            )}
            Login
          </button>
          <label className="mt-[20px] mb-[10px] flex justify-center items-center">
            <input className=" m-auto cursor-pointer h-full" type="checkbox" />
            <div className="ml-2"></div>
            Remember Me?
          </label>
          <NavLink className="text-[#cc797f]" to="/">
            Lost Your Password?
          </NavLink>
          <div className="normal-case">eve.holt@reqres.in-cityslicka</div>
        </form>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h3 className="border-none my-[50px] text-3xl font-normal">
            Register
          </h3>
          <h5 className="mb-[50px]">
            If you don't have an account. Register now!
          </h5>
          <div className=" my-3">
            <label className=" flex justify-center items-center">
              <input
                className=" m-auto cursor-pointer h-full"
                type="checkbox"
              />
              <div className="ml-2"></div>I accpet the terms and conditions.
              Including the privacy policy
            </label>
          </div>
          <div className=" my-3">
            <label className=" flex justify-center items-center">
              <input
                className=" m-auto cursor-pointer h-full"
                type="checkbox"
              />
              <div className="ml-2"></div>I want zorka to send me news and
              updates by email
            </label>
          </div>
          <button
            className="uppercase text-web-100 py-[10px] px-[30px]  bg-[#cc797f] rounded-3xl"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleRigister();
            }}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
