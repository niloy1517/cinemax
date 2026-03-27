import React, { useState } from 'react'
import { nowShowingMovies } from '../assets/assets'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/Reusable/MovieCard';

const NowShowing = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/movies')
    }

    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeBtn, setActiveBtn] = useState('');

    return (
        <div className='px-6 md:px-10 py-20 bg-[#121212] text-white'>
            <div className='w-full flex justify-between items-center mb-6'>
                <h1 className='md:text-2xl font-semibold uppercase'>
                    Movies in Theaters
                </h1>
                <button onClick={handleNavigate} className='cursor-pointer uppercase text-sky-600 hover:text-amber-500 font-medium flex items-center gap-2'>
                    See All
                </button>
            </div>
            <div className='relative w-full h-auto flex'>
                <button onClick={() => setActiveBtn('prev')} className={`hidden  prevBtn absolute transform top-1/3 -left-4 cursor-pointe z-10 ${isBeginning ? 'hidden' : 'md:block'}`}>
                    <CircleChevronLeft size={40} strokeWidth={1.5} className={`hover:fill-[#121212] cursor-pointer ${activeBtn === 'prev' && 'fill-[#121212]'}`} />
                </button>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView='auto'
                    spaceBetween={12}
                    navigation={{
                        prevEl: ".prevBtn",
                        nextEl: ".nextBtn"
                    }}
                    onInit={(swiper) => {
                        setIsBeginning(swiper.isBeginning),
                        setIsEnd(swiper.isEnd)
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning),
                        setIsEnd(swiper.isEnd)
                    }}
                >
                    <div className='w-full flex'>
                        {
                            nowShowingMovies.map(movie => (
                                <SwiperSlide
                                    key={movie.index}
                                    className='max-w-36 md:max-w-40 group relative cursor-pointer overflow-hidden'
                                >
                                    <MovieCard movie={movie} />
                                </SwiperSlide>
                            ))
                        }
                    </div>
                </Swiper>
                <button onClick={() => setActiveBtn('next')}  className={`hidden  nextBtn absolute transform top-1/3 -right-4 cursor-pointer z-10 ${isEnd ? 'hidden' : 'md:block'}`}>
                    <CircleChevronRight size={40} strokeWidth={1.5} className={`hover:fill-[#121212] cursor-pointer ${activeBtn === 'next' && 'fill-[#121212]'}`} />
                </button>
            </div>
        </div>
    )
}

export default NowShowing