import React, { useContext, useState } from 'react';
import { Search, MapPin, Clapperboard, Theater, Star, User, Contact } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import TheatresListModal from '../../Modal/TheatresListModal';
import { useScrollLock } from '../../Hooks/useScrollLock';
import { storeContext } from '../../Context/Context';
import AuthenticationModal from '../../Modal/AuthenticationModal';
import AccountVerificationModal from '../../Modal/AccountVerificationModal';

const DesktopNavbar = ({ isSeatPage }) => {
    // State & Context
    const { openLocationModal, setOpenLocationModal } = useContext(storeContext);
    const [isAuth, setIsAuth] = useState(false);
    const [isAccountVerify, setIsAccountVerify] = useState(false)

    // Prevent background scrolling when location modal is open
    useScrollLock(openLocationModal || isAuth || isAccountVerify);

    // Get user location from local storage
    const userLocation = JSON.parse(localStorage.getItem('userLocation'));

    return (
        <nav className='w-full sticky top-0 z-50 shadow-2xl bg-[#121212] text-white'>

            {/* Top Bar: Logo & Search bar */}
            <div className='w-full py-3 px-10 lg:px-20 flex items-center justify-between border-b border-white/10 bg-[#171C20]'>

                {/* Logo */}
                <NavLink to="/" className='text-3xl font-black tracking-tighter text-white uppercase italic'>
                    CINE<span className='text-amber-500 drop-shadow-[0_0_10px_rgba(229,9,20,0.4)]'>MAX</span>
                </NavLink>

                {/* Search Bar (Hidden on Seat Selection Page) */}
                {!isSeatPage && (
                    <div className='flex items-center group bg-[#1F1F1F] rounded-md px-4 py-1 border border-white/10 focus-within:border-amber-500 transition-all w-full max-w-sm lg:max-w-md'>
                        <input
                            type="text"
                            placeholder='Search movies, actors, directors...'
                            className='w-full bg-transparent px-2 py-2 outline-0 text-sm font-medium text-gray-200 placeholder:text-gray-500'
                        />
                        <Search
                            className='text-gray-500 hover:text-white cursor-pointer transition-colors'
                            size={20}
                        />
                    </div>
                )}

                {/* User Profile Icon (Visible only on Seat Selection Page) */}
                {isSeatPage && (
                    <button className='size-10 bg-[#171C20] rounded-full shadow-2xl flex items-center justify-center border border-gray-800 cursor-pointer'>
                        <User />
                    </button>
                )}
            </div>

            {/* Bottom Bar: Navigation Links */}
            {!isSeatPage && (
                <div className='w-full py-2 px-10 lg:px-20 flex items-center justify-between border-b border-white/5 bg-[#121212] backdrop-blur-md'>

                    {/* Navigation Links */}
                    <ul className='flex items-center space-x-6 lg:space-x-12 text-gray-300 text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold'>
                        {[
                            { to: '/movies', icon: <Clapperboard size={18} />, label: 'Movies' },
                            { to: '/theaters', icon: <Theater size={22} />, label: 'Theatres' },
                            { to: '/news', icon: <Star size={22} />, label: 'Movie News' },
                            { to: '/contact', icon: <Contact size={22} />, label: 'Contact' },
                        ].map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                className='flex flex-col items-center gap-0.5 hover:text-white hover:underline underline-offset-4 decoration-amber-500'
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </ul>

                    {/* Right Side: Location & Auth */}
                    <div className='flex items-center gap-8'>
                        {/* Location Selector */}
                        <div
                            onClick={() => setOpenLocationModal(true)}
                            className='flex items-center gap-2 cursor-pointer group hover:bg-white/5 px-3 py-1.5 rounded transition-all border border-transparent hover:border-white/10'
                        >
                            <MapPin size={20} className='text-amber-500' />
                            <span className='text-gray-200 font-semibold text-sm truncate max-w-[120px]'>
                                {userLocation?.cityName || userLocation?.divisionName || 'Select City'}
                            </span>
                        </div>

                        {/* Sign In Button */}
                        <button
                            onClick={() => setIsAuth(true)}
                            className='flex items-center gap-2 cursor-pointer bg-amber-500 hover:bg-amber-600 text-white px-3 md:px-6 py-2 rounded-md text-xs font-extrabold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-amber-900/20'
                        >
                            <User size={16} />
                            <span>Sign in</span>
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL OVERLAYS */}

            {/* 1. Location Selection Modal */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openLocationModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='w-full absolute inset-0 bg-black/80 backdrop-blur-sm' onClick={() => setOpenLocationModal(false)} />
                <div className={`w-full flex justify-center transform transition-all duration-500 ease-out ${openLocationModal ? 'translate-y-12 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <TheatresListModal setOpenLocationModal={setOpenLocationModal} />
                </div>
            </div>

            {/* 2. Authentication (Login/Signup) Modal */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isAuth ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='w-full absolute inset-0 bg-black/80 backdrop-blur-sm' onClick={() => setIsAuth(false)} />
                <div className={`w-[450px] flex m-auto justify-center transform transition-all duration-500 ease-out ${isAuth ? 'translate-y-1/3 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <AuthenticationModal isAuth={isAuth} setIsAuth={setIsAuth} setIsAccountVerify={setIsAccountVerify} />
                </div>
            </div>

            {/* 3. Account Verification Modal */}
            {
                isAccountVerify &&
                <div onClick={() => setIsAccountVerify(false)} className='fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
                    <AccountVerificationModal isAccountVerify={isAccountVerify} setIsAccountVerify={setIsAccountVerify} />
                </div>
            }
        </nav>
    );
};

export default DesktopNavbar;
