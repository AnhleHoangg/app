import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, Header, Container, Group, rem } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { IconHeader } from "../../components/iconheader/IconHeader";

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

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();

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
              <form className="group mb-[2px]  w-10 flex  items-center hover:text-[#cc797f] hover:w-60 transition-all">
                <button className=" rounded-full h-10 ">
                  <FontAwesomeIcon
                    className="mx-3 text-slate-100  "
                    icon={faSearch}
                  />
                </button>
                <input
                  className=" border-none rounded-3xl py-2 px-4 outline-none w-full hidden group-hover:block"
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
