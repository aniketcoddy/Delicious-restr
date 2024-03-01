import React from 'react'
import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-primary'>
     {pizzas.map(items=>(
       <Link href={`/product/${items.id}`} key={items.id} className='w-full h-[60vh] border-b-2  border-r-2 border-primary sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group'>

          <div className='flex relative h-[80%] justify-center items-center'>
            {items.img && 
              <Image src={items.img} alt='pizza' fill className='object-contain'/>
              }
          </div>
          <div className='flex item-center justify-between font-bold group'>
            <h1 className="text-sm md:text-base lg:text-lg uppercase p-2">{items.title}</h1>
            <h1 className='text-sm md:text-base lg:text-lg p-2 group-hover:hidden'>${items.price}</h1>
            <button className='hidden text-xs  uppercase bg-primary text-white group-hover:block p-2 rounded-md'>Add To Cart</button>
          </div>
       </Link>
     ))}
    </div>
  )
}

export default CategoryPage
