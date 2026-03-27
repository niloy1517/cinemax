import { createSlice } from '@reduxjs/toolkit'


const theaterSlice = createSlice({
    name: 'theater',
    initialState: {
        selectedTheater: null
    },
    reducers: {
        setTheater: (state, action) => {
            console.log(action.payload)
            state.selectedTheater = action.payload;
        }
    }
})

export default theaterSlice.reducer;

export const { setTheater } = theaterSlice.actions;