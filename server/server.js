import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import database from './config/db.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import theaterRoute from './routes/theaterRoute.js'
import movieRoute from './routes/movieRoute.js'

dotenv.config();


const allowedOrigin = [
    "http://localhost:5173",
    "http://localhost:5174"
];

const PORT = process.env.PORT || 3000;

const app = express();

database();


app.use(cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/user', userRoute);
app.use('/api/theater', theaterRoute);
app.use('/api/movie', movieRoute);

app.get('/', (req, res) => {
    res.json('this is home route')
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});