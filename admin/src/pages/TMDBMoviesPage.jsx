import React, { useState } from 'react'
import TMDBMoviesSearchbar from '../components/TMDBMovies/TMDBMoviesSearchbar';
import TMDBMoviesFiilterbar from '../components/TMDBMovies/TMDBMoviesFiilterbar';
import Pagination from '../components/TMDBMovies/Pagination';
import TMDBRecommendationsMovie from '../components/TMDBMovies/TMDBRecommendationsMovie';
import TMDBNowPlayingMovies from '../components/TMDBMovies/TMDBNowPlayingMovies';
import TMDBUpcomingMovies from '../components/TMDBMovies/TMDBUpcomingMovies';
import TMDBSearchMovies from '../components/TMDBMovies/TMDBSearchMovies';
const TMDBMoviesPage = () => {
    const [activeTab, setActiveTab] = useState('Now Playing');
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchKey, setSearchKey] = useState(null);
    const [movieId, setMovieId] = useState(null);
    const [isAutoSuggestModal, setIsAutoSuggestModal] = useState(false);
    
   


    return (
        <div onClick={() => setIsAutoSuggestModal(false)} className='w-full h-[92vh] overflow-y-auto p-6 bg-[#0a0a0a] text-white'>
            <div className="mb-8">
                <h1 className="text-2xl font-extrabold ">Global Movie Manager</h1>
                <p className=" mt-1">Browse and import latest movies into your local system.</p>
            </div>



            <div className='w-full flex gap-10'>
                <div className='w-[70%] flex flex-col gap-8'>
                    <TMDBMoviesSearchbar searchKey={searchKey} setSearchKey={setSearchKey} setMovieId={setMovieId} setActiveTab={setActiveTab} isAutoSuggestModal={isAutoSuggestModal} setIsAutoSuggestModal={setIsAutoSuggestModal} />

                    {
                        activeTab === 'Now Playing' &&
                        <TMDBNowPlayingMovies currentPage={currentPage} setTotalPage={setTotalPage} />
                    }

                    {
                        activeTab === 'Upcoming' &&
                        <TMDBUpcomingMovies currentPage={currentPage} setTotalPage={setTotalPage} />
                    }

                    {
                        activeTab === 'Search' &&
                        <TMDBSearchMovies currentPage={currentPage} setTotalPage={setTotalPage} searchKey={searchKey} />
                    }

                    {
                        movieId && activeTab === 'Search' &&
                        <TMDBRecommendationsMovie movieId={movieId} setTotalPage={setTotalPage} currentPage={currentPage} />
                    }


                </div>
                <div className='w-[30%]'>
                    <TMDBMoviesFiilterbar activeTab={activeTab} setActiveTab={setActiveTab} setCurrentPage={setCurrentPage} />
                </div>
            </div>
            <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default TMDBMoviesPage