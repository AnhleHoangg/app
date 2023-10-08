import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ProductItem, deleteProduct } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SlideShow } from "../../components/slideshow/slideShow";

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.cart.cartAr);

  localStorage.setItem("listItem", JSON.stringify(list));
  const handleClose = (items: ProductItem) => {
    const action = deleteProduct(items);
    return dispatch(action);
  };

  const listItem = localStorage.getItem("listItem");
  let parsedData;
  if (listItem != null) {
    parsedData = JSON.parse(listItem);
  } else {
    console.log("Khong co data");
  }

  return (
    <div className="w-full flex flex-col justify-between items-center pt-[70px]">
      <div className="w-[1200px] flex flex-col items-center ">
        <h1 className="mb-[70px] text-[40px] font-semibold tracking-[10px]">
          SHOPPING CART
        </h1>
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

              {/* {Btn coupon } */}
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
                  <button className="text-[12px] md:text-[16px] px-[25px] pt-[9px] pb-[10px] bg-[#cc797f] rounded-3xl text-[white] uppercase">
                    Process To Checkout
                  </button>
                </div>
              </div>
            </div>
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
