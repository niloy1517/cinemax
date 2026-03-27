import express from 'express';
import { login, register, firebaseLogin, verify } from '../controllers/userController.js';
import userAuth from '../middleware/userAuth.middleware.js';

const userRoute = express.Router()

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.post('/firebase/login', firebaseLogin)
userRoute.post('/verify', userAuth, verify)

export default userRoute;