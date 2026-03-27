import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import TMDBMoviesCard from './TMDBMoviesCard';
import { tmdbMovieFilterContext } from '../../context/TMDBMoiveFilterProvider';
const TMDBRecommendationsMovie = ({ movieId, currentPage, setTotalPage }) => {
    const { genres, language } = useContext(tmdbMovieFilterContext)
    const [recommendMovies, setRecommendMovies] = useState([]);

    let lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1)

    const getRecommendationMovie = async () => {
        try {
            const response = await axiosInstance.get('/movie/recommendation', {
                params: {
                    movieId,
                    page: currentPage
                }
            });
            setRecommendMovies(response.data.results)
            setTotalPage(response.data.total_pages)
            console.log(response.data.total_pages, currentPage)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRecommendationMovie()
    }, [movieId, currentPage, language, genres])
    return (
        <div>
            <h1 className='text-2xl pb-4'>Recommendation</h1>
            <TMDBMoviesCard movies={recommendMovies} />
        </div>
    )
}

export default TMDBRecommendationsMovie