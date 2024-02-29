import ResponsiveNav from "./ResponsiveNav";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import Open from "../../public/open.png";
import close from "../../public/close.png";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;

  return (
    <div>
      <div className=" flex text-primary h-full w-full justify-between md:justify-between md:font-bold items-center border-b-2 border-primary p-6 uppercase">
        <div className="hidden md:flex ml-11">
          <div className=" flex gap-5 font-semibold ">
            <Link href="/">HomePage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="md:mx-auto">
          <Link href="/">Massimo</Link>
        </div>
        {/* mobile Menu */}
        <ResponsiveNav />

        <div className="hidden md:flex">
        <div className=" flex gap-4 mr-16 font-semibold ">
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )}
          <Link href="/cart">
          <CartIcon />
          </Link>
         
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
