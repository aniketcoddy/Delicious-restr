"use client";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/slices/CartSlice";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
  name: string;
  img?: string;
};

const Price = ({ price, id, options, img, name }: Props) => {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  const handleAddToCart = () => {
    // Dispatch the action with the required data
    dispatch(
      addItem({
        id,
        title: options ? options[selected].title : "",
        total,
        quantity,
        img,
        name,
      })
    );
    setLoading(true);
    setTimeout(() => {
      // After the operation is complete, set loading to false
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-10">
      <h2 className="text-xl md:text-2xl font-bold">₹{total.toFixed(2)}</h2>
      {loading ? (
        <div className="bg-green-300 lg:text-sm p-2 text-xs w-fit text-green-900 rounded-lg font-semibold relative">
          <h1>Item Added to Cart</h1>
        </div>
      ) : (
        ""
      )}
      </div>
      <div className="flex relative gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-1 min-w-[5rem]   text-sm md:text-lg md:p-2 ring-1 ring-primary rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "rgb(248 113 113)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between  items-center">
        <div className="flex justify-between w-full p-3 md:p-4 ring-1 ring-primary ">
          <span>Quantity</span>
          <div>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span> {quantity} </span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button
          className="uppercase bg-primary text-white p-2 md:p-3 ring-1 ring-primary text-xs hover:bg-red-400"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
      
    </div>
  );
};

export default Price;
