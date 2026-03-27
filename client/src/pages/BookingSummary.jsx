import { ChevronDown, ChevronRight, ChevronUp, HelpCircle } from 'lucide-react'; // CircleQuestionMark এর বদলে HelpCircle ব্যবহার করা হয়েছে
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const BookingSummary = () => {
    const [isAmountDetailed, setIsAmountDetailed] = useState(false);
    const [isBookingChargeOpen, setIsBookingChargeOpen] = useState(false);

    const selectedSeats = useSelector((state) => state.movieBookingDetails.seats);
    const selectedFoods = useSelector((state) => state.movieBookingDetails.foods);

    const totalTicketAmount = selectedSeats.reduce((sum, seat) => sum + (seat.price || 0), 0);
    const totalBookingFee = 65;
    const totalFoodAmount = selectedFoods.reduce((sum, food) => sum + (food.price * food.quantity), 0) || 0;

    const totalBookingAmount = totalTicketAmount + totalBookingFee + totalFoodAmount;

    return (
        <div className='w-[380px] flex flex-col gap-4'>
            <h1 className='text-[22px] font-bold text-gray-100'>Payment Summary</h1>
            
            {/* Main Summary Card */}
            <div className='flex flex-col gap-4 border border-[#2A2A2A] bg-[#1C1C1C] p-5 rounded-2xl shadow-lg'>
                {/* Order Amount Section */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <button
                            onClick={() => setIsAmountDetailed(!isAmountDetailed)}
                            className='flex items-center gap-1 font-medium text-gray-200 hover:text-white transition-colors cursor-pointer'
                        >
                            Order amount {isAmountDetailed ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <p className='font-bold text-gray-100'>৳ {totalTicketAmount + totalFoodAmount}</p>
                    </div>

                    {isAmountDetailed && (
                        <div className='pl-4 flex flex-col gap-2 text-sm text-gray-300 border-l border-[#333] ml-2 py-1'>
                            <div className='flex justify-between'>
                                <p>{selectedSeats.length} x Ticket</p>
                                <p>৳ {totalTicketAmount}</p>
                            </div>
                            {selectedFoods.map(food => (
                                <div key={food.id} className='flex justify-between'>
                                    <p>{food.quantity} x {food.name}</p>
                                    <p>৳ {food.quantity * food.price}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Booking Charge Section */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <button
                            onClick={() => setIsBookingChargeOpen(!isBookingChargeOpen)}
                            className='flex items-center gap-1 font-medium text-gray-200 hover:text-white transition-colors cursor-pointer'
                        >
                            Booking charge {isBookingChargeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <p className='font-bold text-gray-100'>৳ {totalBookingFee}</p>
                    </div>
                    {isBookingChargeOpen && (
                        <div className='pl-4 flex flex-col gap-2 text-sm text-gray-300 border-l border-[#333] ml-2 py-1'>
                            <div className='flex justify-between'>
                                <p>Convenience Fee</p>
                                <p>৳ 40</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Vat (5%)</p>
                                <p>৳ 25</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Total To Be Paid */}
                <div className='flex items-center justify-between font-bold text-white border-t border-[#2A2A2A] pt-4 mt-2'>
                    <p className='text-lg'>To be paid</p>
                    <p className='text-xl text-[#FF9F1C]'>৳ {totalBookingAmount}</p>
                </div>
            </div>

            {/* Terms and Conditions */}
            <div className='w-full py-4 border border-[#2A2A2A] bg-[#1C1C1C] rounded-2xl px-5 hover:border-[#3A3A3A] transition-all group'>
                <button className='w-full flex items-center justify-between cursor-pointer font-medium text-gray-300 group-hover:text-white'>
                    <div className='flex items-center gap-3'>
                        <HelpCircle size={20} className='text-gray-400' />
                        <span className='text-[16px]'>Terms and Conditions</span>
                    </div>
                    <ChevronRight size={20} className='text-gray-500' />
                </button>
            </div>

            {/* Payment Button */}
            <div className='bg-white hover:bg-gray-100 text-gray-950 flex items-center justify-between px-6 rounded-2xl py-3 mt-2 cursor-pointer transition-transform active:scale-[0.98]'>
                <div className='leading-tight'>
                    <p className='text-[12px] font-bold opacity-60 uppercase'>Total</p>
                    <p className='font-black text-lg'>৳ {totalBookingAmount}</p>
                </div>
                <p className='font-bold text-[17px] tracking-tight'>Proceed To Pay</p>
            </div>
        </div>
    )
}

export default BookingSummary
