import React, { useContext, useEffect, useState } from 'react'
import TMDBMoviesCard from './TMDBMoviesCard';
import axiosInstance from '../../config/axios';
import { tmdbMovieFilterContext } from '../../context/TMDBMoiveFilterProvider';

const TMDBNowPlayingMovies = ({ currentPage, setTotalPage }) => {
    const { genres, language } = useContext(tmdbMovieFilterContext);

    const [loading, setLoading] = useState(false);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    let lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1)




    const getNowPlayingMoviesFromTMDB = async () => {
        setLoading(true);

        const params = {
            gte: lastMonth.toISOString().split('T')[0],
            lte: new Date().toISOString().split('T')[0],
            type: "2|3",
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
            const response = await axiosInstance.get('/movie/now_playing', { params });

            setNowPlayingMovies(response.data.results);
            setTotalPage(response.data.total_pages);
        } catch (error) {
            console.log('Data not found');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getNowPlayingMoviesFromTMDB()
    }, [currentPage, genres, language])
    return (
        <div>
            {
                loading ?
                    (<div>Now play movie Loading...</div>)
                    :
                    (
                        <div>
                            {
                                nowPlayingMovies.length === 0 ?
                                    <p className='text-center text-2xl tracking-tight pt-5'>Movie Not Found</p>
                                    :
                                    <TMDBMoviesCard movies={nowPlayingMovies} />
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default TMDBNowPlayingMovies