import express from 'express';
import { addMovie, deleteMovie, updateMovie, getMovieList, getNowPlayingMoviesFromTMDB, getMoviesBySearchFromTMDB, getRecommendationMoviesFromTMDB, getUpcomingMoviesFromTMDB } from '../controllers/movieController.js';
import { upload } from '../config/cloudinary.js';

const movieRoute = express.Router();

movieRoute.get('/now_playing', getNowPlayingMoviesFromTMDB);
movieRoute.get('/upcoming', getUpcomingMoviesFromTMDB);
movieRoute.get('/search', getMoviesBySearchFromTMDB);
movieRoute.get('/recommendation', getRecommendationMoviesFromTMDB)

movieRoute.post('/add', upload.fields([
    {name: 'poster'},
    {name: 'banner'}
]), addMovie);

movieRoute.delete('/delete', deleteMovie);
movieRoute.put('/update', updateMovie);
movieRoute.get('/list', getMovieList);

export default movieRoute