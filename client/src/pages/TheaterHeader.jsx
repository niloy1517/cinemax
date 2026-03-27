import { MapPin, Info, Share2, Star, Navigation, ParkingCircle, Volume2 } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

const TheaterHeader = () => {
    const selectedTheaterData = useSelector((state) => state.theater.selectedTheater);

    if (!selectedTheaterData) return null;

    return (
        <div className='w-full py-6 md:py-10 text-white'>
            <div className='flex flex-col py-6 px-5 md:py-8 md:pl-8 border-l-[6px] border-amber-500 bg-gradient-to-r from-white/5 to-transparent rounded-r-2xl shadow-2xl relative overflow-hidden'>

                {/* Background Decor (Subtle Circle) */}
                <div className='absolute -top-10 -right-10 w-50 h-50 bg-amber-500/10 rounded-full blur-3xl'></div>

                {/* Top Section: Name & Rating */}

                <div className='flex flex-col gap-4'>
                    <h1 className='font-black text-2xl md:text-4xl tracking-tight uppercase'>
                        {selectedTheaterData.name}
                    </h1>
                    <div className='flex items-center gap-2 text-amber-500'>
                        <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <span className='text-xs font-bold text-gray-400'>(4.2/5 • 1.2k Reviews)</span>
                    </div>
                </div>




                {/* Middle: Address & Map Action */}
                <div className='mt-3 md:mt-5 flex flex-wrap items-center gap-4'>
                    <div className='flex items-center gap-3 group cursor-pointer'>
                        <div className='p-2 bg-white/5 rounded-full group-hover:bg-amber-500 transition-all'>
                            <MapPin size={18} className='text-amber-500 group-hover:text-black' />
                        </div>
                        <p className='text-sm md:text-lg font-medium text-gray-400 group-hover:text-white transition-colors'>
                            {selectedTheaterData.location?.address}
                        </p>
                    </div>

                    <button className='flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:underline'>
                        <Navigation size={18} /> GET DIRECTIONS
                    </button>
                </div>



                {/* Bottom: Action Buttons */}
                <div className='flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-white/5'>
                    <button className='flex items-center gap-2 text-xs font-bold text-gray-300 cursor-pointer hover:text-amber-500 transition-all uppercase tracking-widest'>
                        <Info size={18} /> Theater Info
                    </button>

                    <div className='hidden md:block h-6 w-[1px] bg-white/10' />

                    <button className='flex items-center gap-2 text-xs font-bold text-gray-300 cursor-pointer hover:text-blue-400 transition-all uppercase tracking-widest'>
                        <Share2 size={18} /> Share Venue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TheaterHeader;
