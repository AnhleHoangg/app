import { Button } from "../../components/button/Button";
import { listItem } from "../../data/mock-listItem";

export function Home() {
  return (
    <>
      <div>
        <img
          className="w-full"
          src="https://nouthemes.net/html/zorka/assets/images/slideshow1.jpg"
          alt="Lehoanganh"
        ></img>
        <div className="">
          <Button></Button>
        </div>
        <div className="flex flex-col justify-center items-center uppercase -tracking-tight">
          <h3 className="mb-[0px] border-none">Trendy clothing</h3>
          <h5 className="mb-[30px] text-[13px] normal-case ">Trending</h5>
          {listItem.map((item) => (
            <div key={item.id}>
              {item.item.map((item) => (
                <div>
                  <img src={item.first.thumbnail}></img>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
