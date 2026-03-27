import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import axiosInstance from '../config/axios';
import toast from 'react-hot-toast';

const AccountVerificationModal = ({setIsAccountVerify}) => {
    const [otp, setOtp] = useState(null);

    const handleAccountVerify = async () => {
        console.log('click', otp)
        try {
            const response = await axiosInstance.post('/user/verify', {otp});
            if (response.data.success) {
                toast.success(response.data.message, {
                    duration: 3000
                })
                setTimeout(() => {
                    setIsAccountVerify(false)
                    setFormData('')
                }, 3000)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Server Error");
            console.log(error)
        }
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className='w-[450px] h-[250px] flex flex-col gap-3 items-center justify-center bg-[#171C20] rounded-[6px]'>
            <h1 className='text-[22px] font-semibold'>Verify Your Account</h1>
            <p>Enter the 6-digit code sent to your email address.</p>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className='w-2' />}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                    width: '38px',
                    height: '38px',
                    border: '1px gray solid',
                    borderRadius: '4px'
                }}
            />
            <button onClick={handleAccountVerify} className='bg-amber-500 w-70 h-10 cursor-pointer rounded-[8px] font-semibold mt-8'>Verify Account</button>
        </div>
    )
}

export default AccountVerificationModal