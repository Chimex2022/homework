"use client";

import React from 'react'
import Image from 'next/image'
import Facebook from '../../public/facebook.png'
import Instagram from '../../public/instagram.png'
import Youtube from '../../public/youtube.png'
import Trade from '../../public/trade.png'
import Quantum from '../../public/quantum.png'
import Button from '../../components/common/button'

const Social = () => {
  return (
    <div className='flex p-8 flex-col items-start bg-white rounded-md mx-6 gap-6'>
        <h2 className='font-bold py-4'>Social media</h2>

        <div className='flex items-center gap-4'>

        <div className= 'flex bg-white border border-gray-200 items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
          <span><Image className="flex-shrink-0" src={Facebook} alt="facebook" /></span>
          <h2>Facebook</h2>
        </div>

        <div className='flex items-center border border-gray-200 gap-2 bg-white px-6 py-2 rounded-md text-black font-bold'>
          <span>Buy Type</span>
          <select>
            <option></option>
          </select>
        </div>

        <div className='flex items-center border border-gray-200 bg-white gap-2 px-6 py-2 rounded-md text-black font-bold'>
          <span>Buy Objectives</span>
          <select>
            <option></option>
          </select>
        </div>



      </div>

<div className='flex items-center gap-4'>

<div className= 'flex bg-white border border-gray-200 items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span><Image className="flex-shrink-0" src={Instagram} alt="facebook" /></span>
  <h2>Instagram</h2>
</div>

<div className='flex items-center border border-gray-200 gap-2 bg-white px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Type</span>
  <select>
    <option></option>
  </select>
</div>

<div className='flex items-center border border-gray-200 bg-white gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Objectives</span>
  <select>
    <option></option>
  </select>
</div>


     </div>

<div className='flex items-center gap-4 bg-white'>

<div className= 'flex border border-gray-200 items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span><Image className="flex-shrink-0" src={Youtube} alt="facebook" /></span>
  <h2>Youtube</h2>
</div>

<div className='flex items-center border border-gray-200 gap-2 bg-white px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Type</span>
  <select>
    <option></option>
  </select>
</div>

<div className='flex items-center border border-gray-200 bg-white gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Objectives</span>
  <select>
    <option></option>
  </select>
</div>



</div>

<h2 className='font-bold py-4'>Display networks</h2>
<div className='flex items-center gap-4'>

<div className= 'flex bg-white border border-gray-200 items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span><Image className="flex-shrink-0" src={Trade} alt="facebook" /></span>
  <h2>The TradeDest</h2>
</div>

<div className='flex items-center border border-gray-200 gap-2 bg-white px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Type</span>
  <select>
    <option></option>
  </select>
</div>

<div className='flex items-center border border-gray-200 bg-white gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Objectives</span>
  <select>
    <option></option>
  </select>
</div>


</div>

     <div className='flex items-center gap-4'>

<div className= 'flex bg-white border border-gray-200 items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span><Image className="flex-shrink-0" src={Quantum} alt="facebook" /></span>
  <h2>QuantCast</h2>
</div>

<div className='flex items-center border border-gray-200 gap-2 bg-white px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Type</span>
  <select>
    <option></option>
  </select>
</div>

<div className='flex items-center border border-gray-200 bg-white gap-2 px-6 py-2 rounded-md text-black font-bold'>
  <span>Buy Objectives</span>
  <select>
    <option></option>
  </select>
</div>


     </div>

   <div className="flex gap-6 self-end">
    <Button
     text="Validate"
     onClick={() => alert("Validate clicked")}
     variant="primary"
     
    />
   </div>

    </div>
  )
}

export default Social
