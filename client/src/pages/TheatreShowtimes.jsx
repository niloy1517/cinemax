import React, { useContext } from 'react';
import { ArrowLeft, MapPin, Star, Laptop, Info } from 'lucide-react';
import { storeContext } from '../Context/Context';

const TheatreShowtimes = () => {
    const { theatre } = useContext(storeContext);

    // Mock data for fallback (if context is empty)
    const data = theatre || {
        name: "Ruposhi Bangla Cinema",
        image: "https://via.placeholder.com",
        location: { address: "Mohakhali, Dhaka" },
        rating: 4.1,
        reviews: [1, 2],
        screens: 6
    };

    return (
        <div className=" bg-slate-50 text-slate-800 font-sans">
            <div className="max-w-6xl mx-auto px-6 py-8">
                
                {/* Back Button - Modern Minimalist */}
                <button className="group flex items-center gap-2 text-slate-500 hover:text-red-600 transition-all duration-300 mb-8 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 cursor-pointer">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back To Theatres</span>
                </button>

                {/* Theatre Header Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row p-6 gap-8 items-center md:items-start transition-all hover:shadow-2xl">
                    
                    {/* Image Section with Overlay */}
                    <div className="relative group shrink-0">
                        <img 
                            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg" 
                            src={data.image} 
                            alt={data.name} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-4">
                            <span className="text-white text-xs font-light flex items-center gap-1">
                                <Info size={12} /> View Gallery
                            </span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                            {data.name}
                        </h1>
                        
                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mb-4">
                            <MapPin size={18} className="text-red-500" />
                            <span className="text-lg">{data.location.address}</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-auto">
                            {/* Rating Badge */}
                            <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full border border-amber-100">
                                <Star size={18} fill="currentColor" />
                                <span className="font-bold">{data.rating}</span>
                                <span className="text-sm text-amber-600/80">({data.reviews.length} reviews)</span>
                            </div>

                            {/* Screen Badge */}
                            <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100">
                                <Laptop size={18} />
                                <span className="font-semibold uppercase text-xs tracking-wider">{data.screens} Screens Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Section (Optional) */}
                    <div className="hidden lg:flex flex-col justify-center border-l border-slate-100 pl-8 gap-3">
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest text-center">Quick Action</p>
                        <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheatreShowtimes;
