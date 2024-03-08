"use client";
import Image from "next/image";
import { menu, pizza, pasta, burger, Product } from "@/data";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Price from "@/components/Price";
import "aos/dist/aos.css";
import Aos from "aos";

const SingleProductPage = () => {
  const pathname = usePathname();
  const category: string = pathname.split("/")[2];
  const id: number = parseInt(pathname.split("/")[3]);
  const data: Product[] = itemsByCategory[category];
  const data2: Array<Product> = data.filter((items) => items.id === id);

  useEffect(() => {
    Aos.init();
  }, []);

  

  return (
    <div>
      {data2.map((items) => (
        <div
          key={items.id}
          className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-primary md:flex-row md:justify-center md:items-center"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative w-full h-1/2 "
          >
            
            {items.img && (
              <Image
                src={items.img}
                alt="product-image"
                className="object-contain"
                fill
              />
            )}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="h-1/2 flex flex-col gap-3 relative"
          >
            
            <h1 className="text-xl md:text-3xl font-bold uppercase">
              {items.title}
            </h1>
            <p className="text-xs md:text-base">{items.desc}</p>
            <Price
              price={items.price}
              id={items.id}
              options={items.options}
              img={items.img}
              name={items.title}
            />
          </div>

          {/* adding to cart mesage */}
         
        </div>
      ))}
    </div>
  );
};

const itemsByCategory: { [key: string]: Product[] } = {
  pizza: pizza,
  pasta: pasta,
  burger: burger,
};

export default SingleProductPage;
