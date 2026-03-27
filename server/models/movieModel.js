import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    poster: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    banner: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    trailerUrl: { type: String },
    duration: { type: String, required: true },
    rating: { type: Number, default: 0 },
    genres: { type: [String], required: true },
    release: { type: Date, required: true },
    languages: { type: [String], required: true },
    description: { type: String, required: true },
    casts: [{
        name: { type: String },
        image: { type: String },
        role: { type: String }
    }],
    crews: [{
        name: { type: String },
        image: { type: String },
        role: { type: String }
    }],
    status: {
        type: String,
        enum: ['Coming Soon', 'Now Showing', 'Ended'],
        default: 'Coming Soon'
    }
}, { timestamps: true })

// movieSchema.index({ title: 1 }, { unique: true });
const movieModel = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default movieModel;