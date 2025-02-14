import { ArrowUp } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Megaphone from "../../public/mdi_megaphone.png"

const Awareness = () => {

  return (

    <>
    <div className='flex justify-between gap-8 rounded-t-md border border-gray-200 items-center p-6 mx-6'>

      <div className='flex items-center gap-2'>

       <span><Image src={Megaphone} alt="megaphone" className='flex-shrink-0 text-blue-600 w-6 h-6' /></span>
        <h2 className='text-gray-600 text-left'>Awareness</h2>
      </div>

      <p className='text-blue-600 font-bold'>In progress</p>

      <div><ArrowUp /></div>
    </div>
    </>
  )
}

export default Awareness
