import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem, deleteProduct } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SlideShow } from "../../components/slideshow/slideShow";

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const list = useSelector((state: any) => state.cart.cartAr);
  const [mount, setMount] = useState<boolean>(false);

  localStorage.setItem("listItem", JSON.stringify(list));
  const handleClose = (items: ProductItem) => {
    const action = deleteProduct(items);
    return dispatch(action);
  };

  const listItem = localStorage.getItem("listItem");
  let parsedData;
  let totalPrice: number = 0;
  if (listItem != null) {
    parsedData = JSON.parse(listItem);

    parsedData.map((items: any) => {
      return (totalPrice += items.items.price * items.items.quanlity);
    });
  } else {
    console.log("Không có sản phẩm");
  }

  const handleSubmitOder = () => {
    console.log(totalPrice);
    console.log(number);
    console.log(address);
    console.log(name);
  };

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-center items-center h-[300px] bg-[url('https://wallpapercrafter.com/th8008/1923497-asphalt-the-sun-pose-blonde-costume-shoes-truck.jpg')] bg-cover bg-center">
        <h1 className="text-[white] mb-[70px] text-[40px] font-semibold tracking-wider">
          SHOPPING CART
        </h1>
      </div>
      <div className="w-[1200px] flex flex-col items-center mt-[30px]">
        <div className="flex flex-col ">
          <div className="uppercase flex flex-col items-center">
            <div className="w-[550px] md:w-[1200px]">
              <table className=" border-b w-full ">
                <thead>
                  <tr>
                    <th className="product-remove w-[60px]"></th>
                    <th className="product-thumbnail w-[117px]"></th>
                    <th className="product-name w-[410px]">Product</th>
                    <th className="product-price w-[175px]">Price</th>
                    <th className="product-quantity w-[234px]">Quantity</th>
                    <th className="product-subtotal w-[170px]">Total</th>
                  </tr>
                </thead>
              </table>
              {parsedData.map((items: ProductItem) => (
                <div
                  key={items.items?.id}
                  className="flex text-center border-b border-[#858484d4] font-semibold text-[12px] md:text-[16px]"
                >
                  <Link
                    key={items.items?.id}
                    to="#"
                    className=" flex items-center justify-center w-[60px]"
                  >
                    <button
                      className="w-[60px] h-[114px]"
                      onClick={() => {
                        handleClose(items);
                      }}
                    >
                      <FontAwesomeIcon key={items.items?.id} icon={faClose} />
                    </button>
                  </Link>
                  <Link
                    className="w-[117px] h-[114px] p-[10px] overflow-hidden flex items-center"
                    to=""
                  >
                    <img src={items.items?.thumbnail} alt="Lehoanganh" />
                  </Link>
                  <Link
                    to="/"
                    className="w-[410px] p-[10px] text-center flex items-center"
                  >
                    {items.items?.title}
                  </Link>
                  <span className="w-[175px] text-center flex items-center text-[#cc797f] ">
                    {items.items?.price}
                  </span>
                  <div className="quantity w-[234px] p-[10px] h-[114px] flex justify-center items-center">
                    <div className="w-[120px] px-[5px] h-[36px] border flex justify-between rounded-3xl">
                      <button className="minus-btn p-[2px]">
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="flex items-center justify-center">
                        {items.items?.quanlity}
                      </span>
                      <button className="plus-btn p-[2px]">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <span className="amount flex justify-center items-center w-[170px] text-[#cc797f]">
                    1
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-[40px] px-[10px] pb-[10px] font-semibold">
                <div className="">
                  <input
                    className=" text-[12px] md:text-[16px] w-[270px] h-[42px] outline-none px-[20px] mb-[5px] mr-[5px] border border-[#858484d4] rounded-3xl uppercase"
                    placeholder="Enter coupon code"
                  ></input>
                  <button className=" text-[12px] md:text-[16px] px-[25px] pt-[9px] pb-[10px] bg-[#cc797f] rounded-3xl text-[white] uppercase">
                    Apply Coupon
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setMount(!mount);
                    }}
                    className="text-[12px] md:text-[16px] px-[25px] pt-[9px] pb-[10px] bg-[#cc797f] rounded-3xl text-[white] uppercase"
                  >
                    Process To Checkout
                  </button>
                </div>
              </div>
            </div>
            {!!mount && (
              <div className="font-semibold tracking-wide w-[500px] text-center mt-[20px] shadow-xl bg-[#fafafa] rounded-2xl">
                <h1 className="p-4 text-[#b5676d] text-[20px] font-bold tracking-widest mb-[10px]">
                  hello check out
                </h1>
                <div className="ml-[10px] py-[10px]">
                  <div className="flex items-center my-[20px]">
                    <label className="normal-case mr-[5px]">Name:</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="w-[100%] p-2 px-4 mr-[10px] rounded-3xl"
                    ></input>
                  </div>
                  <div className="flex items-center my-[20px]">
                    <label className="normal-case mr-[5px]">Address:</label>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-[100%] p-2 px-4 mr-[10px] rounded-3xl"
                    ></input>
                  </div>
                  <div className="flex items-center mr-[10px] ">
                    <label className="normal-case mr-[5px]">
                      Number Phone:
                    </label>
                    <input
                      onChange={(e) => setNumber(e.target.value)}
                      className=" p-2 px-4 w-[100%] rounded-3xl"
                    ></input>
                  </div>
                </div>
                <div className="my-[20px]">
                  <span className="text-[#de3757] font-bold">
                    Total:{totalPrice}
                  </span>
                </div>
                <button
                  onClick={handleSubmitOder}
                  className="my-[20px] py-[5px] px-[20px] bg-[#cc797f] rounded-2xl text-[white] font-semibold uppercase"
                >
                  Order
                </button>
              </div>
            )}
            <div className="w-[1200px] pt-[25px]">
              <div className="flex flex-col justify-between items-center">
                <h3 className=" tracking-[7px] font-bold ">RELATED PRODUCTS</h3>
              </div>
              <div>
                <SlideShow chirldren={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
