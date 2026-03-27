import React, { useState } from 'react'
import { FeatureNews } from '../../assets/assets'
import { CircleChevronLeft, CircleChevronRight, PlayCircle } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';

const FeatureCard = () => {
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [activeBtn, setActiveBtn] = useState('');

    const navigate = useNavigate();

    const handleNavigate = (news) => {
        const categorySlug = news.content_type.toLowerCase()
            .replace(/[^a-z0-9 ]/g, '')
            .replace(/\s+/g, '-');

        const headlineSlug = news.headline.toLowerCase()
            .replace(/[^a-z0-9 ]/g, '')
            .replace(/\s+/g, '-');
        navigate(`${categorySlug}/${headlineSlug}/${news.id}`)
    }

    
    return (
        <div className='w-full relative'>
            <button onClick={() => setActiveBtn('prev')} className={`hidden prevBtn_2 absolute transform top-1/4 -left-4 cursor-pointe z-10 ${isBeginning ? 'hidden' : 'md:block'}`}>
                <CircleChevronLeft size={40} strokeWidth={1.5} className={`hover:fill-[#121212] cursor-pointer ${activeBtn === 'prev' &&  'fill-[#121212]'}`} />
            </button>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                slidesPerView='auto'
                spaceBetween={16}
                navigation={{
                    prevEl: '.prevBtn_2',
                    nextEl: '.nextBtn_2'
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}

                onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning),
                        setIsEnd(swiper.isEnd)
                }}

                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning),
                        setIsEnd(swiper.isEnd)
                }}

                breakpoints={{
                    768: {
                        autoplay: false,
                        pagination: {
                            enabled: false
                        },
                    }
                }}
            >
                {
                    FeatureNews.map((news, index) => (
                        <SwiperSlide key={index} onClick={() => handleNavigate(news)} className='max-w-[400px] group cursor-pointer'>
                            <div className='w-full relative rounded-[10px] overflow-hidden'>
                                <img className='group-hover:opacity-70' src={news.media.thumbnail} alt="" />
                                {news.media.video_url && <PlayCircle size={50} strokeWidth={1.5} className='absolute left-4 bottom-6' />}
                            </div>
                            <div className='flex flex-col gap-1 pt-1.5 pb-14'>
                                <p className='text-[20px] font-semibold tracking-tight'>{news.title}</p>
                                <p className='text-[15px] text-gray-100'>{news.headline}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <button onClick={() => setActiveBtn('next')} className={`hidden nextBtn_2 absolute transform top-1/4 -right-4 cursor-pointe z-10 ${isEnd ? 'hidden' : 'md:block'}`}>
                <CircleChevronRight size={40} strokeWidth={1.5} className={`hover:fill-[#121212] cursor-pointer ${activeBtn === 'next' && 'fill-[#121212]'}`} />
            </button>
        </div >
    )
}

export default FeatureCard