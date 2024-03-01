import Image from "next/image";
import React from "react";
import OfferFood from "../../public/offerProduct.png";
import OfferBan from "../../public/offerBg.png";
import CountDown from "./CountDown";

const Offer = () => {

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 8);

  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] ">
      {/* text area */}
      <div className="text-white items-center text-center justify-center flex flex-1 flex-col gap-8 p-6 ">
        <h1 className="text-4xl font-bold xl:text-6xl" >Delicious Burger & French Fry</h1>
        <p className="text-base xl:text-xl ">Progressively simply effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel</p>
        {/* <span className="text-3xl xl:text-6xl font-bold text-[]">07:10:49:30</span> */}
         <CountDown targetDate={targetDate}/>
        <button className="text-base bg-primary rounded-md py-3 px-6">Order now</button>
      </div>
      {/* image container */}
      <div className="flex-1 relative w-full md:h-full ">
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
