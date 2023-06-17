import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

if (!MONGODB_URL) {
    throw new Error("MONGODB_URL environment variable Invalid");
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