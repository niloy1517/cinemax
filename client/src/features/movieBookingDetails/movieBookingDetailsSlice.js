import { createSlice } from "@reduxjs/toolkit";


const movieBookingDeatailsSlice = createSlice({
    name: 'booking',
    initialState: {
        movie: null,
        theater: null,
        show: null,
        seats: [],
        foods: []
    },
    reducers: {
        setMovieDetails: (state, action) => {
            state.movie = action.payload;
        },
        setSelectedTheater: (state, action) => {
            state.theater = action.payload;
        },
        setSelectedShow: (state, action) => {
            state.show = action.payload;
        },
        setSelectedSeats: (state, action) => {
            const newSeat = action.payload;
            if (!Array.isArray(state.seats)) {
                state.seats = []
            }

            const isSeatSelected = state.seats.some(seat => seat.seatId === newSeat.seatId);

            if (!newSeat.isBooked && !newSeat.isHold) {
                if (isSeatSelected) {
                    state.seats = state.seats.filter(seat => seat.seatId !== newSeat.seatId)
                } else {
                    if (state.seats[0]?.category === newSeat.category) {
                        state.seats = [...state.seats, newSeat]
                    } else {
                        state.seats = [newSeat]
                    }
                }
            }
        },
        addToCart: (state, action) => {
            const item = action.payload;
            if (!Array.isArray(state.foods)) {
                state.foods = []
            }
console.log(item)
            state.foods.push({ ...item, quantity: 1 })
           
        },
        increment: (state, action) => {
            const { item, quantity } = action.payload;

            const existItem = state.foods.find(food => food.id === item.id);

            if(existItem) {
                existItem.quantity += quantity
            }

        },
        decrement: (state, action) => {
            const { item, quantity } = action.payload;

            const existItem = state.foods.find(food => food.id === item.id);

            if(existItem) {
                existItem.quantity -= quantity
            }
        },
        deleteToCart: (state, action) => {
            const item = action.payload;

            state.foods = state.foods.filter(food => food.id !== item.id)
        }
    }
})

export default movieBookingDeatailsSlice.reducer;
export const { setMovieDetails, setSelectedTheater, setSelectedShow, setSelectedSeats, addToCart, increment, decrement, deleteToCart } = movieBookingDeatailsSlice.actions;