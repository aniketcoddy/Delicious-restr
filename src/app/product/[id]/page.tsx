import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

const SingleProductPage = () => {
  return (
    <div>
      <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-primary md:flex-row md:justify-center md:items-center">
      <div className="relative w-full h-1/2 ">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt="product-image"
            className="object-contain"
            fill
          />
        )}
      </div>

      <div className="h-1/2 flex flex-col gap-3">
        <h1 className="text-xl md:text-3xl font-bold uppercase">{singleProduct.title}</h1>
        <p className="text-xs md:text-base">{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
    </div>
  )
}

export default SingleProductPage
