import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createStyles,
  Header,
  Container,
  Group,
  rem,
  Transition,
  Paper,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { IconHeader } from "../../components/iconheader/IconHeader";
import { ChangeEvent, useEffect, useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { listproduct } from "../../data/mock-listproduct";
import { ButtonDefault } from "../../components/cartItem/ButtonDefault";
import config from "../../config";

const HEADER_HEIGHT = rem(40);

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

type ProductItem = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  sale?: number;
  quanlity: number;
};
export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [searchValue, setsearchValue] = useState<string>("");
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<ProductItem[]>([]);

  useEffect(() => {
    setLoading(true);
    setSearchResult(filterProducts(listproduct, searchValue));
    setLoading(false);
  }, [searchValue]);

  const filterProducts = (
    items: ProductItem[],
    searchValue: string
  ): ProductItem[] =>
    items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
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
    <div className="w-full uppercase bg-web-100 relative">
      <div className=" group flex-col justify-center item-center m-0">
        <IconHeader />
        <Header
          className=" bg-web-100 pb-[20px] flex justify-center "
          height={HEADER_HEIGHT}
          sx={{ borderBottom: 0 }}
        >
          <Container className={`${classes.inner} relative `} fluid>
            <Group spacing={20}>{items}</Group>
            <div className=" absolute left-[300px]">
              <form className="group mb-[2px] w-10 flex items-center hover:text-[#cc797f] hover:w-60  transition-all">
                <button
                  className={`rounded-full h-10 focus:outline-none ${
                    searchValue && "text-[#cc797f]"
                  }`}
                >
                  <FontAwesomeIcon
                    className="mx-3 text-slate-100"
                    icon={faSearch}
                  />
                </button>
                <input
                  className="border-none rounded-3xl py-2 px-4 outline-none w-full hidden group-hover:block focus:block focus:w-60 focus:text-[#cc797f]"
                  type="text"
                  placeholder="Search ..."
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setsearchValue(e.target.value);
                    setOpened(true);
                  }}
                  value={searchValue}
                ></input>
                {searchValue && !loading && (
                  <button
                    onClick={() => {
                      setsearchValue("");
                    }}
                    className="absolute right-[5px] p-2"
                  >
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                )}
                {loading && (
                  <button className="absolute animate-spin right-[5px] p-2">
                    <FontAwesomeIcon icon={faSpinner} />
                  </button>
                )}
                <Transition
                  mounted={opened}
                  transition="fade"
                  duration={100}
                  timingFunction="ease"
                  keepMounted
                >
                  {(transitionStyle) => (
                    <Paper
                      shadow="md"
                      p="lg"
                      pos="absolute"
                      top={42}
                      w={700}
                      right={5}
                      ref={clickOutsideRef}
                      style={{ ...transitionStyle, zIndex: 1 }}
                    >
                      <ul className="h-[300px] overflow-y-auto">
                        {searchResult.map((product: ProductItem) => (
                          <li
                            className="flex justify-between items-center m-4 font-bold"
                            key={product.id}
                          >
                            <img
                              alt="Lehoanganh"
                              className="w-[70px] h-[100px] mr-3"
                              src={product.thumbnail}
                            />
                            {product.title} - ${product.price}
                            <div
                              onClick={() => {
                                setsearchValue("");
                                setOpened(false);
                              }}
                              className="bg-[pink] ml-3 rounded-3xl shadow-inner"
                            >
                              <ButtonDefault
                                a={config.Routes.singerproduct}
                                title="Show Product"
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Paper>
                  )}
                </Transition>
              </form>
            </div>
          </Container>
        </Header>
      </div>
    </div>
  );
}
