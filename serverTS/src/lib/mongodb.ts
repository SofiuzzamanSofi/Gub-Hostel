import mongoose from 'mongoose';


const { MONGODB_URL } = process.env;

// console.log("MONGODB_URL:", MONGODB_URL)

if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is required");
}

export const connectToMongoDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URL);
        if (connection.readyState === 1) {
            return Promise.resolve(true);
        }
    } catch (error) {
        Promise.resolve(error);
    }
}
