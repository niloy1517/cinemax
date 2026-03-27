import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        selectedMovie: null
    },
    reducers: {
        setMovie: (state, action) => {
            state.selectedMovie = action.payload;
        }
    }
})


export default movieSlice.reducer;
export const { setMovie } = movieSlice.actions;