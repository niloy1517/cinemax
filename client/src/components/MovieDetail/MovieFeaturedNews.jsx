import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CirclePlay } from 'lucide-react';
import { useSelector } from 'react-redux';


const MovieFeaturedNews = () => {
   const selectedMovieData = useSelector((state) => state.movie.selectedMovie);

    return (
        <div className='w-full h-auto mt-20'>
            <div className='w-full flex items-center gap-3 mb-8'>
                <div className='bg-white w-1.5 h-8 rounded-full'></div>
                <h1 className='uppercase text-2xl font-black tracking-tight'>Featured News</h1>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView='auto'
                spaceBetween={20}
                centeredSlides={false}
                initialSlide={0}
                className='w-full'
            >
                {selectedMovieData.featureNews?.map((news, index) => (
                    <SwiperSlide key={index} className='max-w-[320px] group'>
                        <div className='relative h-[220px] border border-white/10 rounded-[8px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>
                            {/* Image Container */}
                            <div className='w-full h-[150px] relative overflow-hidden'>
                                <img
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                    src={news.image}
                                    alt={news.title}
                                />
                                <div className='absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors' />
                                {news.hasVideo && (
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <CirclePlay size={44} className='text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform' fill="currentColor" fillOpacity={0.2} />
                                    </div>
                                )}
                            </div>
                            {/* Title Container */}
                            <div className='bg-zinc-900 h-[70px] flex items-center px-4'>
                                <p className='text-white text-sm font-medium line-clamp-2 leading-snug group-hover:text-red-400 transition-colors italic'>
                                    "{news.title}"
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieFeaturedNews