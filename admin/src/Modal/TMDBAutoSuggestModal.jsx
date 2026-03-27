import React from 'react'

const TMDBAutoSuggestModal = ({ autoSuggestion, setSearchKey, setQuery, setAutoSuggestion, setActiveTab, setMovieId }) => {
    const handleResultOnclick = (movie) => {
        setSearchKey(movie.title);
        setQuery(movie.title);
        setAutoSuggestion([]);
        setMovieId(movie.id);
        setActiveTab('Search');
    }
    return (
        <div className='absolute bg-[#0a0a0a] w-full flex flex-col gap-2 py-3'>
            {
                autoSuggestion.slice(0, 6).map(movie => (
                    <div onClick={() => handleResultOnclick(movie)} className='flex space-x-2 hover:bg-white/5 cursor-pointer px-3'>
                        <img className='w-16 h-24' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
                        <div className='text-gray-400 flex flex-col space-y-0.5'>
                            <p className='font-medium'>{movie.title}</p>
                            <p>{movie.original_title} ({movie.original_language})</p>
                            <p className='text-sm'>{movie.release_date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TMDBAutoSuggestModal