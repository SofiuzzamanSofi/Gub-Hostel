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
    _id: String;
    email: String;
    fullName: String;
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

