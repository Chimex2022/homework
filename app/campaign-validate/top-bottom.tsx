import { ArrowUp, Volume1 } from 'lucide-react'
import React from 'react'

const Awareness = () => {

  return (

    <>
    <div className='flex justify-between gap-8 rounded-md border border-gray-200 items-center p-6 mx-6'>

      <div className='flex items-center gap-2'>

       <Volume1 className='text-blue-600 w-6 h-6' />
        <h2 className='text-gray-600 text-left'>Awareness</h2>
      </div>

      <p className='text-blue-600'>In progress</p>

      <div><ArrowUp /></div>
    </div>
    </>
  )
}

export default Awareness
