import React from 'react';

interface TopProps {
  title: string;
  description: string;
}

const TopState = ({ title, description }: TopProps) => {
  return (
    <div className='flex flex-col p-8 items-start gap-4'>
      <h2 className='text-black font-bold'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default function Nav() {
  return (
    <TopState 
      title="Which buying objectives and types would you like to set for each platform?" 
      description="Select the buying objectives and types for each platform to ensure your campaign targets the right audience." 
    />
  );
}
