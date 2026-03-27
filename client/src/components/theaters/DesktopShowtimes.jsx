import React, { useState } from 'react'
import { theatreList } from '../../assets/assets'
import { Heart, Info, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMovie } from '../../features/movies/movieSlice'
import { setTheater } from '../../features/theaters/theaterSlice'
import { setMovieDetails, setSelectedShow, setSelectedTheater } from '../../features/movieBookingDetails/movieBookingDetailsSlice'

const DesktopShowtimes = ({ selectedArea, formatedDate }) => {
    const theatersList = () => {
        const filterTheaterByLocation = theatreList.filter(theater => theater.location.cityId === selectedArea || theater.location.divisionId === selectedArea);

        const filterTheaterByShowDate = filterTheaterByLocation.filter(theater => theater.nowShowingMovies.some(movie => movie.shows.some(show => show.date === formatedDate)));

        return filterTheaterByShowDate
    }

    const [selectedLang, setSelectedLang] = useState({})

    const handleLangChange = (theaterId, movieId, language) => {
        setSelectedLang(prev => ({
            ...prev, [`${theaterId}-${movieId}`]: language
        }))
    }

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleNavigate = (theater) => {
        const slug = theater.name.toLowerCase().replace(/\s+/g, '-');
        dispatch(setTheater((theater)));
        navigate(`/theater/${slug}`);
    }

    const navigateToMovieDetails = (movie) => {
        const slug = movie.title.toLowerCase().replace(/\s+/g, '-');
        dispatch(setMovie(movie))
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
                return 'border-[#10B981] text-[#10B981]';
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
        <div className='flex flex-col gap-6'>
            {
                theatersList().map(theater => (
                    <div className='border border-white/10 rounded-[10px]'>
                        <div className='flex flex-col gap-1 bg-[#1E1E1E] py-3 px-4'>
                            <div className='flex items-center justify-between uppercase font-bold text-[22px]'>
                                <p onClick={() => handleNavigate(theater)} className='text-[22px] uppercase font-semibold hover:underline decoration-1 cursor-pointer'>{theater.name}</p>
                                <Heart />
                            </div>
                            <div className='flex items-center gap-1 italic cursor-pointer text-gray-300 font-medium hover:text-white transition-colors duration-200'>
                                <MapPin size={24} />
                                <p>{theater.location.address}</p>
                            </div>
                        </div>



                        <div className='px-4'>
                            {
                                theater.nowShowingMovies.filter(movie => movie.shows.some(show => show.date === formatedDate)).map((movie, index) => {

                                    const showsOnDate = movie.shows.filter(show => show.date === formatedDate)
                                    const uniqueLanguages = [...new Set(movie.shows.map(show => show.language))];
                                    const activeLanguage = selectedLang[`${theater.id}-${movie.movieId}`] || uniqueLanguages[0];
                                    const showInLanguage = showsOnDate.filter(show => show.language === activeLanguage);
                                    const uniqueFormats = [...new Set(showInLanguage.map(show => show.format))]

                                    return (
                                        <div className={`w-full flex gap-8 ${index !== theater.nowShowingMovies.length - 2 ? 'border-b-8 border-white/10' : ''} pb-4 pt-4`}>
                                            <div className='w-[50%] flex gap-4'>
                                                <img className='w-32 h-50 rounded-[8px]' src={movie.poster} alt="" />
                                                <div className='flex flex-col gap-1'>
                                                    <p onClick={() => navigateToMovieDetails(movie)} className='text-[18px] font-semibold  hover:underline decoration-1 leading-5 cursor-pointer'>{movie.title}</p>
                                                    <p className='text-gray-300 text-sm'>{movie.duration}</p>
                                                </div>
                                            </div>
                                            <div className='text-gray-900'>
                                                <div className='flex gap-8'>
                                                    {
                                                        uniqueLanguages.map(language => (
                                                            <button
                                                                onClick={() => handleLangChange(theater.id, movie.movieId, language)}
                                                                className={`uppercase text-gray-400 font-semibold text-sm cursor-pointer ${language === activeLanguage && 'border-b text-white'}`}
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
                                                                <p className={`${getFormatColor(format)}`}>{format}</p>
                                                                <div className={`${getFormatColor(format)} w-full h-14 border-l-5 bg-[#1E1E1E] flex items-center justify-between text-sm text-gray-300 px-4 rounded`}>
                                                                    <p>Reserved seating, Recliner Seats, Accessibility devices available, Dine-In Delivery to Seat, Ad Free Preshow</p>
                                                                    <Info />
                                                                </div>

                                                                <div className={`flex items-center gap-6 pt-2 pb-6 ${index !== uniqueFormats.length - 1 ? 'border-b-2 border-white/10' : ''}`}>
                                                                    {
                                                                        showInLanguage.filter(show => show.format === format).map(show => (
                                                                            <button onClick={() => { handleSelectedThaterAndShowtime(theater, show); handleNavigateToSeatpage(movie) }} className={` ${selectedShowtime === show.time ? `${getFormatColor(format)}` : 'text-white/75'} border border-l-5 px-3 py-2 text-sm font-semibold rounded cursor-pointer`}>{show.time}</button>
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
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DesktopShowtimes