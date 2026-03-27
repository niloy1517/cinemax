import React, { useState } from 'react'
import { theatreList } from '../assets/assets';
import { Info, RockingChair } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMovie } from '../features/movies/movieSlice';
import { setMovieDetails, setSelectedShow, setSelectedTheater } from '../features/movieBookingDetails/movieBookingDetailsSlice';

const TheaterMovies = ({ formatedDate }) => {
    const selectedTheaterData = useSelector((state) => state.theater.selectedTheater);
    const [selectedLang, setSelectedLang] = useState({});

    const handleLangChange = (movieId, language) => {
        setSelectedLang(prev => ({
            ...prev, [movieId]: language
        }))
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToMovieDetails = (movie) => {
        const slug = movie.title.toLowerCase().replace(/\s+/g, '-');
        dispatch(setMovie(movie))
        dispatch(setMovieDetails(movie))
        navigate(`/details/${slug}`)
    }

    const [selectedShowtime, setSelectedShowtime] = useState({})

    const handleSelectedThaterAndShowtime = (theater, show) => {
        dispatch(setSelectedTheater(theater));
        dispatch(setSelectedShow(show));
        setSelectedShowtime(show.time)
    }

    const handleNavigateToSeatpage = (movie) => {
        dispatch(setMovieDetails(movie))
        const slug = movie.title.toLowerCase().replace(/\s+/g, '-');
        setTimeout(() => {
            navigate(`/seats/${slug}`)
        }, 1000)
    }


    const getFormatColor = (format) => {
        switch (format) {
            case '2D':
                return 'border-[#ffffff] text-[#ffffff]';
            case '3D':
                return 'border-[#3B82F6] text-[#3B82F6]';
            case 'IMAX':
                return 'border-[#F59E0B] text-[#F59E0B]';
            case '4DX':
                return 'border-[#A855F7] text-[#A855F7]';
            default:
                return 'border--[#E50914] text-[#E50914]';
        }
    };

    return (
        <div className='w-full'>
            <div className='w-full flex flex-col gap-6 text-white border border-white/10 rounded-[10px] md:rounded-2xl p-3 md:p-4'>
                {
                    theatreList.filter(theater => theater.id === selectedTheaterData.id).map(theater => {
                        const filteredMovies = theater.nowShowingMovies.filter(nowShowingMovie =>
                            nowShowingMovie.shows.some(show => show.date === formatedDate)
                        )

                        if (filteredMovies.length === 0) return (<p>Movie not found</p>);

                        return filteredMovies.map((movie, index) => {
                            const showsOnDate = movie.shows.filter(show => show.date === formatedDate);
                            const uniqueLanguages = [...new Set(movie.shows.map(show => show.language))];
                            const activeLanguage = selectedLang[movie.movieId] || uniqueLanguages[0];
                            const showInLanguage = showsOnDate.filter(show => show.language === activeLanguage);
                            const uniqueFormats = [...new Set(showInLanguage.map(show => show.format))]

                            return (
                                <div key={index} className={`w-full flex flex-col lg:flex-row gap-4 ${index !== filteredMovies.length - 1 && 'border-b-8 border-white/10'} pb-4`}>
                                    <div className='w-full lg:w-[50%] flex gap-4'>
                                        <img className='w-26 md:w-32 h-40 md:h-50 rounded-[8px]' src={movie.poster} alt="poster" />
                                        <div className='flex flex-col gap-2'>
                                            <p onClick={() => navigateToMovieDetails(movie) } className='text-[18px] font-semibold  hover:underline decoration-1 leading-5 cursor-pointer'>{movie.title}</p>
                                            <p className='text-gray-300 text-sm'>{movie.duration}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex gap-8'>
                                            {
                                                uniqueLanguages.map((language, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleLangChange(movie.movieId, language)}
                                                        className={`uppercase text-gray-400 font-semibold text-xs md:text-sm cursor-pointer ${language === activeLanguage && 'border-b text-white'}`}
                                                    >
                                                        {language}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                        <div className='w-full pt-4 flex flex-col gap-6'>
                                            {
                                                uniqueFormats.map((format, index) => (
                                                    <div key={index} className='w-full flex flex-col gap-1.5'>
                                                        <p className={`${getFormatColor(format)} font-medium text-xs md:text-sm lg:text-base`}>{format}</p>
                                                        <div className={`${getFormatColor(format)} w-full h-14 border-l-5 bg-[#1E1E1E] flex items-center justify-between text-[10px] md:text-sm text-gray-300 px-2 md:px-4 rounded`}>
                                                            <p>Reserved seating, Recliner Seats, Accessibility devices available, Dine-In Delivery to Seat, Ad Free Preshow</p>
                                                            <Info />
                                                        </div>

                                                        <div className={`flex items-center gap-6 pt-2 pb-6 ${index !== uniqueFormats.length - 1 ? 'border-b-2 border-white/10' : ''}`}>
                                                            {
                                                                showInLanguage.filter(show => show.format === format).map(show => (
                                                                    <button onClick={() => { handleSelectedThaterAndShowtime(theater, show); handleNavigateToSeatpage(movie) }} className={` ${selectedShowtime === show.time ? `${getFormatColor(format)}` : 'text-white/75'} border border-l-5 px-1.5 md:px-3 py-1 md:py-2 text-xs md:text-sm font-semibold rounded cursor-pointer`}>{show.time}</button>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    })
                }
            </div>
        </div>
    )
}

export default TheaterMovies