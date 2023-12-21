import React from 'react'
import HeroSection from './heroSection/HeroSection'
import DailyOffers from './DailyOffers/DailyOffers'
import TradeMarks from './TradeMarks/TradeMarks'
import SmilerProd from './SmilerProducts/SmilerProd'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <DailyOffers/>
      <TradeMarks/>
      <SmilerProd/>
    </div>
  )
}

export default Home
