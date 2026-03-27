import mongoose from 'mongoose';


const theaterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
        address: { type: String, required: true },
        landmark: { type: String },
        divisionId: { type: String },
        cityId: { type: String },
        areaId: { type: String },
        zipcode: { type: Number, default: null },
        mapUrl: { type: String },
        geoLocation: {
            type: {
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number],
                default: [0, 0],
                required: true
            }
        }
    },
    image: { type: String },
    rating: { type: Number, default: 3 },
    screens: { type: Number, },
    facilities: { type: [String] },
    formats: { type: [String] }
}, { timestamps: true })

theaterSchema.index({ 'location.geoLocation': '2dsphere' });
theaterSchema.index({name: 1, 'location.cityId': 1, 'location.areaId': 1}, {unique: true})
const theaterModel = mongoose.models.Theater || mongoose.model('Theater', theaterSchema);

export default theaterModel


