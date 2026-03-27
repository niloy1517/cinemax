import React, { useState } from 'react'
import { theatreList } from '../../assets/assets';
import { CalendarDays, Heart, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';
import { setMovie } from '../../features/movies/movieSlice';
import { setMovieDetails } from '../../features/movieBookingDetails/movieBookingDetailsSlice';
import { useDispatch } from 'react-redux';

const MobileShow = ({ selectedArea, formatedDate }) => {
  const [selectedMovie, setSelectedMovie] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigateToShowtimes = (movie) => {
     const slug = movie.title.toLowerCase().replace(/\s+/g, '-');
    dispatch(setMovie(movie));
    dispatch(setMovieDetails(movie))
    navigate(`/details/${slug}`);
  }


  const theatersList = () => {
    const filterTheaterByLocation = theatreList.filter(theater => theater.location.cityId === selectedArea || theater.location.divisionId === selectedArea);

    const filterTheaterByShowDate = filterTheaterByLocation.filter(theater => theater.nowShowingMovies.some(movie => movie.shows.some(show => show.date === formatedDate)));

    return filterTheaterByShowDate
  }

  if (theatersList().length === 0) return (
    <div className="w-full py-14 flex flex-col items-center justify-center text-center">
      <h3 className="text-white font-semibold text-lg mb-2">No Showtimes Found</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Cinemax hasn’t received movie times from any theaters yet for the selected date.
        <span className="block mt-1 font-medium text-blue-400/80 italic cursor-pointer hover:underline">
          Please check back later!
        </span>
      </p>
    </div>
  )

  return (
    <div className='w-full flex flex-col gap-10'>
      {
        theatersList().map(theater => (
          <div className='border border-white/10 rounded-[10px]'>
            <div className='flex flex-col gap-1 bg-[#1E1E1E] py-3 px-4'>
              <div className='flex items-center justify-between uppercase font-bold text-[22px]'>
                <p onClick={() => handleNavigate(theater)} className='text-[18px] uppercase font-semibold hover:underline decoration-1 cursor-pointer'>{theater.name}</p>
                <Heart />
              </div>
              <div className='flex items-center gap-1 text-sm cursor-pointer text-gray-300 hover:text-white transition-colors duration-200'>
                <MapPin size={16} />
                <p>{theater.location.address}</p>
              </div>
            </div>


            <div className='w-full py-4 px-2'>
              <Swiper
                modules={[Navigation]}
                slidesPerView='auto'
                spaceBetween={10}
                className='w-full'
              >
                {
                  theater.nowShowingMovies.filter(movie => movie.shows.some(show => show.date === formatedDate)).map((movie, index) => {

                    return (
                      <SwiperSlide
                        onClick={() => {handleNavigateToShowtimes(movie); setSelectedMovie(`${theater.id}-${movie.title}`)}}
                        className={`max-w-24 cursor-pointer `}
                      >
                        <img className={`w-full h-36 rounded-[8px] ${selectedMovie === `${theater.id}-${movie.title}` && 'border-3 border-blue-600'}`} src={movie.poster} alt="" />
                        <p className='text-sm font-medium'>{movie.title}</p>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MobileShow