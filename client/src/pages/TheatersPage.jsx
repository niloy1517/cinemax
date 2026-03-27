import React, { useEffect, useState } from 'react'
import { theatreList } from '../assets/assets';
import ShowDateSelector from '../components/Reusable/ShowDateSelector';
import Showtimes from '../components/theaters/Showtimes';
import NewAndComingSoonMovies from './NewAndComingSoonMovies';

const TheatersPage = () => {
    const [formatedDate, setFormatedDate] = useState('');

    const getFormatedDate = (date) => {
        setFormatedDate(date)
    }

    const userLocation = JSON.parse(localStorage.getItem('userLocation')) || { divisionId: '', cityId: '' };

    const [selectedArea, setSelectedArea] = useState('');

    useEffect(() => {
        if (userLocation.divisionId || userLocation.cityId) {
            setSelectedArea(userLocation.cityId || userLocation.divisionId)
        }
    }, [userLocation.divisionId, userLocation.cityId])

    const nearbyArea = theatreList.filter(theater => theater.location.divisionId === userLocation.divisionId);
    const uniqueArea = [...new Set(nearbyArea.map(area => area.location.cityId))]
    return (
        <div className='w-full px-6 md:px-10 bg-[#121212] text-white'>
            <div>
                <div className='w-full xl:w-[70%]'>
                    <ShowDateSelector getFormatedDate={getFormatedDate} />
                    <div className='flex justify-between items-center mb-8'>
                        <div className='flex flex-wrap items-center gap-2'>
                            <p className=' uppercase font-bold text-xs lg:text-[18px]'>Nearby Theaters: </p>
                            <select name="" id="" onChange={(e) => setSelectedArea(e.target.value)} className='bg-white text-black text-sm border border-gray-300 px-3 py-0.5 w-50 lg:w-60 rounded'>
                                <option value={selectedArea} className='hidden'>Select Theater</option>
                                {
                                    uniqueArea.map((area, index) => (
                                        <option value={area} key={index}>{area}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <Showtimes selectedArea={selectedArea} formatedDate={formatedDate} />
                </div>
                <NewAndComingSoonMovies />
            </div>
        </div>
    )
}

export default TheatersPage