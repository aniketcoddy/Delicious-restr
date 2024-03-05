'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import OfferFood from "../../public/offerProduct.png";
import OfferBan from "../../public/offerBg.png";
import CountDown from "./CountDown";
import "aos/dist/aos.css";
import Aos from "aos";

const Offer = () => {

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 8);

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] ">
      {/* text area */}
      <div 
      data-aos="fade-up"
      data-aos-duration="500"
      className="text-white transition-all items-center text-center justify-center flex flex-1 flex-col gap-8 p-6 ">
        <h1 className="text-4xl font-bold xl:text-6xl" >Delicious Burger & French Fry</h1>
        <p className="text-base xl:text-xl ">Progressively simply effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel</p>
        {/* <span className="text-3xl xl:text-6xl font-bold text-[]">07:10:49:30</span> */}
         <CountDown targetDate={targetDate}/>
        <button className="text-base bg-primary rounded-md py-3 px-6">Order now</button>
      </div>
      {/* image container */}
      <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="flex-1 transition-all relative w-full md:h-full ">
        <Image
          src={OfferFood}
          alt="offer banner"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
