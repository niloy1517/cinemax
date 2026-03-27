import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { nowShowingMovies } from '../assets/assets'

const NewAndComingSoonMovies = () => {
    return (
        <div className='w-full pb-20 px-6 md:px-10'>
            <h1 className='uppercase font-semibold md:text-2xl tracking-tight pb-6'>
                New & Coming soon
            </h1>

            <Swiper
                modules={[Navigation]}
                slidesPerView='auto'
                spaceBetween={12}
                centeredSlides={false}
                initialSlide={0}
                grabCursor={true}
                className='w-full'
            >
                {nowShowingMovies.map((movie, index) => (
                    <SwiperSlide
                        key={index}
                        className='max-w-36 md:max-w-40 max-h-64 group cursor-pointer rounded-[6px] '
                    >
                        <img className='w-full min-h-full hover:opacity-70' src={movie.poster} alt="" />

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default NewAndComingSoonMovies