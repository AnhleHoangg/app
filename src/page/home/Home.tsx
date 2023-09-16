import { createStyles, getStylesRef } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Button } from "../../components/button/Button";

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

export function Home() {
  const { classes } = useStyles();
  return (
    <>
      <div className="w-full flex justify-center items-center py-5">
        <Carousel
          className="m-0 "
          maw={300}
          mx="auto"
          height={300}
          classNames={classes}
        >
          <Carousel.Slide>
            <img
              className="w-full object-contain"
              src="https://images.viblo.asia/29f85d3c-44ce-4168-855d-8649e15751f1.png"
              alt=""
            ></img>
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className="w-full object-contain"
              src="https://images.viblo.asia/29f85d3c-44ce-4168-855d-8649e15751f1.png"
              alt=""
            ></img>
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className="w-full object-contain"
              src="https://images.viblo.asia/29f85d3c-44ce-4168-855d-8649e15751f1.png"
              alt=""
            ></img>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <h3>TRENDY CLOTHING</h3>
        <h5>Trending</h5>
      </div>
    </>
  );
}
