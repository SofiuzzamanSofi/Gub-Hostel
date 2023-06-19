export interface hallFacilitiesDataTypes {
    id: string;
    title: string;
    para: string;
};

export interface roomFacilitiesDataTypes {
    id: string;
    title: string;
    para: string[];
};


export interface UserTypes {
    _id: string;
    email: string;
    fullName: string;
};

export interface InputErrors {
    [key: string]: string;
};

export interface LoginUserParams {
    email: string;
    password: string;
}