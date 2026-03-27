import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { storeContext } from '../Context/Context';
import { Minus, Plus, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement, deleteToCart, increment } from '../features/movieBookingDetails/movieBookingDetailsSlice';

const FoodMenuSection = () => {
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
    ];

    const { setIsViewAllFood } = useContext(storeContext);
    const dispatch = useDispatch();
    const selectedFoods = useSelector((state) => state.movieBookingDetails.foods);

    return (
        <div className='max-w-2xl'>
            <div className='w-full flex items-center justify-between mb-6'>
                <p className='text-xl font-bold text-gray-100'>Food and Beverages</p>
                <button
                    onClick={() => setIsViewAllFood(true)}
                    className='text-sm text-gray-400 hover:text-white border-b border-gray-600 border-dashed cursor-pointer transition-all'
                >
                    See All
                </button>
            </div>

            <div className="w-full flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
                {foodMenu.map(item => {
                    const isAdded = selectedFoods?.find(food => food.id === item.id);
                    return (
                        <div key={item.id} className="min-w-[180px] bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-3 flex flex-col gap-3 transition-transform hover:scale-[1.02]">
                            <img src={item.image} alt={item.name} className="w-full h-32 rounded-xl object-cover" />
                            
                            <div className='flex flex-col gap-1'>
                                <h4 className="font-semibold text-gray-100 text-sm leading-tight line-clamp-1">{item.name}</h4>
                                <span className="font-bold text-[#FF9F1C] text-sm">৳ {item.price}</span>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                {isAdded ? (
                                    <div className="flex items-center gap-3 bg-[#2A2A2A] rounded-lg px-4 py-1 w-full justify-between">
                                        {isAdded.quantity === 1 ? (
                                            <button onClick={() => dispatch(deleteToCart(item))} className="text-gray-400 hover:text-red-500 cursor-pointer">
                                                <Trash size={16} />
                                            </button>
                                        ) : (
                                            <button onClick={() => dispatch(decrement({ item, quantity: 1 }))} className="text-gray-400 hover:text-white cursor-pointer">
                                                <Minus size={18} />
                                            </button>
                                        )}
                                        <span className="text-sm font-bold text-white">{isAdded.quantity}</span>
                                        <button onClick={() => dispatch(increment({ item, quantity: 1 }))} className="text-gray-400 hover:text-white cursor-pointer">
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => dispatch(addToCart(item))}
                                        className='w-full py-1.5 text-xs font-bold bg-[#FF9F1C] hover:bg-[#e68e19] text-black rounded-lg transition-colors cursor-pointer'
                                    >
                                        Add
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FoodMenuSection;
