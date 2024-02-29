import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "../../public/cart.png";

const CartIcon = () => {
  return (
      <div className="flex relative gap-3">
          <Image src={cart} alt="cartIcon" width={20} height={20} />
          <span>Cart (3)</span>
      </div>   
  );
};

export default CartIcon;
