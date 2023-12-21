import React from 'react'
import HeroSection from './heroSection/HeroSection'
import DailyOffers from './DailyOffers/DailyOffers'
import TradeMarks from './TradeMarks/TradeMarks'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <DailyOffers/>
      <TradeMarks/>
    </div>
  )
}

export default Home
