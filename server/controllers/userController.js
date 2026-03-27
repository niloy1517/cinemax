import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
import sendEmail from '../utils/sendEmail.js';
import admin from '../config/firebase-config.js';

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
    
        const user = await userModel.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: 'User all ready exist'
            })
        }

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All field are required'
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email'
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }


        const hashPassword = await bcrypt.hash(password, 10);

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        const otpExpireAt = Date.now() + 5 * 60 * 1000;

        const newUser = await userModel.create({
            name,
            email,
            password: hashPassword,
            verification: {
                otp,
                otpExpireAt
            },
            authMethod: 'manual'
        });

        try {
            await sendEmail({
                email: newUser.email,
                subject: 'Account Verification OTP',
                message:
                    `
                <div style="font-family: Arial; padding: 20px;">
                    <h2 style="color: #e50914;">Verify Your Account</h2>
                    <p>Hi ${newUser.name},</p>
                    <p>Your account has been created! Please use the following OTP to verify your email:</p>
                    <h1 style="background: #f4f4f4; padding: 10px; text-align: center;">${otp}</h1>
                    <p>This code will expire in 5 minutes.</p>
                </div>
                `
            })
            console.log('otp send successful')
        } catch (error) {
            console.log('otp send failed', error.message)
        }

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });


        res.status(201).json({
            success: true,
            message: 'User created successfully. Please check your email for the OTP to verify your account.'
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Someting went wrong'
        })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
 console.log( email, password)
        const existUser = await userModel.findOne({ email });

        if (!existUser) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }

        const matchPassword = await bcrypt.compare(password, existUser.password)

        if (!matchPassword) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            });
        }

        const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            success: true,
            message: 'User login successfully.',
            existUser
        })
    } catch {
        res.status(500).json({
            success: false,
            message: 'Someting went wrong'
        })
    }
}


const firebaseLogin = async (req, res) => {
    console.log('i am running')
    try {
        const { idToken } = req.body;

        const decodedToken = await admin.auth().verifyIdToken(idToken);

        const { user_id, name, email, picture, firebase } = decodedToken;

        const user = await userModel.findOne({ email });
       
        if (!user) {
            await userModel.create({
                name,
                email,
                firebaseUid: user_id,
                picture,
                isVerified: true,
                authMethod: firebase.sign_in_provider
            })
        }
        
        if (!user.firebaseUid) {
            user.firebaseUid = user_id;
            user.picture = picture;
            user.isVerified = true;
            user.authMethod = firebase.sign_in_provider
            await user.save()
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            success: true,
            message: 'User login successfully.',
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Someting went wrong'
        })
    }
}


const verify = async (req, res) => {
    try {
        const userId = req.userId;
        const { otp } = req.body;

        if (!otp) {
            return res.status(400).json({
                success: false,
                message: 'Please enter 6-digit otp'
            })
        }

        const existUser = await userModel.findById(userId);

        const checkOtpValidity = existUser.verification.otpExpireAt < Date.now();

        const matchOpt = existUser.verification.otp !== otp;

        if (checkOtpValidity || matchOpt) {
            return res.status(400).json({
                success: false,
                message: 'Enter a valid otp'
            })
        }

        existUser.isVerified = true;
        existUser.verification = {
            otp: null,
            otpExpireAt: null
        }

        existUser.save()

        res.status(200).json({
            success: true,
            message: 'Account verification successful',
            existUser
        })

    } catch (error) {
        res.status(500).json({
            success: true,
            message: 'something went wrong'
        })
        console.log(error.message)
    }
}




export { register, login, firebaseLogin, verify } 