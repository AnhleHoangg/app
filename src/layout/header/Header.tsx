import React, { useState } from "react";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, Header, Container, Group, rem } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import config from "../../config";
import { useSelector } from "react-redux";

const HEADER_HEIGHT = rem(30);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const numberCart = useSelector((state: any) => state.cart);

  const items = links.map((link) => {
    return (
      <NavLink
        key={link.label}
        to={link.link}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {link.label}
      </NavLink>
    );
  });

  return (
    <div className="w-full  uppercase bg-web-100 ">
      <div className="h-14 w-full my-5 ">
        <div className="flex justify-around flex-row items-center ">
          <div className=" text-m text-gray-600 ">
            <FontAwesomeIcon
              className="px-2 cursor-pointer"
              icon={faFacebookF}
            />
            <FontAwesomeIcon className="px-2 cursor-pointer" icon={faTwitter} />
            <FontAwesomeIcon
              className="px-2 cursor-pointer"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="px-2 cursor-pointer"
              icon={faPinterestP}
            />
          </div>
          <div>
            <Link to="/">
              <img
                className="cursor-pointer"
                src="https://nouthemes.net/html/zorka/assets/images/logo.png"
                alt="/logo"
              ></img>
            </Link>
          </div>
          <div className=" w-[116px] text-center flex justify-center text-3xl text-gray-600 cursor-pointer relative">
            <Link className="flex" to={config.Routes.shoppingcart}>
              <FontAwesomeIcon className="z-0" icon={faCartArrowDown} />
              <div className=" absolute top-[-10px] right-[28px] bg-[#cc797f] rounded-full text-[10px] text-[white] px-2 font-bold h-[21px] flex items-center ">
                {numberCart.number}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" group flex justify-center m-0">
        <Header
          className="m-0 bg-web-100 mb-[7px] "
          height={HEADER_HEIGHT}
          sx={{ borderBottom: 0 }}
        >
          <Container className={`${classes.inner} relative `} fluid>
            <Group spacing={20}>{items}</Group>
            <div className=" absolute left-[370px]">
              <form className="group mb-[2px]  w-10 flex  items-center hover:text-[#cc797f] hover:w-60 transition-all">
                <button className=" rounded-full h-10 ">
                  <FontAwesomeIcon
                    className="mx-3 text-slate-100  "
                    icon={faSearch}
                  />
                </button>
                <input
                  className=" border-none rounded-3xl p-2 outline-none w-full hidden group-hover:block"
                  type="text"
                  placeholder="Search ..."
                  required
                ></input>
              </form>
            </div>
          </Container>
        </Header>
      </div>
    </div>
  );
}
