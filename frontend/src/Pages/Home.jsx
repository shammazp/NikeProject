import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSeller from '../Components/BestSeller'
import Policy from '../Components/Policy'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <Policy/>
      <NewsLetter/>
    </div>
  )
}

export default Home