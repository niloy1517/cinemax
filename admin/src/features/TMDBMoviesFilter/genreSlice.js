import {createSlice} from '@reduxjs/toolkit'


const genreSlice = createSlice({
    name: 'genre',
    initialState: {
        genres: []
    },
    reducers: {
        setSelectedGenre: (state, action) => {
            const genre = action.payload;
            const isExist = state.genres.find(gen => gen === genre)
            
            if(isExist) {
               state.genres = state.genres.filter(gen => gen !== genre)
            } else {
                state.genres.push(genre)
            }
        }
    }
})


export const {setSelectedGenre} = genreSlice.actions;
export default genreSlice.reducer;