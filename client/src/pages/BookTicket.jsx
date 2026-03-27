import { Calendar, MapPin } from 'lucide-react'
import React, { useRef, useState } from 'react'
import SelectDate from './SelectDate'
import SelectMovie from './SelectMovie'


const BookTicket = () => {

  const getDates = (days = 3) => {
    const arr = [];

    for (let i = 0; i < days; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i);
      arr.push(date);
    }
    return arr;
  }

  const dates = getDates();

  const [activeDate, setActiveDate] = useState(dates[0]);
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <div className='p-10'>
      <div className='flex flex-col gap-y-16'>
        <SelectDate activeDate={activeDate} setActiveDate={setActiveDate} dates={dates} />
        <SelectMovie activeDate={activeDate} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      </div>
    </div>
  )
}

export default BookTicket