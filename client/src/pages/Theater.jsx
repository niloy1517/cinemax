import React, { useState } from 'react'
import NewAndComingSoonMovies from './NewAndComingSoonMovies'
import NearbyTheater from './NearbyTheater'
import ShowDateSelector from '../components/Reusable/ShowDateSelector'
import TheaterHeader from './TheaterHeader'
import TheaterMovies from './TheaterMovies'


const Theater = () => {
    const [formatedDate, setFormatedDate] = useState('')

    const getFormatedDate = (date) => {
        setFormatedDate(date)
    }

    return (
        <div className='w-full px-6 md:px-10 bg-[#121212]'>
            <TheaterHeader />
            <div className='w-full flex'>
                <div className='w-full xl:w-[70%]'>
                    <ShowDateSelector getFormatedDate={getFormatedDate} />
                    <TheaterMovies formatedDate={formatedDate} />
                    <NearbyTheater />
                </div>
                <div className='hidden xl:block'>sfdsdfsafsadf</div>
            </div>
            <NewAndComingSoonMovies />
        </div>
    )
}

export default Theater