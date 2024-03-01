import Image from "next/image";
import React from "react";
import { menu } from "@/data";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="p-2 h-full  md:h-screen flex flex-col items-center md:flex-row ">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          style={{ backgroundImage: `url(${category.img})`}}
          className="w-full h-1/2 bg-cover p-4"
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-xl md:text-3xl">{category.title}</h1>
            <p className="text-xs py-3 md:text-sm  lg:text-base">{category.desc}</p>
            <button className={`hidden xl:block bg-${category.color} py-2 px-4 rounded-lg text-${category.color === "black" ? "white" : "primary"} `}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
