import React, { useState } from 'react'
import NewAndComingSoonMovies from './NewAndComingSoonMovies'
import ShowDateSelector from '../components/Reusable/ShowDateSelector'
import MovieHero from '../components/MovieDetail/MovieHero'
import MovieMetadata from '../components/MovieDetail/movieMetadata'
import MovieFeaturedNews from '../components/MovieDetail/MovieFeaturedNews'
import MovieOnTheaters from '../components/MovieDetail/MovieOnTheaters'

const ShowtimesPage = () => {
  const [formatedDate, setFormatedDate] = useState('')
  
      const getFormatedDate = (date) => {
          setFormatedDate(date)
      }
  return (
    <div className='w-full bg-[#121212] text-white'>
      <MovieHero />

      <div className='w-full flex mt-10 px-6 md:px-10 mb-15'>
        <div className='w-full xl:w-[70%] flex flex-col gap-10'>
          <ShowDateSelector getFormatedDate={getFormatedDate} />
          <MovieOnTheaters formatedDate={formatedDate} />
          <MovieFeaturedNews />
          <MovieMetadata />
        </div>
        <div className='hidden xl:block w-[30%]'>dfsdfsdfsdffff</div>
      </div>
      <NewAndComingSoonMovies />
    </div>
  )
}

export default ShowtimesPage