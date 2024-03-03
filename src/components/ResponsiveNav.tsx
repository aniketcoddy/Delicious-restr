'use client'

import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction , useState } from "react";
import Open from "../../public/open.png";
import close from "../../public/close.png";
import CartIcon from "./CartIcon";


const MenuData = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
  },
  {
    id: 2,
    name: "Menu",
    link: "/menu",
  },
  {
    id: 3,
    name: "Working Hours",
    link: "/",
  },
  {
    id: 4,
    name: "Contact",
    link: "/",
  },
];

const ResponsiveNav = () => {

  const [open,setOpen] = useState(false)

  const user = false; 

  return (
    <div>
      <div>
        <div className="md:hidden">
          {!open ? (
            <Image
              onClick={() => setOpen(true)}
              src={Open}
              alt="menu button"
              height={20}
              width={20}
              
            />
          ) : (
            <Image
              onClick={() => setOpen(false)}
              src={close}
              alt="menu button"
              height={20}
              width={20}
              
            />
          )}
        </div>
        <div>
        <div
      className={`${
        open ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 md:hidden flex h-screen w-[65%] flex-col 
         bg-primary px-8 pb-6 pt-16 text-white gap-7 uppercase
         transition-all duration-200 rounded-r-xl shadow-md shadow-black`}
    >
      {MenuData.map((item) => (
        <Link href={item.link} key={item.id} onClick={()=>setOpen(false)}>
          {item.name}
        </Link>
      ))}
      {!user ? (
        <Link href="/login">Login</Link>
      ) : (
        <Link href="/login">Orders</Link>
      )}
      <Link href="/cart"  onClick={()=>setOpen(false)}>
        <CartIcon/>
      </Link>
    </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNav
