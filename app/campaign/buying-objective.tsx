"use client";

import React from 'react'
import Button from '../../components/common/button';
import { Plus } from 'lucide-react';
import Awareness from './awareness';
import Consideration from './consideration';
import Conversion from './conversion';
import FooterButton from './footer-button';

interface BuyingObjectiveCardProps {
  title: string;
}

const BuyingObjectiveCard = ({ title }: BuyingObjectiveCardProps) => {
  return (
    <div className='flex pl-8 items-center gap-2 p-6'>
      <span className='flex justify-center items-center rounded-full bg-blue-600 text-white p-1 size-6'>2</span>
      <h2 className='text-[#3175FF] font-bold'>{title}</h2>
    </div>
  )
}

const BuyingObjective = () => {
  return (
    <>
  <div className='bg-white p-6 my-6 rounded-md w-full mx-auto'>

      <div className='flex justify-between items-center px-6 my-4'>
        <BuyingObjectiveCard title='Your buying objectives and types' />
        <div>
          <Button
            text="Confirm changes"
            variant='secondary'
            onClick={() => alert('Confirm changes clicked')}
          />
        </div>
      </div>

      {/* Add new stage button */}
      <div className='flex pl-8 items-start gap-2'>
        <Button
          text="Add new stage"
          variant='primary'
          icon={Plus}
          onClick={() => alert('Add new stage clicked')}
          />
       </div>


       
        <div className='pt-8 bg-gray-100 mt-8' >
        <Awareness />
        </div>

        <div className='pt-8 bg-gray-100 mt-8'>
        <Consideration />
        </div>

        <div className='pt-8 bg-gray-100 mt-8'>
        <Conversion />
        </div>

        <div>
        <FooterButton />
        </div>

        </div>
    </>
  )
}

export default BuyingObjective
