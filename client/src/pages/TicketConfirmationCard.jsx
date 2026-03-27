import React from 'react'
import { MapPin } from 'lucide-react';
import { useSelector } from 'react-redux'

const TicketConfirmationCard = () => {
    const selectedMovie = useSelector((state) => state.movieBookingDetails.movie);
    const selectedSeats = useSelector((state) => state.movieBookingDetails.seats);
    const selectedTheater = useSelector((state) => state.movieBookingDetails.theater);
    const selectedShow = useSelector((state) => state.movieBookingDetails.show);
    const selectedFoods = useSelector((state) => state.movieBookingDetails.foods);

    const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

    return (
        <div className='max-w-2xl flex flex-col gap-6 bg-[#1C1C1C] border border-white/10 rounded-2xl p-6 shadow-xl'>
            <div className='w-full flex items-start gap-6'>
                <img className='w-32 h-48 object-cover rounded-xl shadow-lg' src={selectedMovie.poster} alt={selectedMovie.title} />
                
                <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex flex-col gap-1'>
                        <p className='text-2xl font-bold text-white tracking-tight'>{selectedMovie.title}</p>
                        <div className='flex items-center gap-2 text-sm text-gray-300 font-medium'>
                            <span>{selectedShow.language}</span>
                            <span className='w-1 h-1 bg-gray-600 rounded-full'></span>
                            <span>{selectedShow.format}</span>
                        </div>
                        <div className='flex items-center gap-1.5 text-gray-300 text-sm mt-1'>
                            <MapPin size={18} className='text-amber-500' />
                            <p>{selectedTheater.location.address} - {selectedShow.hall}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 pt-2 border-t border-white/10'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 text-white'>
                                <p className='text-sm'>{selectedShow.date}</p>
                                <span className='text-gray-300'>|</span>
                                <p className='font-semibold'>{selectedShow.time}</p>
                            </div>
                        </div>
                        
                        <div className='space-y-1'>
                            <div className='flex items-center justify-between text-white'>
                                <p className='font-medium text-gray-300'>Tickets ({selectedSeats.length})</p>
                                <p className='font-bold text-xl text-white'>৳ {total}</p>
                            </div>
                            <div className='flex items-center justify-between text-sm text-gray-300 font-medium uppercase tracking-wider'>
                                <p>Seat: {selectedSeats[0]?.category}</p>
                                <div className='flex gap-1'>
                                    {selectedSeats.map((seat, i) => (
                                        <span key={seat.seatId}>{seat.seatId}{i !== selectedSeats.length - 1 && ','}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Food Section - If Have Any Selected Food */}
            {selectedFoods.length > 0 && (
                <div className='flex flex-col gap-3 border-t border-[#2E2E2E] pt-5'>
                    {selectedFoods.map(food => (
                        <div key={food.id} className='flex items-center justify-between'>
                            <div>
                                <p className='font-medium text-gray-200'>{food.name}</p>
                                <p className='text-sm text-gray-300'>৳ {food.price} x {food.quantity}</p>
                            </div>
                            <p className='font-bold text-white'>৳ {food.price * food.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TicketConfirmationCard
