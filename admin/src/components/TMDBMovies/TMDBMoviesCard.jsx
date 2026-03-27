import React from 'react'

const TMDBMoviesCard = ({movies}) => {
  return (
    <div className='w-full flex flex-wrap gap-4 space-y-8'>
      {
        movies.map(movie => (
          <div key={movie.id} className='w-40 h-80'>

            <img className='w-full h-60 rounded border border-white/10' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />

            <p className='font-semibold truncate py-1 tracking-tight'>{movie.title}</p>
            <div className='text-sm text-gray-300 font-medium flex items-center justify-between tracking-tight'>
              <p>{movie.release_date}</p>
              <p>⭐ {movie.vote_average.toFixed(1)}</p>
            </div>

            <button className='mt-2 text-sm tracking-tight bg-amber-600 hover:bg-amber-700 font-medium cursor-pointer px-3 py-1 rounded'>Add to Database</button>
          </div>
        ))
      }
    </div>
  )
}

export default TMDBMoviesCard