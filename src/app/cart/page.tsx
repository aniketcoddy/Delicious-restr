"use client";
import Image from "next/image";
import { CartItem } from "@/types";
import { RootState } from "../../Store/index";
import React, { useEffect } from "react";
import Img1 from "../../../public/temporary/p1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "@/Store/slices/CartSlice";

const CartPage = () => {
  const data = useSelector((state: RootState) => {
    return state.Cart.data;
  });

  console.log(data, "final");
  const amount =
    data.length &&
    data
      .map((e) => e.total)
      .reduce((prev, next) => {
        return prev + next;
      });

  const dispatch = useDispatch();
  const handleRemoveFromCart = (items: CartItem) => {
    dispatch(removeItem(items));
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  flex flex-col text-red-500 lg:flex-row">
      {data.length !== 0 ? (
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-1/2 2xl:w-1/2 xl:px-20 2xl:px-16 "
        >
          {/* SINGLE ITEM */}
          {data.map((items:CartItem)=>{
          return(
          <div key={items.id} className="flex items-center justify-between mb-4">
           {items.img && <Image src={items.img} alt="" width={100} height={100} /> }
            <div className="">
              <h1 className="uppercase text-xl font-bold">{items.name}</h1>
              <span>{items.title}</span>
            </div>
            <h2 className="font-bold">₹{items.total}</h2>
            <span className="cursor-pointer"  onClick= {()=>handleRemoveFromCart(items)}>X</span>
          </div>
          )})}
        </div>
      ) : (
        <div  className="flex items-center justify-center font-bold lg:w-1/2 w-full h-1/2 mb-4">
          <h1 className="text-4xl">Cart is Empty</h1>
        </div>
      )}
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-100 flex text-sm flex-col gap-2 justify-center lg:h-full lg:w-1/2 2xl:w-1/2 xl:text-xl 2xl:text-xl xl:px-20 2xl:px-16">
        <div className="flex justify-between">
          <span className="">Subtotal ({data.length})</span>
          <span className="">₹{amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">₹{amount}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
