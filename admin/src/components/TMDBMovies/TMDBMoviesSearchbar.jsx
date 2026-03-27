import React, { useRef, useState } from 'react'
import { Search } from 'lucide-react'
import axiosInstance from '../../config/axios';
import TMDBAutoSuggestModal from '../../Modal/TMDBAutoSuggestModal';

const TMDBMoviesSearchbar = ({ setSearchKey, setMovieId, setActiveTab, isAutoSuggestModal, setIsAutoSuggestModal }) => {
    const typingTimer = useRef(null);
    const [autoSuggestion, setAutoSuggestion] = useState([]);
    const [query, setQuery] = useState('');
console.log(query)

    const handleOnchange = (currentValue) => {
        if(typingTimer.current) {
            clearTimeout(typingTimer.current)
        }

        typingTimer.current = setTimeout(() => {
            if (currentValue.trim().length > 2) {
                getAutoSuggestData(currentValue);
                setIsAutoSuggestModal(true)
            } else {
                console.log('emtyp')
                if(!currentValue || currentValue?.length < 2) {
                    setSearchKey(null)
                    setAutoSuggestion([]);
                    setIsAutoSuggestModal(false)
                }
            }
        }, 500);
    }


    const getAutoSuggestData = async (query) => {
        try {
            const response = await axiosInstance.get('/movie/search', {
                params: {
                    key: query
                }
            })
            setAutoSuggestion(response.data.results)
            console.log('search result', response.data.results)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div onClick={(e) => e.stopPropagation()} className='w-full relative'>
            <div onClick={() => setIsAutoSuggestModal(true)} className='w-full h-14 flex items-center border border-white/15 rounded-2xl'>
                <Search className='text-gray-400 absolute left-2' />
                <input type="text" name='search' value={query || ''} placeholder='Search' onChange={(e) => {
                    const value = e.target.value;
                    setQuery(value);
                    handleOnchange(value)
                }} className='relative h-full w-full px-10 rounded-2xl outline-0 focus:ring-1 focus:ring-amber-500' />
            </div>
            {
                isAutoSuggestModal && 
                     <TMDBAutoSuggestModal autoSuggestion={autoSuggestion} setAutoSuggestion={setAutoSuggestion} setActiveTab={setActiveTab} setSearchKey={setSearchKey} setQuery={setQuery} setMovieId={setMovieId} />
            }
        </div>
    )
}

export default TMDBMoviesSearchbar