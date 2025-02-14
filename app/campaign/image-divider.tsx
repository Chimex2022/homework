import React from 'react'
import Image from 'next/image'
import Map from "../../public/map.png"
import { Speaker } from 'lucide-react'

const ImageDivider = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Top Image */}
      <div className='relative flex items-center justify-center size-8 rounded-full bg-[#0ABF7E]'>
      <Speaker className="size-3 text-white" />
      </div>
      
      {/* Vertical Line */}
      <div className="w-[0.5] h-12 bg-[#0ABF7E]"></div>

      {/* Bottom Image */}
      <div className="relative flex items-center justify-center size-8 rounded-full bg-[#0ABF7E]">
      <Image className='text-white size-3' src={Map} alt='bottom image' />
      </div>
    </div>
  )
}

export default ImageDivider
