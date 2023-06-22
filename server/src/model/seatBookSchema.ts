import mongoose from "mongoose";


const SeatBookSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter a valid email"],
        // match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email Address"],
    },
    fullName: {
        type: String,
        required: [true, 'Name must be provided'],
        minLength: [1, 'Full Name must be at least 4 characters'],
        maxLength: [30, 'Full Name must not be greater than 30 characters long'],
    },
    mobile: {
        type: String,
        required: [true, "mobile is required"],
        minLength: [1, "mobile should be atleast 4 characters long"],
        maxLength: [30, "mobile should be less than 30 characters"]
    },
    studentId: {
        type: String,
        required: [true, "studentId is required"],
        minLength: [1, "studentId should be atleast 4 characters long"],
        maxLength: [30, "studentId should be less than 30 characters"]
    },
    regular: {
        type: String,
        required: [true, "department is required"],
        minLength: [1, "department should be atleast 4 characters long"],
        maxLength: [30, "department should be less than 30 characters"]
    },
    semester: {
        type: String,
        required: [true, "department is required"],
        minLength: [1, "department should be atleast 1 characters long"],
        maxLength: [30, "department should be less than 30 characters"]
    },
    semesterYear: {
        type: String,
        required: [true, "mobile is required"],
        minLength: [1, "mobile should be atleast 4 characters long"],
        maxLength: [30, "mobile should be less than 30 characters"]
    },
    hall: {
        type: String,
        required: [true, "mobile is required"],
        minLength: [1, "mobile should be atleast 4 characters long"],
    },
    level: {
        type: String,
        required: [true, "mobile is required"],
        minLength: [1, "mobile should be atleast 4 characters long"],
        maxLength: [30, "mobile should be less than 30 characters"]
    },
    room: {
        type: String,
        required: [true, "mobile is required"],
        minLength: [1, "mobile should be atleast 4 characters long"],
        maxLength: [30, "mobile should be less than 30 characters"]
    },
});

// define the schema 
export const SeatBookModel = mongoose.model('SeatBook', SeatBookSchema)



// Booking Actions
// add / create a seat booking 
export const createSeatBookOne = (values: Record<string, any>) => new SeatBookModel(values).save().then((data) => data.toObject());
// get all seat booking data lists
export const getSeatBookingList = () => SeatBookModel.find();
// get one seat booking data by email
export const getSeatBookingByEmail = (email: string | string) => SeatBookModel.findOne({ email });
// get one seat booking data by id 
export const getSeatBookingById = (id: number | string) => SeatBookModel.findOne({ id });
// delete one seat booking data by id 
export const deleteSeatBookingById = (id: number | string) => SeatBookModel.findOneAndDelete({ _id: id });
// update one seat booking data by id  ( next should be email)
export const updateSeatBookingById = (id: number | string, values: Record<string, any>) => SeatBookModel.findByIdAndUpdate(id, values);