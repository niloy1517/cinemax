import tmdb from "../config/tmdb.js";
import movieModel from "../models/movieModel.js";
import cloudinary from 'cloudinary'

// const addMovie = async (req, res) => {
//     const poster = req.files && req.files.poster ? req.files.poster[0] : null;
//     const banner = req.files && req.files.banner ? req.files.banner[0] : null;

//     const uploadedFiles = [poster, banner]
//     try {
//         const { title, trailerUrl, duration, rating, release, description, status } = req.body;

//         const genres = JSON.parse(req.body.genres || "[]");
//         const languages = JSON.parse(req.body.languages || "[]");
//         const casts = JSON.parse(req.body.casts || "[]");
//         const crews = JSON.parse(req.body.crews || "[]");

//         if (!title || !poster || !banner || !trailerUrl || !duration || !rating || !genres || !release || !languages || !description || !casts || !crews || !status) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//         }

//         await movieModel.create({
//             title, poster: { public_id: poster.filename, url: poster.path }, banner: { public_id: banner.filename, url: banner.path }, trailerUrl, duration, rating, genres, release, languages, description, casts, crews, status
//         })

//         res.status(201).json({
//             success: true,
//             message: "Movie has been added successfully."
//         })
//     } catch (error) {
//         if (error) {
//             for (const file of uploadedFiles) {
//                 await cloudinary.uploader.destroy(file.public_id)
//             }
//             console.log('image deleted')
//         }

//         if (error.code) {
//             return res.status(400).json({
//                 success: false,
//                 message: "This movie already exist!"
//             })
//         }

//         res.status(500).json({
//             success: false,
//             message: "Something went wrong"
//         });
//         console.log(error.message)
//     }
// }



const getNowPlayingMoviesFromTMDB = async (req, res) => {
    const { gte, lte, type, sort, page, genres, language } = req.query;
    console.log(req.query)
    try {
        const response = await tmdb.get('/discover/movie', {
            params: {
                "primary_release_date.gte": gte,
                "primary_release_date.lte": lte,
                with_release_type: type,
                sort_by: sort,
                page: page,
                with_genres: genres,
                with_original_language: language
            }
        });

        res.status(200).json({
            success: true,
            message: 'TMDB data fetching successfully',
            results: response.data.results,
            total_pages: response.data.total_pages
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'TMDB data fetching failed'
        })
    }
}


const getUpcomingMoviesFromTMDB = async (req, res) => {
    const { gte, lte, sort, page, genres, language } = req.query;
    try {
        const response = await tmdb.get('/discover/movie', {
            params: {
                "primary_release_date.gte": gte,
                "primary_release_date.lte": lte,
                sort_by: sort,
                page: page,
                with_genres: genres,
                with_original_language: language
            }
        });

        res.status(200).json({
            success: true,
            message: 'TMDB data fetching successfully',
            results: response.data.results,
            total_pages: response.data.total_pages
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'TMDB data fetching failed'
        })
    }
}


const getMoviesBySearchFromTMDB = async (req, res) => {
    const { key } = req.query;

    try {
        const response = await tmdb.get('/search/movie', {
            params: {
                query: key,
                includes_adult: false
            }
        });

        res.status(200).json({
            success: true,
            message: 'TMDB data fetching successfully',
            results: response.data.results,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'TMDB data fetching failed'
        })
    }
}


const getRecommendationMoviesFromTMDB = async (req, res) => {
    const { movieId, page } = req.query;
    try {
        const response = await tmdb.get(`movie/${movieId}/recommendations`, {
            params: {
                page: page
            }
        });

        res.status(200).json({
            success: true,
            message: 'TMDB data fetching successfully',
            results: response.data.results,
            total_pages: response.data.total_pages
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'TMDB recommendation data fetching failed'
        })
    }
}

const addMovie = async (req, res) => {
    try {

    } catch (error) {

    }
}

const deleteMovie = async (req, res) => {
    try {

    } catch (error) {

    }
}


const updateMovie = async (req, res) => {
    try {

    } catch (error) {

    }
}


const getMovieList = async (req, res) => {
    try {

    } catch (error) {

    }
}



export { getNowPlayingMoviesFromTMDB, getUpcomingMoviesFromTMDB, getMoviesBySearchFromTMDB, getRecommendationMoviesFromTMDB, addMovie, deleteMovie, updateMovie, getMovieList }