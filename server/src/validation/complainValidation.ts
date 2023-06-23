import { ComplainTypes } from "types/allTypes";


export const createComplainValidation = (complain: ComplainTypes) => {
    const {
        email,
        fullName,
        studentId,
        department,
        semester,
        mobile,
        complainFor,
        complainDetails,
    } = complain || {};

    const validationError: Partial<ComplainTypes> = {};

    if (!email) {
        validationError.email = "Email is required";
    }

    if (!fullName) {
        validationError.fullName = "Full Name is required";
    }

    if (!studentId) {
        validationError.studentId = "Student ID is required";
    }

    if (!department) {
        validationError.department = "Department is required";
    }

    if (!semester) {
        validationError.semester = "Semester is required";
    }

    if (!mobile) {
        validationError.mobile = "Mobile is required";
    }

    if (!complainFor) {
        validationError.complainFor = "Complain For is required";
    }

    if (!complainDetails) {
        validationError.complainDetails = "Complain Details is required";
    }

    return validationError;
};
