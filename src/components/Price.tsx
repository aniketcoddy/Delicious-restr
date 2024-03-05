'use client'
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {

  const [total , setTotal] = useState(price)
  const [quantity , setQuantity] = useState(1)
  const [selected , setSelected] = useState(0)

  useEffect(()=>{
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
  },[quantity , selected , options, price])

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl md:text-2xl font-bold">₹{total.toFixed(2)}</h2>
      <div className="flex gap-4">
     {options?.map((option,index) => (
      <button key={option.title} className="p-1 min-w-[5rem]   text-sm md:text-lg md:p-2 ring-1 ring-primary rounded-md" style={{ background : selected === index ? "rgb(248 113 113)" : "white" , color:selected === index ? "white" : "rgb(248 113 113)" }} onClick={()=>setSelected(index)} >{option.title}</button>
     ))}
      </div>
      <div className="flex justify-between items-center">
      <div className="flex justify-between w-full p-3 md:p-4 ring-1 ring-primary ">
        <span>Quantity</span>
        <div>
          <button onClick={()=> setQuantity((prev)=>prev>1 ? prev -1 : 1)}>{'<'}</button>
          <span> {quantity} </span>
          <button onClick={()=> setQuantity((prev)=>prev < 9 ? prev + 1 : 9)}>{'>'}</button>
        </div>
      </div>
      <button className="uppercase bg-primary text-white p-2 md:p-3 ring-1 ring-primary text-xs">Add To Cart</button>
      </div>
    </div>
  );
};

export default Price;
