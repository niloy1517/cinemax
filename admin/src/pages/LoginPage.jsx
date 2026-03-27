import React, { useState } from 'react';
import { Eye, EyeClosed, Lock, Mail, MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../config/axios';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({});

  const navigate = useNavigate()
  const handleOnchange = (e) => {
    setLoginData(prev => (
      { ...prev, [e.target.name]: e.target.value }
    ))
  }

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/user/login', loginData);

      if (response.data.success) {
        toast.success(response.data.message, {
          duration: 3000
        })
        setTimeout(() => {
          navigate('/dashboard')
        }, 3000)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server Error");
      console.log(error);
    }
  }


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070707] text-white font-sans selection:bg-amber-500/30">

      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-amber-900/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-5xl h-[650px] flex mx-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-[40px] overflow-hidden border border-white/5">

        {/* LEFT SIDE: Brand Identity */}
        <div className="hidden lg:flex w-1/2 bg-[#0a0a0a] relative items-center justify-center border-r border-white/5 group">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent"></div>

          <div className="relative z-10 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Luxury Logo Icon */}
              {/* <div className="w-20 h-20 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-3xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.3)] group-hover:rotate-[135deg] transition-transform duration-700">
                <div className="-rotate-45 font-black text-3xl text-black">C</div>
              </div> */}

              <div>
                <h1 className="text-6xl font-black tracking-tighter text-white uppercase italic">
                  CINE<span className="text-amber-500">MAX</span>
                </h1>
                <div className="h-1 w-12 bg-amber-500 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
            <p className="mt-10 text-gray-500 text-sm uppercase tracking-[0.3em] font-bold italic">Admin Management System</p>
          </div>
        </div>

        {/* RIGHT SIDE: Minimal & Sharp Login Form */}
        <div className="w-full lg:w-1/2 bg-[#0f0f0f] flex flex-col justify-center px-12 lg:px-24">

          <div className="mb-12">
            <h2 className="text-3xl font-light text-white tracking-tight">Welcome <span className="font-bold text-amber-500 underline decoration-amber-500/20 underline-offset-8">Back</span></h2>
            <p className="text-gray-500 text-sm mt-3 font-medium uppercase tracking-wider">Login into dashboard</p>
          </div>

          <div className='flex flex-col gap-3'>
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

                <button onClick={() => setIsShowPassword(!isShowPassword)} className='cursor-pointer'>
                  {isShowPassword ? <Eye /> : <EyeClosed />}
                </button>

              </div>
            </div>
            <button className='text-right text-gray-300 hover:text-white cursor-pointer'>Forget Password?</button>

            <button
              onClick={handleLogin}
              className='group w-full flex items-center justify-center font-medium gap-4 mt-4 py-2.5 bg-amber-500 text-white rounded cursor-pointer transition-all'
            >
              Access Account
              <MoveRight className='transition-transform duration-200 group-hover:translate-x-2' />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
