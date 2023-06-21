export interface hallFacilitiesDataTypes {
    id: String;
    title: String;
    para: String;
};

export interface roomFacilitiesDataTypes {
    id: String;
    title: String;
    para: String[];
};


export interface UserTypes {
    _id?: String;
    email?: string | null | undefined;
    fullName: String;
    name?: string | null | undefined;
    image?: string | null | undefined;
};

export interface InputErrorsTypes {
    [key: string]: String;
};

export interface LoginUserParamsTypes {
    email: String;
    password: String;
}


export interface userLocalStorageTypes {
    fullName?: String;
    email?: String;
}

export interface loginUserInfoUserTypes {
    fullName: String;
    email: String;
    department: String;
    mobile: String;
    password: String;
    semester: String;
    studentId: String;
    _id: String;
    __v: Number;
    // __v: Number | String;
}


export interface seatBookReqTypes {
    email: String;
    fullName: String;
    mobile: String;
    studentId: String;
    regular: String;
    semester: String;
    semesterYear: String;
    hall: String;
    level: String;
    room: String;
}

