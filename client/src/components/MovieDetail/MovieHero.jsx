import { CirclePlay, Heart, Star } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { storeContext } from '../../Context/Context'
import TrailerModal from '../../Modal/TrailerModal'

const MovieHero = () => {

    const { isOpenTrailerModal, setIsOpenTrailerModal } = useContext(storeContext);

    const [isAddtoFav, setIsAddtoFav] = useState(false);

    const selectedMovieData = useSelector((state) => state.movie.selectedMovie);
    return (
        <div>
            <div className='w-full h-[500px] md:h-[400px] relative overflow-hidden'>

                {/* Background Image */}
                <img
                    className='hidden md:block w-full h-full object-cover'
                    src={selectedMovieData.cover}
                    alt=""
                />

                {/* Left dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>

                {/* Content */}
                <div className="absolute w-full top-0 left-0 h-full flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-10 px-6 md:px-10 z-10 text-white">
                    <img className='w-36 md:w-[200px] md:h-[80%] rounded-[6px] md:rounded-2xl' src={selectedMovieData.poster} alt="" />
                    <div>
                        <div className="text-gray-200 text-center md:text-start">
                            <h1 className="text-[26px] uppercase md:normal-case italic md:not-italic font-bold md:font-normal mb-2 md:mb-4">
                                {selectedMovieData.title}
                            </h1>

                            <div className='flex flex-col items-center md:items-start gap-1.5 font-medium'>
                                <p>
                                    {selectedMovieData.duration}
                                </p>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center gap-3'>
                                        <p>Rating:</p>
                                        <div className='flex items-center gap-1'>
                                            <Star size={17} className='text-amber-500 fill-amber-500' />
                                            <span>{selectedMovieData.rating}</span>
                                        </div>
                                    </div>
                                    <button className='text-sky-600 cursor-pointer'>Info</button>
                                </div>
                            </div>

                            <div className='w-full flex items-center gap-4 md:gap-10 font-medium mt-8'>

                                <button
                                    onClick={() => setIsOpenTrailerModal(true)}
                                    className='w-full flex items-center justify-center gap-1.5 px-4 py-1.5 rounded cursor-pointer bg-amber-500 text-black hover:bg-amber-600'
                                >
                                    <CirclePlay />
                                    <span className='uppercase font-bold'>Trailer</span>
                                </button>

                                <button
                                    onClick={() => setIsAddtoFav(!isAddtoFav)}
                                    className='flex items-center gap-1.5 border px-3 md:px-4 py-1.5 rounded cursor-pointer  hover:bg-white hover:text-black'
                                >
                                    <Heart size={22} className={`${isAddtoFav && 'text-rose-600 fill-rose-600'} `} />
                                    <span className='hidden md:block'>List</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpenTrailerModal && 'z-10'}`}>
                {
                    isOpenTrailerModal && <TrailerModal />
                }
            </div>
        </div>
    )
}

export default MovieHero