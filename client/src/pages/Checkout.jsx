import React, { useContext } from 'react'
import BookingSummary from './BookingSummary';
import TicketConfirmationCard from './TicketConfirmationCard';
import FoodMenuSection from './FoodMenuSection';
import { storeContext } from '../Context/Context';
import FoodsMenuModal from '../Modal/FoodsMenuModal';


export const Checkout = () => {
    const { isViewAllFood } = useContext(storeContext)
    return (
        <div className='w-full bg-[#121212] relative pt-10 py-30'>
            <div className='max-w-6xl flex flex-col xl:flex-row gap-20 m-auto'>
                <div className='flex flex-col gap-20'>
                    <TicketConfirmationCard />
                    <FoodMenuSection />
                </div>
                <BookingSummary />
            </div>

            <div className={`
                fixed inset-0 z-30 w-full h-full backdrop-blur-[6px] transition-transform duration-300 ease-in-out
                ${isViewAllFood ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <FoodsMenuModal />
            </div>
        </div>
    )
}
