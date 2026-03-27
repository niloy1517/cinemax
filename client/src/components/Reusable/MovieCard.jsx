import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMovie } from '../../features/movies/movieSlice';
import { setMovieDetails } from '../../features/movieBookingDetails/movieBookingDetailsSlice';


const MovieCard = ({ movie }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();




  const navigateToMovieDetails = (movie) => {
    const slug = movie.title.toLowerCase().replace(/\s+/g, '-');
    dispatch(setMovie(movie));
    dispatch(setMovieDetails(movie))
    navigate(`/details/${slug}`);
  }








  return (
    <div onClick={() => { navigateToMovieDetails(movie) }} className='group max-w-50 h-auto cursor-pointer hover:underline decoration-1'>
      <div className='w-full h-[240px] md:h-[260px] rounded-[8px] overflow-hidden'>
        <img className='w-full h-full object-cover transition-transform duration-500 group-hover:opacity-70' src={movie.poster} alt="" />
      </div>
      <p className='text-sm md:text-[16px] font-medium md:uppercase md:font-semibold pt-1.5 transition-colors duration-250 ease-in-out'>{movie.title}</p>
    </div>
  )
}

export default MovieCard