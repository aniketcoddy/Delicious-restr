'use client'
import Image from "next/image";
import { CartItem } from "@/types";
import { RootState } from "../../Store/index";
import React, { useEffect } from "react";
import Img1 from "../../../public/temporary/p1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";



const CartPage = () => {

    const data = useSelector((state:RootState)=>{
      return state.Cart.data;
    })

    console.log(data,"final")
    const amount = data.length && data.map(e => e.total).reduce((prev, next) => { return (prev + next) })

  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col text-primary lg:flex-row">
      {/* product conatainer */}
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 xl:px-32 2xl:px-40"
      >
        {/* single intem container */}
        {data.map((items:CartItem)=>{
          return(
        <div key={items.id} className="flex items-center justify-between mt-28 lg:mt-4">
         {items.img && <Image
            src={items.img}
            alt="item container"
            width={100}
            height={100}
            className="xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"
          />
         }
          <div>
            <h1 className="uppercase text-base font-bold xl:text-2xl">
              {items.name}
            </h1>
            <span className="text-xs xl:text-base">{items.title}</span>
          </div>
          <h1 className="text-sm font-bold xl:text-xl">₹{items.total}</h1>
          <h1 className="text-sm font-bold xl:text-base">({items.quantity})</h1>
          <span className="cursor-pointer xl:text-lg">x</span>
        </div>
        )})}
        
      </div>
      {/* payment container */}
      <div
      data-aos="fade-left"
      data-aos-duration="800"
      className="h-1/2 p-4 bg-fuchsia-100 flex flex-col gap-3 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 xl:px-20 2xl:px-40">
        <div className="flex justify-between">
          <span className="text-sm xl:text-base 2xl:text-xl ">
            Subtotal ({data.length})
          </span>
          <span className="text-sm xl:text-base 2xl:text-xl ">₹{amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm xl:text-base 2xl:text-xl ">
            Service Cost
          </span>
          <span className="text-sm xl:text-base 2xl:text-xl ">₹0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm xl:text-base 2xl:text-xl ">
            Delivery Cost
          </span>
          <span className="text-green-500 text-sm xl:text-base 2xl:text-xl">
            FREE
          </span>
        </div>
        <hr className="my-2 border-1 border-primary" />
        <div className="flex justify-between mt-2">
          <span className="text-sm xl:text-xl 2xl:text-2xl">
            TOTAL(INCL. VAT)
          </span>
          <span className="text-primary font-bold text-sm xl:text-xl 2xl:text-2xl">
          ₹{amount}
          </span>
        </div>

        <button className="bg-primary text-white text-base 2xl:text-xl p-2 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
