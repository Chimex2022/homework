import { ArrowUp } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Card from '../../public/mdi_credit-card.png'

const Convert = () => {
  return (
    <div className='flex bg-white mt-6 justify-between gap-8 rounded-md border-t border-gray-200 items-center mx-6 p-6'>

    <div className='flex items-center gap-2'>
    
     <Image src={Card} alt="vector" className='text-gray-400 w-6 h-6' />
      <h2 className='text-gray-600 text-left'>Consideration</h2>
    </div>
    
    <p className='text-gray-400'>Not started</p>
    
    <div><ArrowUp /></div>
    </div>
  )
}

export default Convert
