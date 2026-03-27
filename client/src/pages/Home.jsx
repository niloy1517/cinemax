import React from 'react'
import Hero from './Hero'
import NowShowing from './NowShowing'
import Upcoming from './Upcoming'
import FeaturesPage from './FeaturesPage'
import NewAndComingSoonMovies from './NewAndComingSoonMovies'


const Home = () => {
  return (
    <div className='bg-[#121212] text-white'>
      <Hero />
      <NowShowing />
      <Upcoming />
      <FeaturesPage />
      <NewAndComingSoonMovies />
    </div>
  )
}

export default Home