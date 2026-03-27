import React, { createContext, useState } from 'react'

export const tmdbMovieFilterContext = createContext(null);

const TMDBMoiveFilterProvider = ({ children }) => {

  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState('');

  const values = {
    genres, setGenres,
    language, setLanguage
  }
  return (
    <tmdbMovieFilterContext.Provider value={values}>
      {children}
    </tmdbMovieFilterContext.Provider>
  )
}

export default TMDBMoiveFilterProvider