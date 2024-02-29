import Image from "next/image";
import React from "react";
import FoodImg1 from "../../public/temporary/p1.png"
import { featuredProducts } from "@/data";


const FeaturedItems = () => {
  return (
    <div className="w-full overflow-x-scroll text-primary">
      {/* wrapper */}
      <div className="w-max flex">
        {/* singleItems */}
        {featuredProducts.map(items =>(
        <div className="flex flex-col w-screen h-[70vh] items-center justify-around  md:w-[50vw] xl:w-[33vw] md:h-[70vh] xl:h-[90vh] gap-3 p-4">
          {/* image container */}
          { items.img && <div key={items.id} className="relative  flex-1 w-full hover:rotate-[60deg] transition-all duration-500 ">
            <Image src={items.img} alt="food" fill className="object-contain" />
          </div>}
          {/* text conatiner */}
          <div className=" flex flex-1 text-center items-center flex-col gap-2">
            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{items.title}</h1>
            <p className="p-2 text-sm xl:text-lg 2xl:text-xl">{items.desc}</p>
            <span className="text-xl font-bold xl:text-xl 2xl:text-2xl">${items.price}</span>
            <button className="bg-primary p-2 rounded-md text-white ">Add To Cart</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
