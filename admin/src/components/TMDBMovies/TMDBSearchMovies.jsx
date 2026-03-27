import React, { useContext, useEffect, useState } from 'react'
import TMDBMoviesCard from './TMDBMoviesCard';
import axiosInstance from '../../config/axios';

const TMDBSearchMovies = ({ searchKey }) => {
    const [loading, setLoading] = useState(false);
    const [searchMovies, setSearchMovies] = useState([]);



    const getMoviesBySearchFromTMDB = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get('/movie/search', {
                params: {
                    key: searchKey,
                }
            });
            console.log(response)
            setSearchMovies(response.data.results);

        } catch (error) {
            console.log('Data not found', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMoviesBySearchFromTMDB()
    }, [searchKey])

    return (
        <div>
            {
                loading ?
                    (<div>Search movie Loading...</div>)
                    :
                    (<TMDBMoviesCard movies={searchMovies} />)
            }
        </div>
    )
}

export default TMDBSearchMovies