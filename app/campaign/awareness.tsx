import { Facebook, Instagram, Trash, Volume1, Youtube } from 'lucide-react'
import React from 'react'
import Button from '../../components/common/button'

const Awareness = () => {
  return (
    <div className='flex flex-col items-center'>

    <div className='flex text-white justify-between w-full px-6'>
      <div className='flex items-center gap-2 pl-6'>
        <span><Volume1 className='text-[#3175FF] font-bold' /></span>
        <h2 className='text-black font-semibold'>Awareness</h2>
      </div>

      <div>
        <Button
         text='Delete the stage'
         variant='danger'
         icon={Trash}
         onClick={() => alert('Delete the stage clicked')}
         iconColor='text-white'
         
         />
      </div>
      
    </div>
    
   <div>

    <h2 className='flex items-start p-4 font-bold'>Social media</h2>
    <div className='flex items-center gap-4 p-6'>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Facebook className='text-[#3175FF] font-bold size-4' /></span>
        <h2>Facebook</h2>
      </div>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Instagram className='text-[#FF0302] font-bold size-4' /></span>
        <h2>Instagram</h2>
      </div>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Youtube className='text-[#FF0302] font-bold size-4' /></span>
        <h2>Youtube</h2>
      </div>

      <div className=''>
       <Button
       text='Add channel'
       variant='primary'
       onClick={() => alert("Button clicked")}
       
       />
      </div>
    </div>

       {/* another shift */}


     <div className='flex flex-col'>

      <div className='flex items-center gap-4 p-6'>
      <div className='bg-white px-6 py-2 rounded-md text-gray-600'>
        <span>Awareness</span>
        <option></option>
      </div>

      <div className='bg-white px-6 py-2 rounded-md text-gray-600'>
        <span>Video views</span>
        <option></option>

      </div>

      <div className='bg-white px-6 py-2 rounded-md text-gray-600'>
        <span>Video views</span>
        <option></option>
      </div>

      </div>
     </div>
    
  {/* end */}
       </div>
      
      



    </div>

  ) 
}

export default Awareness
