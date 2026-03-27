import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { theatreList } from '../assets/assets';
import { Heart, Info, MapPin, RockingChair } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { setTheater } from '../features/theaters/theaterSlice';
import { setSelectedShow, setSelectedTheater } from '../features/movieBookingDetails/movieBookingDetailsSlice';

const SelectedMovieShowOnTheaters = ({ formatedDate }) => {

  const selectedMovieData = useSelector((state) => state.movie.selectedMovie);

  const userLocation = JSON.parse(localStorage.getItem('userLocation')) || { divisionId: '', cityId: '' };

  const theaterFilteredByLocation = theatreList.filter(theater => userLocation.cityId ? theater.location.cityId === userLocation.cityId : theater.location.divisionId === userLocation.divisionId)


  const filteredTheater = () => {
    const theaterFilteredByMovie = theaterFilteredByLocation.filter(theater => theater.nowShowingMovies.some(movie => movie.title.toLocaleLowerCase() === selectedMovieData.title.toLocaleLowerCase()));

    const theaterFilterByDate = theaterFilteredByMovie.filter(theater => theater.nowShowingMovies.some(movie => movie.shows.some(show => show.date === formatedDate)))

    return theaterFilterByDate
  }

  const [selectedLanguage, setSelectedLanguage] = useState('')

  const handleLanguageChange = (theaterId, language) => {
    setSelectedLanguage(prev => ({
      ...prev, [theaterId]: language
    }))
  }

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleNavigate = (theater) => {
    const slug = theater.name.toLowerCase().replace(/\s+/g, '-');
    dispatch(setTheater(theater));
    navigate(`/theater/${slug}`);
  }


  const [selectedShowtime, setSelectedShowtime] = useState({});

  const handleSelectedThaterAndShowtime = (theater, show) => {
    dispatch(setSelectedTheater(theater));
    dispatch(setSelectedShow(show));
    setSelectedShowtime(`${theater.id}-${show.time}`)
  }

  const handleNavigateToSeatpage = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
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



  return (
    <div className='flex flex-col gap-6'>
      {
        filteredTheater().map(theater => {
          const filteredMovie = theater.nowShowingMovies.filter(movie => movie.title === selectedMovieData.title)

          return filteredMovie.map(movie => {
            const showsOnDate = movie.shows.filter(show => show.date === formatedDate);
            const uniqueLanguages = [...new Set(showsOnDate.map(show => show.language))];
            const activeLanguage = selectedLanguage[theater.id] || uniqueLanguages[0];
            const uniqueFormats = [...new Set(showsOnDate.filter(show => show.language === activeLanguage).map(show => show.format))];
            const showInLanguage = showsOnDate.filter(show => show.language === activeLanguage);

            return (
              <div className='border border-white/10 rounded'>
                <div className='flex flex-col gap-1.5 bg-[#1E1E1E] py-2 px-4'>
                  <div className='flex items-center justify-between'>
                    <p onClick={() => handleNavigate(theater)} className='md:text-[22px] uppercase font-semibold hover:underline decoration-1 cursor-pointer'>{theater.name}</p>
                    <Heart />
                  </div>
                  <div className='text-sm md:text-[16px] flex items-center gap-1 italic cursor-pointer text-gray-300 font-medium hover:text-white transition-colors duration-200'>
                    <MapPin size={20} strokeWidth={2} />
                    <p>{theater.location.address}</p>
                  </div>
                </div>
                <div className='flex gap-8 items-center pt-2 px-4 text-gray-400 mb-4'>
                  {
                    uniqueLanguages.map(language => (
                      <button onClick={() => handleLanguageChange(theater.id, language)} className={`text-[12px] md:text-[16px] uppercase font-medium cursor-pointer ${activeLanguage === language && 'border-b-3 text-white'}`}>{language}</button>
                    ))
                  }
                </div>
                <div className='mt-3 flex flex-col gap-4 px-4 '>
                  {
                    uniqueFormats.map((format, index) => (
                      <div key={index} className='flex flex-col gap-3'>
                        <p className={`${getFormatColor(format)} text-[12px] md:text-[16px] uppercase font-medium `}>{format}</p>
                        <div className={`${getFormatColor(format)} w-full h-14 border-l-5 bg-[#1E1E1E] flex items-center justify-between text-[10px] md:text-sm text-gray-300 px-2 md:px-4 rounded`}>
                          <p>Reserved seating, Recliner Seats, Accessibility devices available, Dine-In Delivery to Seat, Ad Free Preshow</p>
                          <Info />
                        </div>

                        <div className={`flex items-center gap-6 pt-2 pb-6 ${index !== uniqueFormats.length - 1 ? 'border-b-2 border-white/10' : ''}`}>
                          {
                            showInLanguage.filter(show => show.format === format).map(show => (
                              <button onClick={() => { handleSelectedThaterAndShowtime(theater, show); handleNavigateToSeatpage(movie.title) }} className={` ${selectedShowtime === `${theater.id}-${show.time}` ? `${getFormatColor(format)}` : 'text-white/75'} border border-l-5 px-3 py-2 text-[12px] md:text-sm font-semibold rounded cursor-pointer`}>{show.time}</button>
                            ))
                          }
                        </div>
                      </div>
                    ))
                  }

                </div>

              </div>
            )
          })
        })
      }
    </div>
  )
}

export default SelectedMovieShowOnTheaters