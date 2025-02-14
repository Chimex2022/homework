import React from 'react';
import Cart from "../../public/cart.png"
import Image from 'next/image'


interface ObjectiveCardProps {
  title: string;
  description: string;
  selectedObjective: string;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ title, selectedObjective, description }) => {
  return (
    <div className="p-6 bg-white justify-start max-w-sm ml-8 text-lg rounded-lg shadow-sm border border-gray-200">
        <div className='flex items-center gap-2 my-4'>
          <span className='text-sm flex justify-center items-center rounded-full bg-blue-600 text-white p-1 size-6'>1</span>
        <h1 className="text-sm font-medium tracking-wide">
          {title}
        </h1>
        </div>

      <div className="space-y-4 bg-gray-100 p-4 shadow-sm rounded-md">
        <p className='text-sm font-semibold'>{description}</p>
        <div className="flex items-center gap-2">
        <span><Image className="rounded-full size-6 bg-blue-600 p-1" src={Cart} alt="cart" /></span>
          <span className="text-lg text-black">

            {selectedObjective}
          </span>
        </div>
      </div>
    </div>
  );
};


const MainObjective = () => {
  return (
    <div className='bg-gray-100 p-6 shadow-sm'>
      <ObjectiveCard 
        title="The main objective of your campaign"
        description='You have chosen this objective'
        selectedObjective="Purchase"
      />
    </div>
  );
};

export default MainObjective;
