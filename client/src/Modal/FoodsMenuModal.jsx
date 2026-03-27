import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { ArrowLeft, Minus, Plus, Search, Trash } from 'lucide-react';
import { storeContext } from '../Context/Context';
import { useScrollLock } from '../Hooks/useScrollLock'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement, deleteToCart, increment } from '../features/movieBookingDetails/movieBookingDetailsSlice';

const FoodsMenuModal = () => {
    const foodMenu = [
        {
            id: 1,
            name: 'Classic Cheeseburger',
            price: 250,
            category: 'Fast Food',
            image: assets.food1,
            description: 'Juicy beef patty with melted cheddar, fresh lettuce, and our secret sauce.'
        },
        {
            id: 2,
            name: 'Margherita Pizza',
            price: 800,
            category: 'Fast Food',
            image: assets.food2,
            description: 'Authentic Italian pizza with fresh mozzarella, basil, and tomato sauce.'
        },
        {
            id: 3,
            name: 'Creamy White Sauce Pasta',
            price: 350,
            category: 'Italian',
            image: assets.food3,
            description: 'Penne pasta tossed in a rich, velvety parmesan cream sauce with herbs.'
        },
        {
            id: 4,
            name: 'Salmon Nigiri Sushi',
            price: 1200,
            category: 'Japanese',
            image: assets.food4,
            description: 'Fresh Atlantic salmon slices over hand-pressed vinegared rice.'
        },
        {
            id: 5,
            name: 'Mutton Kacchi Biryani',
            price: 450,
            category: 'Desi',
            image: assets.food1,
            description: 'Traditional slow-cooked basmati rice with tender mutton and aromatic spices.'
        },
        {
            id: 6,
            name: 'Margherita Pizza',
            price: 800,
            category: 'Fast Food',
            image: assets.food2,
            description: 'Authentic Italian pizza with fresh mozzarella, basil, and tomato sauce.'
        },
        {
            id: 7,
            name: 'Salmon Nigiri Sushi',
            price: 1200,
            category: 'Japanese',
            image: assets.food4,
            description: 'Fresh Atlantic salmon slices over hand-pressed vinegared rice.'
        },
        {
            id: 8,
            name: 'Salmon Nigiri Sushi',
            price: 1200,
            category: 'Japanese',
            image: assets.food4,
            description: 'Fresh Atlantic salmon slices over hand-pressed vinegared rice.'
        },
    ];

    const foodType = ['All type', 'Veg only', 'Combo', 'Popcorn', 'Pizza', 'Burger', 'Snacks'];

    const [activeBtn, setActiveBtn] = useState(foodType[0])

    const { isViewAllFood, setIsViewAllFood } = useContext(storeContext);


    const dispatch = useDispatch()

    const selectedFoods = useSelector((state) => state.movieBookingDetails.foods);

    useScrollLock(isViewAllFood);


    return (
        <div className='absolute right-0 top-0 bg-[#121212] w-3xl h-full shadow-2xl border-l border-[#2A2A2A] text-white'>
            <div className='w-full h-full px-6 py-4'>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-3'>
                        <ArrowLeft
                            size={28}
                            onClick={() => setIsViewAllFood(false)}
                            className='cursor-pointer text-gray-300 hover:text-white'
                        />
                        <span className='text-[22px] font-medium text-gray-100'> Pre-book your food</span>
                    </div>

                    {/* সার্চ বার কালার আপডেট */}
                    <div className='flex items-center gap-1.5 w-full px-4 py-3 rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C]'>
                        <Search className='text-gray-500' size={20} />
                        <input
                            type="text"
                            placeholder='Search your favourite dishes'
                            className='outline-0 w-full bg-transparent text-gray-200 placeholder:text-gray-600'
                        />
                    </div>

                    {/* ক্যাটাগরি বাটন কালার আপডেট */}
                    <div className='flex items-center gap-3 border-b border-[#2A2A2A] pb-3 overflow-x-auto no-scrollbar'>
                        {foodType.map((type, index) => (
                            <button
                                key={index}
                                onClick={() => { setActiveBtn(type) }}
                                className={`${activeBtn === type ? 'bg-[#FF9F1C] text-black border-[#FF9F1C]' : 'bg-transparent text-gray-400 border-[#2A2A2A]'} px-4 py-1 cursor-pointer border rounded-lg text-sm font-medium transition-all`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ফুড লিস্ট কার্ড কালার আপডেট */}
                <div className='w-full h-[calc(100vh-220px)] overflow-y-auto flex flex-col gap-4 mt-6 pr-2 custom-scrollbar'>
                    {foodMenu.map(item => (
                        <div
                            key={item.id}
                            className='w-full border border-[#2A2A2A] bg-[#1C1C1C] rounded-2xl px-5 py-4 transition-all hover:border-[#3A3A3A]'
                        >
                            <div className='w-full flex items-start gap-4'>
                                <img className='w-24 h-24 object-cover rounded-xl shadow-md' src={item.image} alt="food" />
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='text-[18px] font-semibold text-gray-100'>{item.name}</p>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-bold text-[#FF9F1C]'>৳ {item.price}</p>

                                        {selectedFoods.find(food => food.id === item.id) ? (
                                            <div className="flex items-center gap-3 bg-[#2A2A2A] rounded-lg p-1.5 border border-[#333]">
                                                {selectedFoods.find(food => food.id === item.id && food.quantity === 1) ? (
                                                    <button onClick={() => dispatch(deleteToCart(item))} className="text-gray-400 hover:text-red-500 cursor-pointer"><Trash size={16} /></button>
                                                ) : (
                                                    <button onClick={() => dispatch(decrement({ item, quantity: 1 }))} className="text-gray-400 hover:text-white cursor-pointer"><Minus size={18} /></button>
                                                )}
                                                <span className="text-sm font-bold w-4 text-center text-white">
                                                    {selectedFoods.find(food => food.id === item.id)?.quantity}
                                                </span>
                                                <button onClick={() => dispatch(increment({ item, quantity: 1 }))} className="text-gray-400 hover:text-white cursor-pointer"><Plus size={18} /></button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => { dispatch(addToCart(item)) }}
                                                className='bg-amber-500 text-black font-bold px-6 py-1.5 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer'
                                            >
                                                Add
                                            </button>
                                        )}
                                    </div>
                                    <p className='text-gray-300 text-sm leading-relaxed line-clamp-2'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodsMenuModal