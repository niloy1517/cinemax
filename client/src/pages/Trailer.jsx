import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets, trailers } from '../assets/assets';
import { CirclePlay, Calendar, Clock2, Clapperboard } from 'lucide-react';


const Trailer = () => {
  return (
    <div className='w-full bg-cover bg-center items-start flex space-x-10 p-20'
      // style={{ backgroundImage: `url(${assets.bg_logo})` }}
    >
      <div className='flex-1 p-6 overflow-hidden'>
        <p className='text-2xl text-[#E50914] font-semibold pb-4'>Latest Trailers</p>
        <Swiper
          navigation={[Navigation]}
          slidesPerView='auto'
          spaceBetween={12}
        >
          <div className='w-full flex items-center'>
            {
              trailers.map(trailer => (
                <SwiperSlide key={trailer.index} className='max-w-70 group rounded-[6px] overflow-hidden cursor-pointer'>
                  <img className='w-full h-40 object-cover' src={trailer.thumbnail} alt="trailer-image" />
                  <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 text-white'>
                    <div className='absolute w-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-10 transition-all ease-in-out duration-300'>
                      <CirclePlay size={35} />
                    </div>
                  </div>
                  <div className='absolute inset-0 flex flex-col justify-end p-2 text-white'>
                    <p>{trailer.title}</p>
                    <p>{trailer.genre}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
        <div className='mt-10'>
          <p className='text-[20px] font-semibold pb-4'>Now Tranding</p>
          <div className='flex flex-col space-y-4 max-h-[300px] overflow-y-auto relative'>
            {
              trailers.map(trailer => (
                <div key={trailer.index} className='w-full flex items-center space-x-2'>
                  <img className='min-w-30 h-20 object-cover rounded' src={trailer.thumbnail} alt="trailer-image" />
                  <div className='absolute w-30 h-20 bg-black/30 flex items-center justify-center text-white cursor-pointer opacity-0 hover:opacity-100 transition-all duration-300 ease-in'>
                    <CirclePlay size={35} />
                  </div>
                  <div className='w-full pr-8'>
                    <p>{trailer.title}</p>
                    <div className='w-full flex items-center justify-between'>
                      <p>{trailer.genre}</p>
                      <div className='flex items-center gap-1'>
                        <Clock2 size={20} />
                        <p>{trailer.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>


      <div className='flex-1 bg-white shadow-2xl'>
        <iframe width='100%' height='300px' src={`https://www.youtube.com/embed/${trailers[1].videoUrl}`} frameborder="0" allowFullScreen></iframe>

        <div>
          <div className='flex justify-between items-center px-4 py-2'>
            <p className='text-2xl font-semibold'>{trailers[1].title}</p>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-1'>
                <Clock2 size={20} className='text-[#E50914]' />
                <p>{trailers[1].duration}</p>
              </div>
              <div className='flex items-center space-x-1'>
                <Calendar size={20} className='text-[#E50914]' />
                <p>{trailers[1].year}</p>
              </div>
            </div>
          </div>

          <div className='flex items-center space-x-3 px-4 text-sm font-semibold mt-2'>
            {
              trailers[1].genre.map(gen => (
                <p className='bg-[#E50914]/80 text-white px-2 py-1 rounded-2xl'>{gen}</p>
              ))
            }
          </div>

          <p className='px-4 pt-4'>{trailers[1].description}</p>

          <div className='px-4 py-8'>
            <div className='flex items-center space-x-1.5'>
              <Clapperboard size={35} className='text-[#E50914]' />
              <p className='text-2xl font-semibold text-[#E50914]'>Meet the Cast & Crew</p>
            </div>
            <div className='flex flex-wrap items-center gap-6 mt-6'>
              {
                trailers[1].credits.map(pro => (
                  <div className='flex flex-col items-center'>
                    <img className='w-18 h-18 rounded-full' src={pro.image} alt="" />
                    <p>{pro.name}</p>
                    <p>{pro.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trailer