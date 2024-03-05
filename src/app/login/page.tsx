'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import Login from "../../../public/loginBg.png";
import Google from "../../../public/google.png";
import Facebook from "../../../public/facebook.png";
import "aos/dist/aos.css";
import Aos from "aos";

const LoginPage = () => {

  useEffect(() => {
    Aos.init()
  }, []);


  return (
    <div 
    data-aos="zoom-in"
        data-aos-duration="800"
    className="flex flex-col md:flex-row md:justify-center items-center h-[calc(100vh-9rem)]  lg:px-40 p-2">
      {/* image container */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        <div className="relative h-1/2 md:w-1/2 w-full md:h-full">
          <Image src={Login} alt="login" fill className="object-cover"/>
        </div>
        {/* form container */}
        <div className="p-10 flex flex-col gap-8 ">
          <h1 className="font-bold md:text-xl ">Welcome</h1>
          <p className="text-xs">
            Log into your account or create a new one using social buttons
          </p>
          <button className="flex gap-4 p-3 ring-1 ring-red-200 rounded-md">
            <Image
              src={Google}
              alt="google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign In With Google</span>
          </button>
          <button className="flex gap-4 p-3 ring-1 ring-red-200 rounded-md">
            <Image
              src={Facebook}
              alt="facebook"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign In With Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
