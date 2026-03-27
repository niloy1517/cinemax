import theaterModel from "../models/theaterModel.js";

const addTheater = async (req, res) => {
    try {
        const { name, location, image, rating, screens, facilities, formats } = req.body;
        const { address, landmark, divisionId, cityId, areaId, zipcode, mapUrl, geoLocation } = location;

        if (!name || !location || !image || !rating || !screens || !facilities || !formats || !address || !landmark || !divisionId || !cityId || !areaId || !zipcode || !mapUrl || !geoLocation.coordinates) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }


        await theaterModel.create({
            name, image, rating, screens, facilities, formats,
            location: {
                address, landmark, divisionId, cityId, areaId, zipcode, mapUrl,
                geoLocation: {
                    type: "Point",
                    coordinates: geoLocation.coordinates
                }
            }
        });

        res.status(201).json({
            success: true,
            message: "Theater has been added successfully."
        })
    } catch (error) {

        if (error.code) {
            return res.status(400).json({
                success: false,
                message: "This theater already exist!"
            })
        }

        res.status(500).json({
            success: false,
            message: 'Something went wrong!'
        })
    }
}


const deleteTheater = async (req, res) => {
    try {
        const { theaterId } = req.body;

        const theater = await theaterModel.findByIdAndDelete(theaterId);

        if (!theater) {
            return res.status(400).json({
                success: false,
                message: 'Theater not found!'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Theater has been deleted successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!'
        })
    }
}


const updateTheater = async (req, res) => {
    try {
        const { theaterId, name, location, image, rating, screens, facilities, formats } = req.body;
        const { address, landmark, divisionId, cityId, areaId, zipcode, mapUrl, geoLocation } = location;

        if (!name || !location || !image || !rating || !screens || !facilities || !formats || !address || !landmark || !divisionId || !cityId || !areaId || !zipcode || !mapUrl || !geoLocation.coordinates) {
            return res.status(400).json({
                success: false,
                message: 'All field are required'
            })
        }

        const theater = await theaterModel.findById(theaterId);

        if (!theater) {
            return res.status(400).json({
                success: false,
                message: 'Theater not found!'
            })
        }

        await theaterModel.findByIdAndUpdate(theaterId, {
            name, image, rating, screens, facilities, formats,
            location: {
                address, landmark, divisionId, cityId, areaId, zipcode, mapUrl,
                geoLocation: {
                    type: "Point",
                    coordinates: geoLocation.coordinates
                }
            }
        })

        res.status(200).json({
            success: true,
            message: 'Theater details have been updated successfully.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!'
        })
    }
}


const theaterList = async (req, res) => {
    try {
        const theaters = await theaterModel.find();

        res.status(200).json({
            success: true,
            message: 'Theaters fetched successfully',
            theaters,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch theaters'
        });
    }
}

export { addTheater, deleteTheater, updateTheater, theaterList }