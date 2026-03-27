import React, { useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom'
import { Search, Bell, User, LogOut, Settings, Menu, ChevronDown, TextAlignCenterIcon, MenuIcon, TextAlignJustify, CircleUser } from 'lucide-react';

const Navbar = ({ isShowLabel, setIsShowLabel }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const location = useLocation();

  const isTMDBMoviePage = matchPath('dashboard/tmdb/movies', location.pathname);

  return (
    <nav className="w-full h-[8vh] bg-[#0f0f0f] text-white border-b border-white/5 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className='w-58'>
        <p className='font-bold italic text-[20px] md:text-3xl tracking-tighter text-amber-500 drop-shadow-[0_0_10px_rgba(229,9,20,0.4)]'>CINE<span className='text-white'>MAX</span></p>
      </div>

      {/* Left: Search Bar */}
      <div className="flex items-center gap-10 flex-1">
        <button onClick={() => setIsShowLabel(!isShowLabel)} className="hidden md:block cursor-pointer text-gray-400 hover:text-white">
          <TextAlignJustify />
        </button>

        {
          !isTMDBMoviePage &&
          <div className='relative max-w-md w-full hidden md:block'>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search analytics, users..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
        }
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-10">

        {/* Notifications */}
        <button className="relative text-gray-400 hover:text-white transition-colors cursor-pointer">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-amber-500 text-[10px] text-black font-bold h-4 w-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 cursor-pointer group focus:outline-none"
          >
            <div className="text-right">
              <p className="text-sm font-bold text-white leading-none">Niloy Gope</p>
              <p className="text-[12px] text-amber-500 tracking-wider font-medium mt-1">niloy@gmail.com</p>
            </div>


            <ChevronDown size={20} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-[#1a1a1a] border border-white/10 rounded-2xl py-2 shadow-2xl animate-in fade-in zoom-in duration-200">
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                <User size={16} /> Profile Settings
              </button>
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                <Settings size={16} /> System Logs
              </button>
              <div className="h-px bg-white/5 my-1 mx-2" />
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
