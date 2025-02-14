import React from 'react'
import Navbar from './navbar'
import MainObjective from './main-objective'
import BuyingObjective from './buying-objective'
import Sidebar from './sidebar'

const CampaignPage = () => {
  return (
    <div className='flex flex-1 min-h-screen bg-gray-100'>
     
      <Sidebar />

      <div className='flex flex-col content-start w-full'>
      <Navbar />
      <MainObjective />
      <BuyingObjective />
      </div>
    </div>
  )
}

export default CampaignPage
