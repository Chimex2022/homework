"use client"

import { Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from '../../components/common/button'
import Quantum from '../../public/quantum.png'
import Trade from '../../public/trade.png'
import Instagram from '../../public/instagram.png'
import Facebook from '../../public/facebook.png'
import Vector from '../../public/Vector.png'
import Google from '../../public/google.png'

const Consideration = () => {
  return (
    <div className='flex flex-col items-start'>

    <div className='flex text-white justify-between w-full px-6'>
      <div className='flex items-center gap-2 pl-6'>
        <span><Image src={Vector} alt="card" /></span>
        <h2 className='text-black font-semibold'>Consideration</h2>
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
    
    {/* start */}
   <div className=''>
    <h2 className='flex items-start p-2 font-bold'>Social media</h2>
    <div className='flex items-center gap-4 p-6'>

      <div className='bg-white border border-gray-100 flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Image src={Facebook} alt="facebook" /></span>
        <h2>Facebook</h2>
      </div>

      <div className='bg-white border border-gray-100 flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Image src={Instagram} alt="instagram" /></span>
        <h2>Instagram</h2>
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
        
      <div className='bg-white border border-gray-100 px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Traffic</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white border border-gray-100 px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Traffic</span>
        <select>
        <option></option>
        </select>
      </div>


      </div>

      <div className='flex items-center gap-4 p-6'>

      <div className='bg-white border border-gray-100 px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPM</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white border border-gray-100 px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPM</span>
        <select>
        <option></option>
        </select>
      </div>
     </div>

      </div>

     </div>
    
  {/* end */}
   
      


    <div className='grid grid-cols-1 gap-8 md:flex justify-center space-x-10 px-8 py-6'>

        <div className=''>
    <h2 className='text-black font-bold p-2'>Display networks</h2>
    
    <div className='flex items-center gap-4'>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Image className='' src={Trade} alt='quantum' /></span>
        <h2>The TradeDest</h2>
      </div>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Image src={Quantum} alt='trade' /></span>
        <h2>QuantCast</h2>
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


     <div className='flex item-start gap-6 flex-col'>

      <div className='flex items-center pt-4 gap-4'>
        
      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Video views</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Traffic</span>
        <select>
          <option></option>
        </select>
      </div>

      </div>

      <div className='flex items-center gap-4'>

      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPV</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPV</span>
        <select>
        <option></option>
        </select>
      </div>

      </div>

     </div>

     </div>

    
  {/* end */}


    {/* second stage */}
   
   <div className='flex flex-col'>
  <h2 className='font-bold py-4'>Search Engines</h2>

    <div className='flex gap-4 items-center'>

      <div className=''>
       <Button
       text='Google'
       image={Google.src}
       variant='tertiary'
       className='text-black'
       onClick={() => alert("Button clicked")}
       
       />
      </div>

      <div className=''>
       <Button
       text='Add Channel'
       variant='primary'
       onClick={() => alert("Button clicked")}
       
       />
      </div>

    </div>


    <div className='flex flex-col'>
    <div className='bg-white px-4 py-2 mb-4 mt-4 w-[200px] rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Traffic</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white px-4 py-2 w-[200px] rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPM</span>
        <select>
        <option></option>
        </select>
      </div>
      
    </div>
    
   </div>


   </div>


    </div>

  ) 
}

export default Consideration
