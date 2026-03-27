import { Navigation } from 'lucide-react'
import React from 'react'

export const LocateLocationModal = () => {
    return (
        <div className='w-[450px] bg-white border border-gray-300 rounded p-4'>
            <div className="relative">
                <input
                    type="text"
                    name='street'
                    placeholder=' '
                    className="peer markdown-input"
                />
                <label className="markdown-label">Enter your city</label>
            </div>
            <button className='flex items-center gap-2 uppercase mt-4 cursor-pointer'><Navigation /> Current Location</button>
        </div>
    )
}
