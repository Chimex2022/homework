import React from 'react'
import Image from 'next/image'
import Map from "../../public/map.png"
import { Copy, CreditCard, Speaker, CalendarDays, Check } from 'lucide-react'
import Cart from "../../public/cart.png"
import Arrow from "../../public/arrow.png"
import Goal from "../../public/goal.png"

const ImageDivider = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        
      <div className='relative flex items-center justify-center size-8 rounded-full font-bold bg-[#0ABF7E]'>
      <Speaker className="size-3 text-white" />
      </div>
      
      {/* Vertical Line */}
      <div className="w-[0.5] h-12 bg-[#0ABF7E]"></div>

   
      <div className="relative flex items-center justify-center size-8 rounded-full font-bold bg-[#0ABF7E]">
      <Image className='text-white size-3' src={Map} alt='bottom image' />
      </div>

      <div className="w-[0.5] h-12 bg-[#0ABF7E]"></div>
  
      <div className='relative flex items-center justify-center size-8 rounded-full font-bold bg-[#0ABF7E]'>
      <CreditCard className="size-3 text-white" />
      </div>
      
      {/* Vertical Line */}
      <div className="w-[0.5] h-12 bg-[#0ABF7E]"></div>

   
      <div className="relative flex items-center justify-center size-8 rounded-full font-bold bg-[#0ABF7E]">
      <Copy className="size-3 text-white" />
      </div>

      <div className="w-[0.5] h-12 bg-[#0ABF7E]"></div>
    
      <div className='relative flex items-center justify-center size-8 rounded-full font-bold bg-[#0ABF7E]'>
      <Image src={Cart} alt="card" className="size-3 text-white" />
      </div>
      
      {/* Vertical Line */}
      <div className="w-[0.5] h-12 bg-[#0ABF7E]"></div>

   
      <div className="relative flex items-center justify-center size-8 rounded-full font-bold bg-gray-300">
      <CalendarDays className='text-white size-3' />
      </div>

      <div className="w-[0.5] h-12 bg-gray-100"></div>

      <div className='relative flex items-center justify-center size-8 rounded-full font-bold bg-[#0ABF7E]'>
      <Image src={Arrow} alt="vector" className="size-3 text-white" />
      </div>
      
      {/* Vertical Line */}
      <div className="w-[0.5] h-12 bg-gray-100"></div>

   
      <div className="relative flex items-center justify-center size-8 rounded-full font-bold bg-gray-300">
      <Image src={Goal} alt="" className='text-white size-3' />
      </div>

      <div className="w-[0.5] h-12 bg-gray-100"></div>

      <div className='relative flex items-center justify-center size-8 rounded-full font-bold bg-gray-300'>
      <Check className="size-3 text-white" />
      </div>
         
     

    </div>
  )
}

export default ImageDivider
