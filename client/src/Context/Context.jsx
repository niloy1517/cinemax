import React, { createContext, useState } from 'react'

export const storeContext = createContext(null);

const Context = ({ children }) => {
    // Location modal
    const [openLocationModal, setOpenLocationModal] = useState(false)

    // Change location modal
    const [isOpenLocation, setIsOpenLocation] = useState(false)

    // handle trailer modal
    const [isOpenTrailerModal, setIsOpenTrailerModal] = useState(false);

    // Theatre details
    const [theatre, setTheatre] = useState('');


    //test
    const [selectedMovieData, setSelectedMovieData] = useState(null);

    // View all food list
    const [isViewAllFood, setIsViewAllFood] = useState(false);


    

    const contextValue = {
        isOpenTrailerModal, setIsOpenTrailerModal,
        theatre, setTheatre,
        selectedMovieData, setSelectedMovieData,
        isViewAllFood, setIsViewAllFood,
        openLocationModal, setOpenLocationModal,
        isOpenLocation, setIsOpenLocation,
    }

    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    )
}

export default Context