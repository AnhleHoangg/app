import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";

const HEADER_HEIGHT = rem(30);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
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

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
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
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <div className="">
      <div className="h-14 w-full my-5 ">
        <div className="flex justify-between flex-row items-center ">
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
            <img
              src="https://nouthemes.net/html/zorka/assets/images/logo.png"
              alt="/logo"
            ></img>
          </div>
          <div className=" text-3xl text-gray-600 cursor-pointer">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </div>
        </div>
      </div>
      <div className="flex justify-center m-0">
        <Header
          className="m-0"
          height={HEADER_HEIGHT}
          sx={{ borderBottom: 0 }}
          mb={120}
        >
          <Container className={`${classes.inner} relative`} fluid>
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                className={classes.burger}
                size="sm"
              />
            </Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <div className="group absolute left-[358px]">
              <form className="bg-slate-300 rounded-3xl  w-10 flex  items-center hover:w-60 transition-all">
                <button className=" rounded-full h-10 ">
                  <FontAwesomeIcon
                    className="mx-3 text-slate-100  "
                    icon={faSearch}
                  />
                </button>
                <input
                  className="bg-slate-300 border-none rounded-3xl p-1 outline-none w-full hidden group-hover:block"
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
