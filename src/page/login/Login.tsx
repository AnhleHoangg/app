import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-xs grid gap-2 grid-cols-2 w-full h-fit py-[70px] tracking-widest uppercase">
      <div className="w-[570px] h-fit box-border border-solid border-4 border-inherit  border-opacity-5 px-[15px] m-auto ">
        <form className="flex flex-col p-[50px] items-center box-border  bg-web-100 ">
          <p className=" mb-[50px] text-3xl">Login</p>
          <label className="mb-[10px]">Username or Number *</label>
          <input
            className="w-[460px] h-[42px] border-solid border-2 rounded-3xl	px-[20px] mb-[25px]"
            type="text"
          ></input>
          <label className="mb-[10px]">Your Password *</label>
          <input
            className="w-[460px] h-[42px] border-solid border-2 rounded-3xl	px-[20px] mb-[25px]"
            type="password"
          ></input>
          <button
            type="submit"
            className="uppercase text-web-100 py-[10px] px-[30px]  bg-[#cc797f] rounded-3xl"
          >
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
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
