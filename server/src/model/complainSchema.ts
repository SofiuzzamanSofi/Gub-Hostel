import mongoose from "mongoose";


// create neww complain data types 
const complainSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            // unique: true,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        studentId: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        semester: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        complainFor: {
            type: String,
            required: true,
        },
        complainDetails: {
            type: String,
            required: true,
        }
    }
);


// initialize the complain data on MongoDB  and export 
export const ComplainModel = mongoose.model("Complain", complainSchema);