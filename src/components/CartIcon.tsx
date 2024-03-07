'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "../../public/cart.png";
import { useSelector } from "react-redux";
import { RootState } from "../Store/index";


const CartIcon = () => {

  const data = useSelector((state:RootState)=>{
    return state.Cart.data;
  })

  return (
      <div className="flex relative gap-3">
          <Image src={cart} alt="cartIcon" width={20} height={20} />
          <span>Cart ({data.length})</span>
      </div>   
  );
};

export default CartIcon;
