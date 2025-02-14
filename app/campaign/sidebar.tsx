import { ArrowLeft, Check } from 'lucide-react'
import React from 'react'
import ImageDivider from './image-divider'
import SideInfo from './side-info'

const Sidebar = () => {
  return (
    <div className='flex items-start flex-col h-full border border-r-gray-200 w-1/3 bg-white p-8 gap-8'>
      <div className=' flex text-blue-600 font-semibold items-center gap-4'>
       <span><ArrowLeft className='w-6 h-6' /></span>
        <h2 className='text-balance'>Back to Dashboard</h2>
      </div>

      <h2 className='font-bold text-black'>Spring collection Launch <br /> 2025</h2>

       <div className='flex justify-center gap-2'>
       <span><Check className='w-6 h-6' /></span>
       <span className='text-gray-600 text-left'>Nike</span>
       </div>

     {/* image divider */}
     <ImageDivider />

     {/* side info */}
     <div className="flex items-end gap-4">
     <SideInfo />
     </div>

    </div>
  )
}

export default Sidebar
