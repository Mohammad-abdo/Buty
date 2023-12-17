import React from 'react'
import HeroNav from './HeroNav'
import HeroCarosule from './heroCarosule/HeroCarosule'
import ProductCarosel from './heroCarosule/ProductCarosel'
import AllSection from './AllSection'
const HeroSection = () => {
  return (
    <div>
      <HeroNav/>
      <div className=" d-flex align-items-center justify-content-between  container">
      <div className="  " style={{width:"78%"}}>
       
       <div className="">
       <HeroCarosule/>
       </div>
       <div className=" mt-3">
        <ProductCarosel/>
       </div>
      
       
        </div>      
        <div className="" style={{width:"20%"}}>

   <AllSection/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
