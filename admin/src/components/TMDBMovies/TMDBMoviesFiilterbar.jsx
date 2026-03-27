import { ChevronDown } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { tmdbMovieFilterContext } from '../../context/TMDBMoiveFilterProvider';

const TMDBMoviesFiilterbar = ({ activeTab, setActiveTab, setCurrentPage }) => {
    const { genres, setGenres, language, setLanguage } = useContext(tmdbMovieFilterContext);

    const [isOpenGenres, setIsOpenGenres] = useState(false);
    const [isOpenLanguages, setIsOpenLanguages] = useState(false);


    const languageOptions = [
        { label: 'Bangla', value: 'bn' },
        { label: 'English', value: 'en' },
        { label: 'Hindi', value: 'hi' },
        { label: 'Korean', value: 'ko' },
        { label: 'Tamil', value: 'ta' },
        { label: 'Telugu', value: 'te' },
        { label: 'Japanese', value: 'ja' },
        { label: 'Malayalam', value: 'ml' },
        { label: 'Spanish', value: 'es' },
        { label: 'Turkish', value: 'tr' }
    ];

    const genreOptions = [
        { label: 'Action', value: 28 },
        { label: 'Adventure', value: 12 },
        { label: 'Animation', value: 16 },
        { label: 'Comedy', value: 35 },
        { label: 'Crime', value: 80 },
        { label: 'Documentary', value: 99 },
        { label: 'Drama', value: 18 },
        { label: 'Family', value: 10751 },
        { label: 'Fantasy', value: 14 },
        { label: 'History', value: 36 },
        { label: 'Horror', value: 27 },
        { label: 'Music', value: 10402 },
        { label: 'Mystery', value: 9648 },
        { label: 'Romance', value: 10749 },
        { label: 'Science Fiction', value: 878 },
        { label: 'Thriller', value: 53 },
        { label: 'War', value: 10752 },
        { label: 'Western', value: 37 }
    ];

    const handleGenresSelection = (genre) => {
        setGenres(prev => (
            prev.find(gen => gen === genre) ? prev.filter(gen => gen !== genre) : [...prev, genre]
        ));
        setCurrentPage(1);
    }


    const handleLanguageSelection = (language) => {
        setLanguage(language);
        setCurrentPage(1);
    }

    return (
        <div className='min-w-80'>
            <p className='uppercase font-semibold pb-3'>Active Tab</p>

            <div className='flex items-center gap-2'>
                <button onClick={() => { setActiveTab('Now Playing'); setGenres([]); setLanguage(''); setCurrentPage(1) }} className={`w-full h-10 border border-white/15 rounded cursor-pointer ${activeTab === 'Now Playing' && 'bg-amber-500'}`}>Now Playing</button>
                <button onClick={() => { setActiveTab('Upcoming'); setGenres([]); setLanguage(''); setCurrentPage(1) }} className={`w-full h-10 border border-white/15 rounded cursor-pointer ${activeTab === 'Upcoming' && 'bg-amber-500'}`}>Upcoming</button>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='uppercase font-semibold pt-6'>Filters by</p>
                <div className='flex flex-col gap-2 px-2 pt-2 border border-white/10'>
                    <div className='flex items-center justify-between'>
                        <button
                            onClick={() => setIsOpenGenres(!isOpenGenres)}
                            className='flex items-center gap-1 cursor-pointer'
                        >
                            Genre <ChevronDown className={`${isOpenGenres && 'rotate-180'}`} />
                        </button>
                        <button onClick={() => setGenres([])} className='cursor-pointer'>Clear</button>
                    </div>
                    <div>
                        {
                            isOpenGenres &&
                            <div className='flex flex-wrap gap-2 pb-2'>
                                {
                                    genreOptions.map(genre => (
                                        <button
                                            onClick={() => handleGenresSelection(genre.value)}
                                            className={`text-sm px-3 py-1 border border-white/15 rounded cursor-pointer text-gray-300 ${genres.find(gen => gen === genre.value) && 'bg-amber-500'}`}
                                        >
                                            {genre.label}
                                        </button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-2 px-2 pt-2 border border-white/10'>
                    <div className='flex items-center justify-between'>
                        <button
                            onClick={() => setIsOpenLanguages(!isOpenLanguages)}
                            className='flex items-center gap-1 cursor-pointer'
                        >
                            Language <ChevronDown className={`${isOpenLanguages && 'rotate-180'}`} />
                        </button>
                        <button onClick={() => setLanguage('')} className='cursor-pointer'>Clear</button>
                    </div>
                    <div>
                        {
                            isOpenLanguages &&
                            <div className='flex flex-wrap gap-2 pb-2'>
                                {
                                    languageOptions.map(lang => (
                                        <button
                                            onClick={() => handleLanguageSelection(lang.value)}
                                            className={`text-sm px-3 py-1 border border-white/15 rounded cursor-pointer text-gray-300 ${language === lang.value && 'bg-amber-500'}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TMDBMoviesFiilterbar