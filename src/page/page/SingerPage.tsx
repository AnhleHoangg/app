import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faClock,
  faComment,
  faTags,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const SingerPage = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-[40px] p-[50px]">
        <div className="w-full md:w-[770px] lg:w-[870px] xl:w-[1200px] ">
          <h3 className="mb-[25px] border-none text-[36px]">
            <a href="single-post.html">Zorka Men Spring/Summer Vacation</a>
          </h3>
          <div className="box-border  w-fit h-[40px] border p-3 mb-[20px] text-[11px] rounded-3xl border-[#8d8d8d] text-[#8d8d8d]">
            <div className="w-[350px] flex justify-center">
              <span className="m-auo">
                <a href="/">
                  <FontAwesomeIcon className="mr-[5px]" icon={faUser} />
                  <i className="font-semibold">ADMIN</i>
                </a>
              </span>
              <span className="m-auto">
                <a href="/">
                  <FontAwesomeIcon className="mr-[5px]" icon={faClock} />
                  <i className="font-semibold"> JANUARY 15, 2015 </i>
                </a>
              </span>
              <span className="m-auto">
                <a href="/">
                  <FontAwesomeIcon className="mr-[5px]" icon={faComment} />
                  <i className="font-semibold"> 10 COMMENTS</i>
                </a>
              </span>
            </div>
          </div>
          <div className="my-[30px]">
            <img
              className="w-[870px] md:w-[1200px] "
              src="https://nouthemes.net/html/zorka/assets/images/blog-img-4.jpg"
              alt="img"
            />
          </div>
          <div className="block mb-[30px] pr-5 text-[#868686] leading-relaxed px-[20px]">
            <p className="mb-[20px]">
              Now, what better way is there to get clothing you’re sure to love
              than by making it yourself? Did you know that there are clubs you
              can join that will not only teach you how to make some spiffy
              duds, but will also allow you to make some friends at the same
              time?
            </p>
            <p className="mb-[20px]">
              Stitch ‘n Bitch – This is an awesome group of knitters that has
              chapters all around the country and world! Meet up, learn new
            </p>
            <p className="mb-[20px]">
              stitches, make cool things—and new friends. Dressmakers Clubs –
              There’s no specific website for this type of club, but you can do
              a quick search and see if there is one in your city. Get together
              with a group of experienced seamstresses to learn to make
              different styles of dress with different fabrics. Soon you’ll be
              creating outfits you can wear with flair.
            </p>
            <p className="mb-[20px]">
              Jewelry Making Clubs – Let’s not forget that no outfit is complete
              without accessories! Why pay a high price when you can create your
              own original pieces? Check out what jewelry clubs there are in
              your area.
            </p>
          </div>
        </div>
        <div className="pb-[30px] border-b px-[20px] ">
          <div className="bg-[#f5f5f5] px-[15px] py-[10px] rounded-3xl text-[#868686]">
            <span className="">
              <FontAwesomeIcon className="text-[25px] mr-[5px]" icon={faTags} />
              <a href="/" rel="tag">
                Clothes
              </a>
              ,
              <a href="/" rel="tag">
                Dress
              </a>
              ,
              <a href="/" rel="tag">
                Fashion
              </a>
              ,
              <a href="/" rel="tag">
                Kid Clothes
              </a>
              ,
              <a href="/" rel="tag">
                Men
              </a>
              ,
              <a href="/" rel="tag">
                Spring
              </a>
              ,
              <a href="/" rel="tag">
                Summer
              </a>
            </span>
          </div>
        </div>
        <div className="flex items-center h-[100px]  border-b">
          <a className="flex items-center" href="/" rel="prev">
            <FontAwesomeIcon
              className="mb-[10px] mr-[10px] text-[#868686]  hover:text-[#cc797f]"
              icon={faCaretLeft}
            />
            <div>
              <div className="uppercase mb-[10px] text-[#868686] text-[14px]">
                Previous Post
              </div>
              <div className="tex-[15px] hover:text-[#cc797f]">
                White Vintage Back Pack For Girl
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
