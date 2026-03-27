import React, { useState } from 'react'
import { nowShowingMovies } from '../assets/assets'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/Reusable/MovieCard';

const Upcoming = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/movies')
    }

    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeBtn, setActiveBtn] = useState('');

    return (
        <div className='px-6 md:px-10 bg-[#121212] text-white'>
            
                <h1 className='md:text-2xl font-semibold uppercase mb-6'>
                    Coming soon to theaters
                </h1>
            
            <div className='relative w-full h-auto flex'>
                <button onClick={() => setActiveBtn('prev')} className={`hidden prevBtn_1 absolute transform top-1/3 -left-4 cursor-pointe z-10 ${isBeginning ? 'hidden' : 'md:block'}`}>
                    <CircleChevronLeft size={40} strokeWidth={1.5} className={`hover:fill-[#121212] cursor-pointer ${activeBtn === 'prev' && 'fill-[#121212]'}`} />
                </button>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView='auto'
                    spaceBetween={12}
                    navigation={{
                        prevEl: ".prevBtn_1",
                        nextEl: ".nextBtn_1"
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
                <button onClick={() => setActiveBtn('next')}  className={`hidden nextBtn_1 absolute transform top-1/3 -right-4 cursor-pointer z-10 ${isEnd ? 'hidden' : 'md:block'}`}>
                    <CircleChevronRight size={40} strokeWidth={1.5} className={`hover:fill-[#121212] cursor-pointer ${activeBtn === 'next' && 'fill-[#121212]'}`} />
                </button>
            </div>
        </div>
    )
}

export default Upcoming