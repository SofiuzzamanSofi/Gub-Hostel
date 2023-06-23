export interface HallFacilitiesDataTypes {
    id: String;
    title: String;
    para: String;
};

export interface RoomFacilitiesDataTypes {
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


export interface UserLocalStorageTypes {
    fullName?: String;
    email?: String;
}

export interface LoginUserInfoUserTypes {
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
    hall?: String;
    level?: String;
    room?: String;

}


export interface SeatBookReqTypes {
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

export interface ComplainTypes {
    email?: string;
    fullName?: string;
    studentId?: string;
    department?: string;
    semester?: string;
    mobile?: string;
    complainFor?: string;
    complainDetails?: string;
    hall?: string;
    level?: string;
    room: string;
}