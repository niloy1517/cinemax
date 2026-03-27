import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Search, MapPin, Clapperboard, Theater, Star, UserStar, User, Menu, Navigation, TextAlignJustify } from 'lucide-react';
import MenubarModal from '../../Modal/MenubarModal';
import { useScrollLock } from '../../Hooks/useScrollLock';

const MobileNavbar = () => {
  const userLocation = JSON.parse(localStorage.getItem('userLocation'));
  const [isOpenMenubar, setIsOpenMenubar] = useState(false);
  useScrollLock(isOpenMenubar);


  return (
    <nav className='w-full sticky top-0 z-50 shadow-2xl bg-[#121212] text-white'>
      <div className='flex flex-col gap-3 px-6 bg-[#171C20] py-3'>
        <div className='w-full flex items-center justify-between '>

          <NavLink to="/" className='text-2xl font-black tracking-tighter text-white uppercase italic'>
            CINE<span className='text-amber-500 drop-shadow-[0_0_10px_rgba(229,9,20,0.4)]'>MAX</span>
          </NavLink>

          <div className='flex items-center gap-8'>
            <button className='cursor-pointer'><Search /></button>
            <button className='cursor-pointer'><User /></button>
          </div>
        </div>


      </div>
      <div className='w-full flex items-center justify-between px-6 py-3 border-b border-white/10'>
        <button onClick={() => setIsOpenMenubar(true)} className='cursor-pointer'><TextAlignJustify /></button>
        <div
          onClick={() => setOpenLocationModal(true)}
          className='flex items-center gap-2 cursor-pointer'
        >
          <Navigation />
          <span className='text-gray-200 uppercase font-semibold text-sm truncate max-w-[90px]'>
            {userLocation?.cityName || userLocation?.divisionName || 'Select City'}
          </span>
        </div>
      </div>

      {/* Modal */}
      
        {
          isOpenMenubar && <div className='fixed inset-0 w-full h-full bg-black/85'></div>
        }
        <div className={`fixed inset-0 w-full h-screen top-0 left-0 transition-transform duration-300 ease-in-out ${isOpenMenubar ? 'translate-x-0' : '-translate-x-full'}`}>
          <MenubarModal setIsOpenMenubar={setIsOpenMenubar} />
        </div>
      

    </nav>
  )
}

export default MobileNavbar