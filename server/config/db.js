import mongoose from "mongoose"


const database = async () => {
    try {
        const URL = process.env.MONGO_URL;
        if(!URL) {
            console.log('MongoDB URL not found in .env file');
            return;
        }

        await mongoose.connect(URL);
        console.log('Mongodb connection successful');
    } catch (error) {
        console.error('Mongodb connection failed', error.message);
        process.exit(1);
    }
}

export default database