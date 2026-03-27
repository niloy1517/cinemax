import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../config/axios';
import TMDBMoviesCard from './TMDBMoviesCard';
import { tmdbMovieFilterContext } from '../../context/TMDBMoiveFilterProvider';

const TMDBUpcomingMovies = ({ currentPage, setTotalPage }) => {
    const { genres, language } = useContext(tmdbMovieFilterContext);

    const [loading, setLoading] = useState(false);
    const [upcomingMovies, setUpcomingingMovies] = useState([]);

    let nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    console.log(nextMonth)
    const getUpcomingMoviesFromTMDB = async () => {
        setLoading(true);
        const params = {
            gte: new Date().toISOString().split('T')[0],
            lte: nextMonth.toISOString().split('T')[0],
            sort: "popularity.desc",
            page: currentPage,
        };

        if (genres && genres !== '') {
            params.genres = genres.toString();
        }

        if (language) {
            params.language = language;
        }

        try {
            const response = await axiosInstance.get('/movie/upcoming', { params });
            setUpcomingingMovies(response.data.results);
            setTotalPage(response.data.total_pages)
        } catch (error) {
            console.log('Data not found');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUpcomingMoviesFromTMDB()
    }, [currentPage, genres, language])

    return (
        <div>
            {
                loading ?
                    (<div>Upcoming movie Loading...</div>)
                    :
                    (
                        <div>
                            {
                                upcomingMovies.length === 0 ?
                                    <p className='text-center text-2xl tracking-tight pt-5'>Movie Not Found</p>
                                    :
                                    <TMDBMoviesCard movies={upcomingMovies} />
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default TMDBUpcomingMovies