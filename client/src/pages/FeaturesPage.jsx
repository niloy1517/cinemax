import React from 'react'
import FeatureCard from '../components/FeatureNews/FeatureCard'

const FeaturesPage = () => {
  return (
    <div className='px-10 w-full py-10'>
        <h1 className='uppercase font-semibold tracking-tight md:text-2xl pb-6'>Features</h1>
        <FeatureCard />
    </div>
  )
}

export default FeaturesPage