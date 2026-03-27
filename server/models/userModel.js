import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    firebaseUid: {
        type: String,
        default: null,
        unique: true
    },
    picture: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verification: {
        otp: { type: String, default: null },
        otpExpireAt: { type: Date, default: null }
    },
    restPassword: {
        otp: { type: String, default: null },
        otpExpireAt: { type: Date, default: null }
    },
    changePassword: {
        otp: { type: String },
        otpExpireAt: { type: Date, default: null }
    },
    authMethod: {
        type: String,
        enum: ['manual', 'google.com', 'facebook.com']
    }
}, {timestamps: true})


const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel