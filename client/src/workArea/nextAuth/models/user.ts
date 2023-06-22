import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter a valid email"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email Address"],
    },
    fullName: {
        type: String,
        required: [true, 'Name must be provided'],
        minLength: [4, 'Full Name must be at least 4 characters'],
        maxLength: [30, 'Full Name must not be greater than 30 characters long'],
    },
    password: {
        type: String,
        required: [true, "Password must be required"],
        select: false,
    },
    studentId: {
        type: String,
        required: [true, "studentId is required"],
        minLength: [4, "studentId should be atleast 4 characters long"],
        maxLength: [30, "studentId should be less than 30 characters"]
    },
    department: {
        type: String,
        required: [true, "department is required"],
        minLength: [1, "department should be atleast 1 characters long"],
        maxLength: [30, "department should be less than 30 characters"]
    },
    semester: {
        type: String,
        required: [true, "department is required"],
        minLength: [1, "department should be atleast 1 characters long"],
        maxLength: [30, "department should be less than 30 characters"]
    },
    mobile: {
        type: String,
        required: [true, "mobile is required"],
        minLength: [4, "mobile should be atleast 4 characters long"],
        maxLength: [30, "mobile should be less than 30 characters"]
    },
});

const User = models.User || model('User', UserSchema);

export default User;
