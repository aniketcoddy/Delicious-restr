'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bannerImg1 from "../../public/slide1.png"
import bannerImg2 from "../../public/slide2.png"
import bannerImg3 from "../../public/slide3.jpg"


const data = [
  {
    id:1,
    title:"always fresh & always crispy & always hot",
    image: bannerImg1,
  },
  {
    id:1,
    title:"We deliver your order whereever you are in NY",
    image: bannerImg2,
  },

  {
    id:1,
    title:"The best pizza to share with your family",
    image: bannerImg3,
  },
]

const Slider = () => {

  const [currentSlide , setCurrentSlide] = useState(0)

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setCurrentSlide((prev)=>(prev === data.length-1 ? 0 : prev+1))
  //   },2000);
  //   return () => clearInterval(interval)
  // },[])

  return (
    <div className="flex flex-col md:flex-row gap-5 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-primary/20">
      <div className="flex-1 flex items-center justify-center flex-col gap-4 text-primary font-bold ">
        <h1 className="text-2xl text-center uppercase p-4 md:text-5xl">
         {data[currentSlide].title}
        </h1>
        <button className="bg-primary text-white p-2 rounded-md ">Order Now</button>
      </div>
      <div className="w-full flex-1 relative ">
        <Image src={data[currentSlide].image} alt="Firt banner image" fill className="object-cover"/>
      </div>
    </div>
  );
};

export default Slider;
