import React from 'react'
import { nowShowingMovies } from '../assets/assets'
import MovieCard from '../components/Reusable/MovieCard'


const TheatreUpcomingMovies = () => {

    return (
        <div className='py-10 px-10'>
            <h1 className='md:text-2xl font-semibold pb-6'>COMMING SOON</h1>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-6'>
                {
                    nowShowingMovies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default TheatreUpcomingMovies