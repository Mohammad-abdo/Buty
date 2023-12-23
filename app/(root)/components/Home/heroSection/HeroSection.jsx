import React from 'react'
import HeroNav from './HeroNav'
import HeroCarosule from './heroCarosule/HeroCarosule'
import ProductCarosel from './heroCarosule/ProductCarosel'
import AllSection from './AllSection'
const HeroSection = () => {
  return (
    <div>
      <HeroNav />
      <div className=" row d-flex align-items-center justify-content-between mx-auto " style={{width:"95%"}}>
        <div className=" col-lg-10 col-md-8 col-sm-4 " >

          <div className="">
            <HeroCarosule />
          </div>
          <div className=" mt-3">
            <ProductCarosel />
          </div>


        </div>
        <div className=" col-lg-2  col-md-2 col-sm-6" >

          <AllSection />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
