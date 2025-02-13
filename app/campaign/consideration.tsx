import { Trash, Volume1 } from 'lucide-react'
import React from 'react'
import Button from '../../components/common/button'
import Image from 'next/image'
import Quantum from '../../public/quantum.png'
import Trade from '../../public/trade.png'
import Instagram from '../../public/instagram.png'
import Youtube from '../../public/youtube.png'
import Facebook from '../../public/facebook.png'
import Vector from '../../public/Vector.png'
import Card from '../../public/mdi_credit-card.png'
import Google from '../../public/google.png'

const Consideration = () => {
  return (
    <div className='flex flex-col items-start'>

    <div className='flex text-white justify-between w-full px-6'>
      <div className='flex items-center gap-2 pl-6'>
        <span><Image src={Vector} alt="card" /></span>
        <h2 className='text-black font-semibold'>Conversion</h2>
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
   <div className='"'>
    <h2 className='flex items-start p-4 font-bold'>Social media</h2>
    <div className='flex items-center gap-4 p-6'>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
        <span><Image src={Facebook} alt="facebook" /></span>
        <h2>Facebook</h2>
      </div>

      <div className='bg-white flex items-center gap-2 px-6 py-2 rounded-md text-black font-bold'>
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
        
      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Traffic</span>
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

      <div className='flex items-center gap-4 p-6'>

      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPM</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white px-6 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>CPM</span>
        <select>
        <option></option>
        </select>
      </div>
     </div>

      </div>

     </div>
    
  {/* end */}
   
      


    <div className='flex items-center space-x-48'>
        <div className=''>

    <h2 className='p-4 font-bold'>Display networks</h2>
    
    <div className='flex items-center gap-4 p-6'>

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


     <div className='flex flex-col'>

      <div className='flex items-center gap-4 p-6'>
        

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

      <div className='flex items-center gap-4 p-6'>

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
   
   <div className='flex flex-col gap-6'>
  <h2 className='font-bold'>Search Engines</h2>

    <div className='flex gap-4 items-center'>


      <div className=''>
       <Button
       text='Google'
       image={Google}
       variant='tertiary'
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
    <div className='bg-white px-4 py-2 mb-4 mt-4 rounded-md flex items-center gap-2 text-black font-bold'>
        <span>Traffic</span>
        <select>
        <option></option>
        </select>
      </div>

      <div className='bg-white px-4 py-2 rounded-md flex items-center gap-2 text-black font-bold'>
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
