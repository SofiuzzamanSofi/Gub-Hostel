import mongoose from "mongoose";

const complainSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
    }
);


export const ComplainModel = mongoose.model("Complain", complainSchema)
