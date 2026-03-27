import { Eye, EyeClosed, Lock, Mail, MoveRight, User } from 'lucide-react'
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axiosInstance from '../config/axios';
import toast from 'react-hot-toast';
import { signInWithGoogle } from '../Hooks/useAuth';

const AuthenticationModal = ({ setIsAuth, setIsAccountVerify }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [formData, setFormData] = useState('');


    const handleOnchange = (e) => {
        setFormData(prev => (
            { ...prev, [e.target.name]: e.target.value }
        ))
    }

    const handleRegister = async () => {
        try {
            const response = await axiosInstance.post('/user/register', formData);
            if (response.data.success) {
                toast.success(response.data.message, {
                    duration: 5000
                })
                setTimeout(() => {
                    setIsAuth(false);
                    setIsAccountVerify(true);
                    setFormData('')
                }, 3000)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Server Error");
            console.log(error);
        }
    }

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('/user/login', formData);
            if (response.data.success) {
                toast.success(response.data.message, {
                    duration: 3000
                })
                setTimeout(() => {
                    setIsAuth(false);
                    setFormData('')
                }, 3000)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Server Error");
            console.log(error);
        }
    }
    return (
        <div className='w-[450px] h-[580px] bg-[#171C20] rounded-[6px]'>
            <div className='text-center flex flex-col gap-1.5 pt-6'>
                <p className='uppercase font-bold text-[20px]'>{isLogin ? 'Welcome Back' : 'Create Account'}</p>
                <p className='text-gray-300 text-[18px]'>
                    {isLogin ? "Ready to catch the next show?" : "Join us to book your favorite movies!"}
                </p>
            </div>
            <div className='w-full flex gap-3 px-6 mt-8'>
                <button onClick={signInWithGoogle} className='flex-1 h-11 flex items-center justify-center gap-2 border border-gray-500 hover:border-gray-400 rounded-[6px] cursor-pointer'>
                    <img className='w-7' src={assets.google_logo} alt="google" />
                    <span>Google</span>
                </button>
                <button className='flex-1 h-11 flex items-center justify-center gap-2 border border-gray-500 hover:border-gray-400 rounded-[6px] cursor-pointer'>
                    <img className='w-7' src={assets.facebook_logo} alt="facebook" />
                    <span>Fackbook</span>
                </button>
            </div>
            <div className='px-6 flex justify-center items-center gap-1.5 mt-4'>
                <hr className='flex-1 text-gray-500' />
                <span className='font-medium text-gray-300 uppercase text-sm'>
                    {isLogin ? "or continue with email" : "or continue with"}
                </span>
                <hr className='flex-1 text-gray-500' />
            </div>

            <div className='flex flex-col gap-4 px-6 mt-4'>
                {
                    !isLogin &&
                    <div className='flex flex-col gap-0.5'>
                        <label htmlFor="name" className='font-medium'>Full Name</label>
                        <div className='flex items-center gap-1.5 w-full border border-gray-500 px-3 py-2 rounded'>
                            <User className='text-gray-400' />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter your name'
                                onChange={handleOnchange}
                                className='w-full outline-0'
                            />
                        </div>
                    </div>
                }

                <div className='flex flex-col gap-0.5'>
                    <label htmlFor="email" className='font-medium'>Email Address</label>
                    <div className='flex items-center gap-1.5 w-full border border-gray-500 px-3 py-2 rounded'>
                        <Mail className='text-gray-400' />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='example@gmail.com'
                            onChange={handleOnchange}
                            className='w-full outline-0'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-0.5'>
                    <label htmlFor="password" className='font-medium'>Password</label>
                    <div className='flex items-center gap-1.5 w-full border border-gray-500 px-3 py-2 rounded'>
                        <Lock className='text-gray-400' />
                        <input
                            type={isShowPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder='••••••'
                            onChange={handleOnchange}
                            className='w-full outline-0'
                        />
                        {
                            isShowPassword ? <Eye onClick={() => setIsShowPassword(!isShowPassword)} className='cursor-pointer' /> : <EyeClosed onClick={() => setIsShowPassword(!isShowPassword)} className='cursor-pointer' />
                        }
                    </div>
                </div>

                {
                    isLogin &&
                    <button className='text-right text-gray-300 hover:text-white hover:font-medium cursor-pointer'>Forget Password?</button>
                }

                <button onClick={isLogin ? handleLogin : handleRegister} className='group w-full flex items-center justify-center font-medium gap-4 mt-4 py-2.5 bg-amber-500 text-white rounded cursor-pointer transition-all'>
                    {isLogin ? "Login" : "Create Account"}
                    <MoveRight className='transition-transform duration-200 group-hover:translate-x-2' />
                </button>
            </div>

            <div className='text-center pt-4 text-gray-300'>
                {isLogin ? <p>Don't have an account? <span onClick={() => setIsLogin(false)} className='text-white font-medium hover:text-amber-500 cursor-pointer'>Register here</span></p> : <p>Already have an account? <span onClick={() => setIsLogin(true)} className='white font-medium hover:text-red-700 cursor-pointer'>Login here</span></p>}
            </div>


        </div>
    )
}

export default AuthenticationModal