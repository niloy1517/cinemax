import React, { useState } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { movieFilters } from '../assets/assets';
import { useScrollLock } from '../Hooks/useScrollLock'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FilterMovies = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false)

    const [filterby, setFilterby] = useState(movieFilters[1]);

    const [selectedValue, setSelectedValue] = useState([]);

    const [activeFilterBtn, setActiveFilterBtn] = useState([])

    useScrollLock(openFilterModal)

    const handleSelectedFilterBtns = (option) => {
        setSelectedValue(prev => {
            const isExist = prev?.some(value => value === option.label);
            if (isExist) {
                return prev.filter(opt => opt !== option.label)

            } else {
                return [...prev, option.label]
            }
        })
    }

    const [quickFilterButtons, setQuickFilterButtons] = useState(['Tranding', 'New Release', 'Top Rated', 'Watchlist']);


    const applyFilter = () => {
        setQuickFilterButtons(prev => {
            const defaultButtons = ['Tranding', 'New Release', 'Top Rated', 'Watchlist'];
            const combined = [...selectedValue, ...defaultButtons].flat();
            const uniqueFilter = [...new Set(combined)]
            return uniqueFilter
        });
        setActiveFilterBtn(prev => [
            ...prev,
            selectedValue
        ].flat())
        setOpenFilterModal(false);
    }



    const addAciveBtns = (button) => {
        setActiveFilterBtn(prev => {
            const isExist = prev.some(btn => btn === button);

            if (isExist) {
                return prev.filter(btn => btn !== button)
            } else {
                return [...prev, button]
            }
        })

        setSelectedValue(prev => {
            const isExist = prev?.some(btn => btn === button);

            if (isExist) {
                return prev?.filter(btn => btn !== button);
            } else {
                return [...prev]
            }
        })



        setQuickFilterButtons(prev => {
            const isExist = activeFilterBtn.some(btn => btn === button);
            const defaultButtons = ['Tranding', 'New Release', 'Top Rated', 'Watchlist'];
            if (isExist && !defaultButtons.includes(button)) {
                return prev.filter(btn => btn !== button)
            } else {
                return [...prev]
            }

        })

    }

    const clearFilter = () => {
        setSelectedValue([]);
        setOpenFilterModal(false);
        setQuickFilterButtons(['Tranding', 'New Release', 'Top Rated', 'Watchlist']);
    }

    return (
        <div className='px-10'>
            <p className='text-3xl font-medium pb-8'>Only in Theatres</p>
            <div className='flex items-center gap-4'>
                {/* Advance filter button */}
                <button
                    onClick={() => setOpenFilterModal(true)}
                    className='flex items-center border border-gray-500 px-2 py-1 rounded cursor-pointer'
                >
                    <SlidersHorizontal size={22} className='pr-1.5' />
                    Filters
                    <ChevronDown size={20} className='pt-1' />
                </button>

                {/* Quick filters button */}
                <Swiper
                    modules={[Navigation]}
                    slidesPerView='auto'
                    spaceBetween={12}
                    className='w-full'
                >
                    <div className='w-full flex items-center gap-2 whitespace-nowrap'>
                        {
                            quickFilterButtons?.map((button, index) => (
                                <SwiperSlide key={index} className='!w-auto'>
                                    <button
                                        onClick={() => { addAciveBtns(button) }}
                                        className={`text-gray-100 font-semibold border border-gray-500 px-2 py-1 rounded cursor-pointer ${activeFilterBtn.includes(button) && 'bg-red-700 text-white'}`}
                                    >
                                        {button}
                                    </button>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                </Swiper>
            </div>


            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${openFilterModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                <div className='absolute inset-0 bg-black/80 backdrop-blur-sm' onClick={() => setOpenFilterModal(false)} />

                <div className={`relative z-30 w-[700px] h-[600px] bg-[#121212] border border-white/10 rounded-2xl overflow-hidden text-white shadow-2xl transition-all duration-500 ease-out transform ${openFilterModal ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>

                    <h1 className='text-[20px] font-semibold p-6 pb-2 border-b border-white/10'>Filter by</h1>
                    <div className='w-full h-[calc(100%-60px)] flex'>
                        
                        <div className='flex flex-col items-start border-r border-white/10 bg-[#1A1A1A]/20'>
                            <button
                                onClick={() => setFilterby(movieFilters[1])}
                                className={`w-36 h-12 text-start pl-4 text-sm font-medium transition-colors ${filterby.id === 'languages' ? 'bg-[#E50914] text-white' : 'text-gray-400 hover:bg-white/5'}`}
                            >
                                Language
                            </button>
                            <button
                                onClick={() => setFilterby(movieFilters[0])}
                                className={`w-36 h-12 text-start pl-4 text-sm font-medium transition-colors ${filterby.id === 'genres' ? 'bg-[#E50914] text-white' : 'text-gray-400 hover:bg-white/5'}`}
                            >
                                Genre
                            </button>
                            <button
                                onClick={() => setFilterby(movieFilters[2])}
                                className={`w-36 h-12 text-start pl-4 text-sm font-medium transition-colors ${filterby.id === 'formats' ? 'bg-[#E50914] text-white' : 'text-gray-400 hover:bg-white/5'}`}
                            >
                                Format
                            </button>
                        </div>

                       
                        <div className='w-full h-full pt-3 relative'>
                            <div className='flex flex-col items-start gap-3 px-6 overflow-y-auto max-h-[420px]'>
                                {
                                    filterby.options.map((option, index) => (
                                        <button key={index} onClick={() => { handleSelectedFilterBtns(option) }} className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors py-1 w-full text-left'>
                                            <input
                                                type="checkbox"
                                                checked={selectedValue.some(value => value === option.label)}
                                                className='accent-[#E50914] size-5 cursor-pointer'
                                                readOnly
                                            />
                                            <span className="text-sm">{option.label}</span>
                                        </button>
                                    ))
                                }
                            </div>

                            
                            <div className='absolute bottom-6 w-full flex justify-between px-8 left-0'>
                                <button onClick={clearFilter} className='font-semibold text-gray-500 hover:text-white cursor-pointer transition-colors text-sm'>
                                    Clear filters
                                </button>
                                <button onClick={applyFilter} className='px-8 py-2 rounded-full bg-[#E50914] hover:bg-[#b20710] text-white font-bold text-sm cursor-pointer shadow-lg shadow-red-900/20 transition-all active:scale-95'>
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default FilterMovies


