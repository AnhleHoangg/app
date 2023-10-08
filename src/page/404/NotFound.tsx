import { Container, SimpleGrid } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";

export const NotFound = () => {
  return (
    <div className="flex flex-col md:flex justify-center">
      <Container className="flex justify-around">
        <SimpleGrid className="md:flex md:flex-row-reverse">
          <img
            className="md:w-[500px] md:h-[500px] px-[20px]"
            src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
            alt="Lehoanganh"
          ></img>
          <div className="flex flex-col justify-center ">
            <div className="hidden md:block">
              <h1 className=" text-[30px] mb-[30px] font-bold">
                Something is not right...
              </h1>
              <p className="mb-[30px] leading-7">
                Page you are trying to open does not exist. You may have
                mistyped the address, or the page has been moved to another URL.
                If you think this is an error contact support.
              </p>
            </div>
            <div className="w-full flex justify-center my-[10px]">
              <button className="p-[10px] md:p-[15px] border-2 border-[#cc797f] rounded-3xl font-bold w-fit text-[20px] ct-hoverDefault">
                <Link to={config.Routes.home}>Get back to home page</Link>
              </button>
            </div>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
};
