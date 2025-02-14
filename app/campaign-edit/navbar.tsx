import React from 'react'

interface NavbarProps {
  title: string;
  description: string;
}

const NavbarCard = ({ title, description }: NavbarProps) => (
  <div className='px-6 py-2'>
    <div className='p-4'>
      <h2 className='text-lg font-bold'>{title}</h2>
      <p className='pt-3 text-gray-900'>{description}</p>
    </div>
  </div>
)

const Navbar = () => {
  const navbarCard = [{
    title: "Nice ! Here’s a recap of the buying objectives and types you have set for each platform.",
    description: "If it’s all good for you, click on Continue. If not, feel free to click on Edit for each funnel phase to adapt your choices as needed."
  }]

  return (
    <div className='w-full bg-gray-100 p-6 shadow-sm'>
     <NavbarCard title={navbarCard[0].title} description={navbarCard[0].description} />
    </div>
  )
}

export default Navbar
