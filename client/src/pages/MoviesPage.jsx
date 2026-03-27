import React from 'react'
import FilterMovies from './FilterMovies'
import TheatreNowshowingMovies from './TheatreNowshowingMovies'
import TheatreUpcomingMovies from './TheatreUpcomingMovies'
import NewAndComingSoonMovies from './NewAndComingSoonMovies'

const MoviesPage = () => {
  return (
    <div className='pt-10 flex flex-col gap-16 bg-[#121212] text-white'>
      <FilterMovies />
      <TheatreNowshowingMovies />
      <TheatreUpcomingMovies />
      <NewAndComingSoonMovies />
    </div>
  )
}

export default MoviesPage