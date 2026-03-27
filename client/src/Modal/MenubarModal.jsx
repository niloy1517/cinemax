import { 
    Clapperboard, Home, Star, Theater, X, 
    Ticket, User, Heart, LogOut, Gift, HelpCircle, Percent, 
    Contact
} from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MenubarModal = ({ setIsOpenMenubar }) => {
    const closeMenu = () => setIsOpenMenubar(false);

    return (
        <div className='w-[80%] md:w-[350px] h-full bg-[#121212] px-6 overflow-y-auto text-white shadow-2xl transition-all duration-300'>
            {/* Close Button */}
            <div className='flex justify-end pt-6'>
                <button onClick={closeMenu} className='cursor-pointer p-1 hover:bg-white/10 rounded-full transition-colors'>
                    <X size={28} />
                </button>
            </div>

            {/* Auth Buttons */}
            <div className='w-full flex items-center gap-3 py-8 border-b border-white/10'>
                <button className='flex-1 py-2.5 rounded font-bold cursor-pointer bg-amber-500 hover:bg-amber-600 text-black transition-all'>
                    Join For Free
                </button>
                <button className='flex-1 py-2.5 rounded font-bold cursor-pointer border border-white/20 hover:bg-white/5 transition-all'>
                    Sign In
                </button>
            </div>

            {/* Main Navigation */}
            <ul className='flex flex-col gap-5 font-medium py-8 border-b border-white/10'>
                {[
                    { to: '/', icon: <Home size={22} />, label: 'Home' },
                    { to: '/movies', icon: <Clapperboard size={22} />, label: 'Movies' },
                    { to: '/theaters', icon: <Theater size={22} />, label: 'Theatres' },
                    { to: '/news', icon: <Star size={22} />, label: 'Movie News' },
                    { to: '/contact', icon: <Contact size={22} />, label: 'Contact' },
                ].map((item, index) => (
                    <NavLink 
                        key={index}
                        onClick={closeMenu} 
                        to={item.to} 
                        className='group flex items-center gap-4'
                    >
                        {item.icon} 
                        <span className='group-hover:underline decoration-1'>
                            {item.label}
                        </span>
                    </NavLink>
                ))}
            </ul>

            {/* Manage Account Section */}
            <div className='py-8 border-b border-white/10'>
                <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>Manage Account</p>
                <div className='flex flex-col gap-5'>
                    <button className='group flex items-center gap-4 cursor-pointer w-full text-left'>
                        <Ticket size={22} /> 
                        <span className='group-hover:underline decoration-white underline-offset-4'>My Bookings</span>
                    </button>
                    <button className='group flex items-center gap-4 cursor-pointer w-full text-left'>
                        <Heart size={22} /> 
                        <span className='group-hover:underline decoration-white underline-offset-4'>Watchlist</span>
                    </button>
                    <button className='group flex items-center gap-4 cursor-pointer w-full text-left'>
                        <User size={22} /> 
                        <span className='group-hover:underline decoration-white underline-offset-4'>Profile Details</span>
                    </button>
                    <button className='group flex items-center gap-4 cursor-pointer w-full text-left text-red-400'>
                        <LogOut size={22} /> 
                        <span className='group-hover:underline decoration-red-400 underline-offset-4'>Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Others Section */}
            <ul className='flex flex-col gap-6 font-medium py-8 mb-10'>
                <NavLink onClick={closeMenu} className='group flex items-center gap-4'>
                    <Percent size={22} /> 
                    <span className='group-hover:underline decoration-white underline-offset-4'>Offers & Deals</span>
                </NavLink>
                <NavLink onClick={closeMenu} className='group flex items-center gap-4'>
                    <Gift size={22} /> 
                    <span className='group-hover:underline decoration-white underline-offset-4'>Gift Cards</span>
                </NavLink>
                <NavLink onClick={closeMenu} className='group flex items-center gap-4'>
                    <HelpCircle size={22} /> 
                    <span className='group-hover:underline decoration-white underline-offset-4'>Help Center</span>
                </NavLink>
            </ul>
        </div>
    )
}

export default MenubarModal;
