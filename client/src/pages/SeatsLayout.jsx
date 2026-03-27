import React, { useEffect, useState } from 'react';
import { Accessibility, ArrowRight, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSeats } from '../features/movieBookingDetails/movieBookingDetailsSlice';

const SeatsLayout = () => {
  const CATEGORY_CONFIG = [
    { rows: ["A", "B", "C"], type: "Economy", price: 250 },
    { rows: ["D", "E"], type: "Standard", price: 350 },
    { rows: ["F", "G"], type: "Premium", price: 450 },
    { rows: ["H"], type: "Premium_gold", price: 500 },
    { rows: ["I", "J"], type: "Executive", price: 600 },
  ];

  const ROW_STRUCTURE = [
    { row: "A", type: "Economy", left: 1, center: 2, right: 1 },
    { row: "B", type: "Economy", left: 1, center: 2, right: 1 },
    { row: "C", type: "Economy", left: 1, center: 2, right: 1 },
    { row: "D", type: "Standard", left: 1, center: 3, right: 1 },
    { row: "E", type: "Standard", left: 1, center: 3, right: 1 },
    { row: "F", type: "Premium", left: 2, center: 2, right: 2 },
    { row: "G", type: "Premium", left: 2, center: 2, right: 2 },
    { row: "H", type: "Premium_gold", left: 2, center: 2, right: 2 },
    { row: "I", type: "Executive", left: 2, center: 1, right: 2 },
    { row: "J", type: "Executive", left: 2, center: 1, right: 2 },
  ];

  const navigate = useNavigate();

  const wheelchairSeats = ["D1", "D2", "E1", "E2", "J1", "J2"];
  const holdSeats = ['A1', 'A7', 'G1', 'G2', "E10", "E11", "E14", "E8"];
  const reservedSeats = ["D5", "D6", 'D7', "D10", "F8", "H10", "H11", "H12", "J3", 'J4', 'J5'];

  const [allSeats, setAllSeats] = useState([]);
  const selectedSeats = useSelector((state) => state.movieBookingDetails.seats)

  const dispatch = useDispatch()

  const handleSeatsSelection = (seat) => {
    dispatch(setSelectedSeats(seat))
  }


  useEffect(() => {
    const generateSeats = () => {
      const seats = [];
      ROW_STRUCTURE.forEach((r) => {
        const totalSeats = r.left + r.center + r.right;
        const category = CATEGORY_CONFIG.find((c) => c.rows.includes(r.row));
        for (let i = 1; i <= totalSeats; i++) {
          const seatId = `${r.row}${i}`;
          seats.push({
            seatId, row: r.row, number: i, category: category.type, price: category.price,
            isBooked: reservedSeats.includes(seatId),
            isWheelchair: wheelchairSeats.includes(seatId),
            isHold: holdSeats.includes(seatId),
          });
        }
      });
      return seats;
    };
    setAllSeats(generateSeats());
  }, []);

  // const toggle = (seat) => {
  //   if (!seat.isBooked && !seat.isHold) {
  //     setSelected((prev) =>
  //       prev.find(s => s.seatId === seat.seatId)
  //         ? prev.filter(s => s.seatId !== seat.seatId)
  //         : selected.length === 0 || selected[0]?.category === seat.category ? [...prev, seat] : [seat]
  //     );
  //   }
  // };

  // UPDATED: Highlighted Glowing Colors
  const seatsPosition = (seat) => {
    if (selectedSeats.find(s => s.seatId === seat.seatId))
      return 'bg-green-500 border-[#00FF88] text-[#171C20]';
    if (seat.isBooked)
      return 'bg-[#2D3748] border-[#3A4354] text-[#1A202C] cursor-not-allowed opacity-30';
    if (seat.isHold)
      return 'bg-amber-500 border-[#FFCC00] text-white cursor-not-allowed animate-pulse shadow-[0_0_15px_rgba(255,204,0,0.3)]';
    return 'bg-[#1E252B] border-[#3A4354] hover:border-[#00FF88] text-[#A0AEC0] cursor-pointer hover:text-white hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all duration-200';
  };

  return (
    <div className='w-full min-h-screen bg-[#171C20] text-white px-6 pb-10 font-sans overflow-x-hidden'>
      <div className='max-w-4xl mx-auto pt-12 pb-30'>

        {/* Neon Screen UI */}
        <div className="relative w-full flex flex-col items-center mb-10 group">
          <div className="w-[90%] h-[8px]  rounded-full relative overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          <p className="uppercase mt-6">SCREEN</p>
        </div>

        {/* Seat Layout Grid */}
        <div className="flex flex-col gap-3">
          {ROW_STRUCTURE.map((r, index) => {
            const rowSeats = allSeats.filter(seat => seat.row === r.row);
            const leftSeats = rowSeats.slice(0, r.left);
            const centerSeats = rowSeats.slice(r.left, r.left + r.center);
            const rightSeats = rowSeats.slice(r.left + r.center);
            const isFirstInType = index === 0 || ROW_STRUCTURE[index - 1].type !== r.type;
            const currentCategory = CATEGORY_CONFIG.find(c => c.type === r.type);

            return (
              <div key={r.row}>
                {isFirstInType && (
                  <div className="flex items-center gap-5 w-full mt-4 mb-4">
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[#2D3748]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#718096]">
                      {r.type} bdt {currentCategory.price}
                    </span>
                    <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-[#2D3748]"></div>
                  </div>
                )}

                <div className="flex items-center group">
                  <div className='w-8'>
                    <p className="text-xs font-black text-[#4A5568] group-hover:text-[#00FF88] transition-colors duration-300">{r.row}</p>
                  </div>

                  <div className='w-full flex items-center justify-center space-x-3 md:space-x-6'>
                    {[leftSeats, centerSeats, rightSeats].map((section, idx) => (
                      <div key={idx} className='flex space-x-1'>
                        {section.map(seat => (
                          <button key={seat.seatId} onClick={() => {handleSeatsSelection(seat)}}
                            className={`size-6 md:size-8 rounded-lg border-b-2 flex items-center justify-center text-[11px] font-black transition-all duration-300 ${seatsPosition(seat)}`}>
                            {seat.isWheelchair ? <Accessibility size={16} strokeWidth={3} /> : seat.number}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-Contrast Floating Footer */}
      <div className='fixed w-full bottom-6 left-1/2 -translate-x-1/2 max-w-[90%] h-18 md:h-24 bg-[#171C20] border border-[#3A4354] rounded-[24px] flex items-center px-2 md:px-10 z-50 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>
        {selectedSeats.length === 0 ? (
          <div className='w-full flex items-center justify-around text-sm md:text-[16px]'>
            <div className='flex items-center gap-1'>
              <div className='size-5 rounded border-b bg-[#1E252B]' />
              <p>Availabe</p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='size-5 rounded bg-green-500 text-[#171C20]' />
              <p>Selected</p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='size-5 rounded bg-[#1D242C]' />
              <p>Booked</p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='size-5 rounded bg-amber-500' />
              <p>Hold</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-1.5 md:p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Ticket className="text-amber-500" size={24} />
              </div>
              <div>
                <p className='text-[10px] uppercase text-[#718096] tracking-[0.2em]'>Seats Confirmed</p>
                <p className='text-2xl font-black text-white leading-tight'>{selectedSeats.length} <span className="text-xs font-medium text-[#4A5568]">Seats</span></p>
              </div>
            </div>
            <button onClick={() => navigate('/checkout')} className='bg-amber-500 text-[12px] md:text-[16px] text-black font-bold px-3 md:px-10 py-2.5 md:py-4 rounded-2xl cursor-pointer uppercase flex items-center gap-3'>
              Book Tickets <ArrowRight size={16} strokeWidth={3} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatsLayout;
