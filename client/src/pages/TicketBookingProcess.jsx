import React from 'react'
import { assets } from '../assets/assets'

const TicketBookingProcess = () => {
  return (
    <div className='py-20 '>
        <div className='w-full flex items-center justify-center gap-2 pb-8 text-black'>
          <hr className='w-[300px]' />
          <span className='text-3xl font-bold'>BOOK TICKETS IN 3 EASY STEPS</span>
          <hr className='w-[300px]' />
        </div>

        <div className='flex gap-4 items-center justify-center pt-20'>
          <div className='w-[280px] h-[150px] flex justify-center relative bg-white rounded shadow-2xl'>
            <img className='absolute w-40 h-40 bottom-20' src={assets.movieSelect} alt="" />
            <div className='flex items-center gap-3 mt-18'>
              <p className='text-4xl text-red-700 font-bold'>1</p>
              <div>
                <p className='font-bold text-[22px] text-yellow-500'>CHOOSE MOVIE</p>
                <p className='text-gray-700'>Pick Your Favorite Movie</p>
              </div>
            </div>
          </div>
          <div className='w-[280px] h-[150px] flex justify-center relative bg-white rounded shadow-2xl'>
            <img className='absolute w-28 h-28 bottom-22' src={assets.time} alt="" />
            <div className='flex items-center gap-3 mt-18'>
              <p className='text-4xl text-red-700 font-bold'>2</p> 
              <div>
                <p className='font-bold text-[22px] text-yellow-500'>SELECT SCHEDULE</p>
                <p className='text-gray-700'>Choose Date & Showtime</p>
              </div>
            </div>
          </div>
          <div className='w-[280px] h-[150px] flex justify-center relative bg-white rounded shadow-2xl'>
            <img className='absolute w-40 h-30 bottom-22' src={assets.selectChar} alt="" />
            <div className='flex items-center gap-3 mt-18'>
              <p className='text-4xl text-red-700 font-bold'>3</p>
              <div>
                <p className='font-bold text-[22px] text-yellow-500'>GRAB YOUR SEATS</p>
                <p className=' text-gray-700'>Select Your Seats & Enjoy</p>
              </div>
            </div>
          </div>
        </div>
        
        
        
    </div>
  )
}

export default TicketBookingProcess