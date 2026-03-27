import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from 'react-redux';

export const MovieMetadata = () => {
  const selectedMovieData = useSelector((state) => state.movie.selectedMovie);
  
  return (
    <div className='w-full'>
      {/* 2. About Section */}
      <div>
        <h2 className='font-bold text-[20px] md:text-3xl mb-6'>Storyline</h2>
        <p className='text-gray-300 text-sm tracking-tight md:text-[16px] text-justify'>
          {selectedMovieData.aboutMovie}
        </p>

        <div className='flex flex-col gap-3 md:gap-4 mt-6'>
          <div className='flex items-center gap-2'>
            <p className='font-bold text-sm md:text-[16px] uppercase'>Genre:</p>
            <p className='text-gray-200 text-sm md:text-[16px]'>{selectedMovieData.genres.join(', ')}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='font-bold text-sm md:text-[16px] uppercase'>Release Date:</p>
            <p className='text-gray-200 text-sm md:text-[16px]'>{selectedMovieData.release}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='font-bold text-sm md:text-[16px] uppercase'>Audio Languages:</p>
            <p className='text-gray-200 text-sm md:text-[16px]'>{selectedMovieData.languages.join(' • ')}</p>
          </div>
        </div>
      </div>

      {/* 3. Cast & Crew Section */}
      <div className='flex flex-col gap-15 mt-10'>
        {/* Cast Slider */}
        <div>
          <h2 className=' md:text-2xl font-bold mb-4 md:mb-8'>Top Billed Cast</h2>
          <Swiper slidesPerView='auto' spaceBetween={16} className='w-full'>
            {selectedMovieData.casts.map((cast, index) => (
              <SwiperSlide key={index} className='!w-[90px] md:!w-[130px]'>
                <div className='flex flex-col items-center group cursor-pointer'>
                  <div className='w-22 h-22 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 '>
                    <img className='w-full h-full object-cover' src={cast.image} alt={cast.name} />
                  </div>
                  <h4 className='text-sm md:text-[15px] text-center leading-tight'>{cast.name}</h4>
                  <p className='text-xs text-gray-300 mt-1 uppercase'>{cast.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Crew Slider */}
        <div>
          <h2 className='text-[20px] md:text-2xl font-bold mb-4 md:mb-8'>Technical Crew</h2>
          <Swiper slidesPerView='auto' spaceBetween={16} className='w-full'>
            {selectedMovieData.crews.map((crew, index) => (
              <SwiperSlide key={index} className='!w-[90px] md:!w-[130px]'>
                <div className='flex flex-col items-center group cursor-pointer'>
                  <div className='w-22 h-22 md:w-28 md:h-28 rounded-full overflow-hidden mb-4'>
                    <img className='w-full h-full object-cover' src={crew.image} alt={crew.name} />
                  </div>
                  <h4 className='text-sm md:text-[15px] text-center leading-tight'>{crew.name}</h4>
                  <p className='text-xs text-gray-300 mt-1 uppercase'>{crew.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default MovieMetadata