import React from 'react'
import DesktopShowtimes from './DesktopShowtimes'
import MobileShowtimes from './MobileShow'


const Showtimes = ({selectedArea, formatedDate}) => {
  return (
    <div className='w-full'>
        <div className='hidden lg:block'>
            <DesktopShowtimes selectedArea={selectedArea} formatedDate={formatedDate} />
        </div>
        <div className='lg:hidden'>
            <MobileShowtimes selectedArea={selectedArea} formatedDate={formatedDate} />
        </div>
    </div>
  )
}

export default Showtimes