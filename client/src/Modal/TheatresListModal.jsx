import React, { useState } from 'react'
import { Locate } from 'lucide-react'

const TheatresListModal = ({ setOpenLocationModal }) => {
    const bangladeshLocations = [
        {
            id: "dhaka",
            name: "Dhaka",
            icon: "🏙️",
            cities: [
                { id: "dhaka-city", name: "Dhaka City" },
                { id: "gazipur", name: "Gazipur" },
                { id: "narayanganj", name: "Narayanganj" },
                { id: "tangail", name: "Tangail" }
            ]
        },
        {
            id: "chattogram",
            name: "Chattogram",
            icon: "⚓",
            cities: [
                { id: "chattogram-city", name: "Chattogram City" },
                { id: "coxsbazar", name: "Cox's Bazar" },
                { id: "rangamati", name: "Rangamati" }
            ]
        },
        {
            id: "sylhet",
            name: "Sylhet",
            icon: "🍃",
            cities: [
                { id: "sylhet-city", name: "Sylhet City" },
                { id: "habiganj", name: "Habiganj" },
                { id: "moulvibazar", name: "Moulvibazar" },
                { id: "sunamganj", name: "Sunamganj" }
            ]
        },
        {
            id: "rajshahi",
            name: "Rajshahi",
            icon: "🌾",
            cities: [
                { id: "rajshahi-city", name: "Rajshahi City" },
                { id: "bogura", name: "Bogura" },
                { id: "pabna", name: "Pabna" }
            ]
        },
        {
            id: "khulna",
            name: "Khulna",
            icon: "🌊",
            cities: [
                { id: "khulna-city", name: "Khulna City" },
                { id: "jashore", name: "Jashore" },
                { id: "satkhira", name: "Satkhira" }
            ]
        },
        {
            id: "barishal",
            name: "Barishal",
            icon: "🚤",
            cities: [
                { id: "barishal-city", name: "Barishal City" },
                { id: "bhola", name: "Bhola" }
            ]
        },
        {
            id: "rangpur",
            name: "Rangpur",
            icon: "❄️",
            cities: [
                { id: "rangpur-city", name: "Rangpur City" },
                { id: "dinajpur", name: "Dinajpur" }
            ]
        },
        {
            id: "mymensingh",
            name: "Mymensingh",
            icon: "🌳",
            cities: [
                { id: "mymensingh-city", name: "Mymensingh City" },
                { id: "jamalpur", name: "Jamalpur" }
            ]
        }
    ]

    const handleLocation = (location, city) => {
        const selectedLocation = {
            divisionId: location?.id || null,
            divisionName: location?.name || null,
            cityId: city?.id || null,
            cityName: city?.name || null,
        }
        localStorage.setItem("userLocation",
            JSON.stringify(selectedLocation)
        )
    }


    return (
        <div className={`absolute w-[60%] bg-[#121212] text-white rounded-[10px] px-6 py-10`}>

            <h1 className='text-[20px] font-medium'>Select Your Location</h1>
            <div className='w-full flex items-center justify-between border border-gray-300 rounded px-6 py-3 mt-2'>
                <input type="text" placeholder='Search your city, area or locality' className='w-[80%] outline-0' />
                <button className='flex items-center gap-2 cursor-pointer'><Locate /> Locate Me</button>
            </div>
            <div className='mt-6 flex flex-col gap-2'>
                <p className='text-gray-300'>Popular Cities</p>
                <div className='w-full grid grid-cols-8'>
                    {
                        bangladeshLocations.map(location => (
                            <div onClick={() => { handleLocation(location), setOpenLocationModal(false) }} className='bg-[#1A1A1A] text-gray-300 hover:text-white size-24 rounded flex flex-col gap-2.5 items-center justify-center border border-gray-700 cursor-pointer'>
                                <p className='text-3xl'>{location.icon}</p>
                                <p>{location.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-6 flex flex-col gap-2 text-gray-300'>
                <p>All Cities</p>
                <div className='w-full grid grid-cols-5 gap-1'>
                    {
                        bangladeshLocations.map(location => {
                            return location.cities.map(city => (
                                <button onClick={() => { handleLocation(location, city), setOpenLocationModal(false) }} className='text-start cursor-pointer hover:underline decoration-1 hover:text-white'>{city.name}</button>
                            ))
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TheatresListModal