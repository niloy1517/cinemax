import { Calendar, MapPin } from 'lucide-react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { storeContext } from '../Context/Context';

const SelectDate = ({activeDate, setActiveDate, dates}) => {
    

const {selectedMovieData, setSelectedMovieData} = useContext(storeContext);
    
    const dateRef = useRef(null);

    const formatDateForInput = (date) => date.toISOString().split('T')[0];


    useEffect(() => {
        setSelectedMovieData(prev => ({
            ...prev,
            date: activeDate
        }))
    }, [activeDate])

    return (
        <div>
            <h1 className='text-2xl text-gray-700 font-medium pb-6'>Select Date</h1>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-3'>
                    {
                        dates.map(date => {
                            return (
                                <div
                                    key={date}
                                    onClick={() => {setActiveDate(date)}}
                                    className={`w-30 h-18 px-3 py-2 shadow text-gray-600 cursor-pointer ${date.toDateString() === activeDate.toDateString() && 'border-2 border-red-700 text-red-700 shadow'} rounded-[6px]`}
                                >
                                    <p>{date.toLocaleDateString('en-US', { weekday: 'short' })}</p>
                                    <div className='flex items-center gap-1.5'>
                                        <p className='text-2xl font-medium'>{date.getDate()}</p>
                                        <p>{date.toLocaleDateString('en-US', { month: 'short' })}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-30 h-18 flex items-center rounded-[6px] shadow text-gray-600 text-sm hover:shadow'>
                    <div className='px-3'>
                        <p className='leading-4'>Select Datee</p>
                        <input
                            type="date"
                            ref={dateRef}
                            className='hidden'
                            value={formatDateForInput(activeDate)}
                            onChange={(e) => {setActiveDate(new Date(e.target.value))}}
                        />
                        <div className='flex gap-1.5'>
                            <p className='font-medium'>{activeDate.getDate()}</p>
                            <p>{activeDate.toLocaleDateString('en-US', { month: 'short' })}</p>
                        </div>
                    </div>
                    <div
                        onClick={() => dateRef.current.showPicker()}
                        className='min-w-[36%] h-[94%] flex items-center justify-center mx-1 bg-red-700/30 cursor-pointer rounded'
                    >
                        <Calendar className='text-red-700' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDate