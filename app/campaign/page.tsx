import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import MainObjective from './main-objective'
import BuyingObjective from './buying-objective'

const CampaignPage = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
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
