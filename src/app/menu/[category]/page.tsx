'use client'
import React, { useEffect } from 'react'
import { pizza , pasta , burger , Product} from '@/data'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import "aos/dist/aos.css";
import Aos from "aos";


const CategoryPage = () => {
  const pathname = usePathname()
  const category :string = pathname.split("/")[2]
  const data : Product[]= dataByCategory[category]                                                                                                                                                                                                                                                                   

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className='flex flex-wrap text-primary'>
     {data.map(items=>(
       <Link href={`/menu/${category}/${items.id}`} key={items.id} className='w-full h-[60vh] border-b-2  border-r-2 border-primary sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group'>

          <div 
          data-aos="zoom-in"
          data-aos-duration="800"
          className='flex relative h-[80%] justify-center items-center'>
            {items.img && 
              <Image src={items.img} alt='pizza' fill className='object-contain'/>
              }
          </div>
          <div className='flex item-center justify-between font-bold group'>
            <h1 className="text-sm md:text-base lg:text-lg uppercase p-2">{items.title}</h1>
            <h1 className='text-sm md:text-base lg:text-lg p-2 group-hover:hidden'>₹{items.price}</h1>
            <button className='hidden text-xs  uppercase bg-primary text-white group-hover:block p-2 rounded-md'>Add To Cart</button>
          </div>
       </Link>
     ))}
    </div>
  )
}

const dataByCategory : { [key: string]: Product[] } ={
  pizza:pizza,
  pasta:pasta,
  burger:burger,
}



export default CategoryPage
