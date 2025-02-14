import { ArrowUp } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Vector from '../../public/Vector.png'

const Consider = () => {
  return (
  <div className='flex bg-white justify-between gap-8 mt-6 rounded-md border-t shadow-md border-gray-200 items-center mx-6 p-6'>

<div className='flex items-center gap-2'>

 <Image src={Vector} alt="vector" className='text-gray-400 w-6 h-6' />
  <h2 className='text-gray-600 text-left'>Consideration</h2>
</div>

<p className='text-gray-400'>Not started</p>

<div><ArrowUp /></div>
</div>
  )
}

export default Consider
