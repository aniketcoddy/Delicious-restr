'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import { menu } from "@/data";
import Link from "next/link";
import "aos/dist/aos.css";
import Aos from "aos";

const Menu = () => {

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div 
    data-aos="fade-up"
      data-aos-duration="800"
    className="p-2 h-full  md:h-screen flex flex-col items-center md:flex-row ">
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
            <button className={`hidden xl:block bg-white py-2 px-4 rounded-lg text-black border-2 border-primary`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
