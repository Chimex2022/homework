import Sidebar from "../campaign-edit/sidebar"
import Consider from "./consider"
import Convert from "./convert"
import Social from "./social"
import Nav from "./top"
import Awareness from "./top-bottom"

const CampaignPage = () => {
    return (
      <div className='flex flex-1 min-h-screen bg-gray-100'>
       
        <Sidebar />
  
        <div className='flex flex-col content-start w-full'>
          <Nav />
          <Awareness />
          <Social />
          <Consider />
          <Convert />
        </div>
      </div>
    )
  }
  
  export default CampaignPage