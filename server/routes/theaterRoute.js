import express from 'express';
import { addTheater, deleteTheater, theaterList, updateTheater } from '../controllers/theaterController.js';
import { upload } from '../config/cloudinary.js';

const theaterRoute = express.Router();

theaterRoute.post('/add', upload.single('image'), addTheater);
theaterRoute.delete('/delete', deleteTheater);
theaterRoute.put('/update', updateTheater);
theaterRoute.get('/list', theaterList)

export default theaterRoute;