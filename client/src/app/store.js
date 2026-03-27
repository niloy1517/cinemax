import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import movieReducer from '../features/movies/movieSlice'
import theaterReducer from '../features/theaters/theaterSlice'
import movieBookingDetailsReducer from '../features/movieBookingDetails/movieBookingDetailsSlice'
// Combine Reducer 

const rootReducer = combineReducers({
    movie: movieReducer,
    theater: theaterReducer,
    movieBookingDetails: movieBookingDetailsReducer
})

// Set up persistence config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['movie', 'theater', 'movieBookingDetails']
}

// 

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }),
    devTools: import.meta.env.MODE !== 'production',
})

export const persistor = persistStore(store)

export default store