import React, { useEffect, useState } from 'react'

const ShowDateSelector = ({getFormatedDate}) => {
    const getdates = (days = 10) => {
        const arr = []
        for (let i = 0; days > i; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i)
            arr.push(date)
        }
        return arr
    }

    const dates = getdates()

    const [selectedDate, setSelectedDate] = useState(dates[0])

    const date = String(selectedDate.getDate()).padStart(2, '0')
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    const formatedDate = `${year}-${month}-${date}`

    useEffect(() => {
        getFormatedDate(formatedDate)
    }, [selectedDate])
    
    return (
        <div>
            <div className='w-full overflow-hidden flex items-center gap-2.5 py-8'>
                {
                    dates.map(date => {
                        return (
                            <div key={date} onClick={() => setSelectedDate(date)} className={`flex flex-col items-center text-xs border border-white/10 px-2 lg:px-3.5 italic font-medium text-gray-200 rounded cursor-pointer ${date.toDateString() === selectedDate.toDateString() && 'bg-amber-500 text-white'}`}>
                                <p>{date.toLocaleString('en-US', {
                                    weekday: 'short'
                                })}</p>

                                <p className='font-bold text-base lg:text-[18px]'>{date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}</p>

                                <p>{date.toLocaleString('en-US', {
                                    month: 'short'
                                })}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowDateSelector