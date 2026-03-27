import React, { useContext, useEffect, useState } from 'react'
import { assets, theatreList } from '../assets/assets';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Check } from 'lucide-react';
import SelectFormatAndLanguageModal from '../Modal/SelectFormatAndLanguageModal';
import { storeContext } from '../Context/Context';

const SelectMovie = ({ activeDate, selectedMovie, setSelectedMovie }) => {
    const {setSelectedMovieData} = useContext(storeContext)
    const savedTheatre = JSON.parse(localStorage.getItem('theatre'));

    const year = activeDate.getFullYear();
    const month = String(activeDate.getMonth() + 1).padStart(2, '0');
    const day = String(activeDate.getDate()).padStart(2, '0');

    const formatedDate = `${year}-${month}-${day}`

    const [opentFormatAndLanguageModal, setOpenFormatAndLanguageModal] = useState(false);


    useEffect(() => {
        setSelectedMovieData(prev => ({
            ...prev,
            movie: {
                title: selectedMovie.title,
                poster: selectedMovie.poster
            }
        }))
    }, [selectedMovie])


    return (
        <div className='w-full'>
            <h1 className='text-2xl text-gray-700 font-medium pb-6'>Select Movie</h1>
            <Swiper
                modules={[Navigation]}
                slidesPerView='auto'
                spaceBetween={16}
            >
                <div className='w-full flex space-y-3'>
                    {
                        theatreList.map(theatre => {
                            if (theatre.id === savedTheatre.id) {
                                const filteredMovies = theatre.nowShowingMovies.filter(movie =>
                                    movie.shows.some(show =>
                                        show.date === formatedDate
                                    )
                                )

                                return filteredMovies.length > 0 ?
                                    filteredMovies.map(movie => (
                                        <SwiperSlide key={movie.movieId} className={`max-w-[170px] flex flex-col h-auto gap-2 cursor-pointer relative`}>
                                            <img onClick={() => { setSelectedMovie(movie), setOpenFormatAndLanguageModal(true) }} className={`w-full h-[280px] rounded-[10px] ${movie.movieId === selectedMovie.movieId && 'shadow-2xl border-3 border-red-700'}`} src={movie.poster} alt="" />
                                            <p className={`max-w-full leading-5 font-medium text-gray-600 text-[15px] ${movie.movieId === selectedMovie.movieId && 'text-red-700'}`}>{movie.title}</p>
                                            <div className='w-full absolute top-1/3 flex justify-center '>
                                                {
                                                    movie.movieId === selectedMovie.movieId &&
                                                    <div className='size-10 flex items-center justify-center rounded-full bg-red-700 text-white'>
                                                        <Check strokeWidth={3} />
                                                    </div>
                                                }
                                            </div>
                                        </SwiperSlide>
                                    ))
                                    :
                                    <div className='w-[60%] h-[280px] bg-white flex flex-col items-center justify-center text-gray-700 shadow rounded-[8px] border border-gray-200'>
                                        <img className='w-[200px]' src={assets.no_movie_found} alt="" />
                                        <p className='pt-4 font-semibold text-[20px]'>No Movie Available</p>
                                        <p className='w-[60%] text-center'>
                                            Here is no schedule date available for this location.
                                            Please try another location
                                        </p>
                                    </div>
                            }
                        })
                    }
                </div>
            </Swiper>


            {/* Theatres List Modal */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${opentFormatAndLanguageModal
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 max-h-screen bg-black/60 transition-opacity duration-300 ${opentFormatAndLanguageModal ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setOpenFormatAndLanguageModal(false)}
                />

                {/* Slide container */}
                <div
                    className={`absolute bottom-0 left-0 w-full flex justify-center
                                        transform transition-all duration-300 ease-out
                                    ${opentFormatAndLanguageModal
                            ? '-translate-y-100'
                            : '-translate-y-full'
                        }`}
                >
                    <SelectFormatAndLanguageModal
                        formatedDate={formatedDate}
                        selectedMovie={selectedMovie}
                        setOpenFormatAndLanguageModal={setOpenFormatAndLanguageModal}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectMovie
