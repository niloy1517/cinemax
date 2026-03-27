import React from 'react'
import { theatreList } from '../assets/assets';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTheater } from '../features/theaters/theaterSlice';

const NearbyTheater = () => {
    const userLocation = JSON.parse(localStorage.getItem('userLocation'));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filteredTheater = theatreList.filter(
        theater => userLocation?.cityId
            ? theater.location.cityId === userLocation?.cityId
            : theater.location.divisionId === userLocation?.divisionId
    )


    const handleNavigateToTheater = (theater) => {
        dispatch(setTheater(theater))

        const slug = theater.name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/theater/${slug}`)
    }

    
    return (
        <div className='w-full my-16 text-white'>
            <h1 className='uppercase font-extrabold text-[20px] pb-4'>Nearby theaters</h1>

            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:border border-white/10 p-4 rounded'>
                {
                    filteredTheater.map(theater => (
                        <div>
                            <button onClick={() => handleNavigateToTheater(theater)} className='font-extrabold uppercase text-blue-500/90 hover:underline decoration-1 cursor-pointer'>{theater.name}</button>
                            <div className='flex items-center gap-1 font-medium'>
                                <MapPin size={18} />
                                <p>{theater.location.address}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NearbyTheater