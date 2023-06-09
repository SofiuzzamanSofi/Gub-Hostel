import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export const mongooseConnection = () => {


    mongoose.set('strictQuery', false);
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URL);
    mongoose.connection.on('error', (error: Error) => console.log(error));
};
