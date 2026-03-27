import React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const Navbar = ({ isSeatPage }) => {
  return (
    <div className='sticky top-0 left-0 z-20'>
      <div className='md:hidden'>
        <MobileNavbar />
      </div>
      <div className='hidden md:block'>
        <DesktopNavbar isSeatPage={isSeatPage} />
      </div>
    </div>
  )
}

export default Navbar