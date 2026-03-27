import { configureStore, combineReducers } from "@reduxjs/toolkit";
import genreReducer from '../features/TMDBMoviesFilter/genreSlice';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from "redux-persist";


const rootReducer = combineReducers({
    genre: genreReducer
})

const browserStorage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const persistConfig = {
    key: 'admin-root',
    storage:  browserStorage, 
    whitelist: ['genre']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),
    devTools: import.meta.env.MODE !== 'production'
})


export const persistor = persistStore(store);
export default store;