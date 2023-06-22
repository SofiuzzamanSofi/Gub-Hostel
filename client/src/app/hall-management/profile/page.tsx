"use client"

import React, { useEffect } from "react"
import { FC, useState } from 'react';
import { usePathname } from 'next/navigation'
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";
import axios from "axios";
import { loginUserInfoUserTypes } from './../../../workArea/types/allCommonTypes';





const SeatBooking: FC = () => {



    const [loginUserInfoUser, setLoginUserInfoUser] = useState<loginUserInfoUserTypes>();



    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));


    useEffect(() => {
        const fetchData = async () => {
            const fullName = localStorage.getItem('fullName');
            const email = localStorage.getItem('email');
            if (!email) {
                toast.error("Please login first");
                return window.location.replace("/");
            }
            else {
                try {
                    const loginUserInfo = await axios.post(
                        `${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/oneUserRoute`,
                        { email }
                    );
                    if (!loginUserInfo) {
                        toast.error("Please login first/ user not found on database");
                        return window.location.replace("/");
                    }
                    else {
                        setLoginUserInfoUser(loginUserInfo?.data)
                    }
                } catch (error) {
                    // Handle error
                }
            }
        };

        fetchData();

        // Cleanup function (if necessary)
        return () => {
            // Cleanup code
        };
    }, []);




    return (
        <div className='my-12'>
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Profile Information
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] lg:max-w-[75rem] m-4 md:mx-auto p-4 md:p-16'>

                        <div>

                            <div
                                className="my-4 border-[0.5px] pt-4 shadow-2xl bg-slate-200 dark:bg-slate-900"
                            >
                                <div
                                    className="py-2 border-b border-b-1"
                                >
                                    <h1
                                        className="text-2xl font-bold shadow-2xl px-6 "
                                    >
                                        Introduction
                                    </h1>
                                </div>
                                <div
                                    className="px-6 my-4 py-4 shadow-2xl grid md:grid-cols-2 lg:grid-cols-3"
                                >
                                    <h1>
                                        Name: {loginUserInfoUser?.fullName}
                                    </h1>
                                    <p>
                                        Program: {loginUserInfoUser?.department}
                                    </p>
                                    <p>
                                        Student Id: {loginUserInfoUser?.studentId}
                                    </p>
                                    <p>
                                        Semester: {loginUserInfoUser?.semester}
                                    </p>

                                    <p>
                                        Probarion: {"No Probarion"}
                                    </p>
                                </div>

                            </div>

                            <div
                                className="my-10 border-[0.5px] pt-4 shadow-2xl bg-slate-200 dark:bg-slate-900"
                            >
                                <div
                                    className="py-2 border-b border-b-1"
                                >
                                    <h1
                                        className="text-2xl font-bold shadow-2xl px-6 "
                                    >
                                        Status
                                    </h1>
                                </div>
                                <div
                                    className="px-6 my-4 py-4 shadow-2xl grid md:grid-cols-2 lg:grid-cols-3"
                                >
                                    <h1>
                                        Evaluation Pending: {"0 Courses"}
                                    </h1>
                                    <p>
                                        Active Status: {""}
                                    </p>
                                    <p>
                                        Admission Cancel: { }
                                    </p>
                                    <p>
                                        Disciplinary Block: {"No Probarion"}
                                    </p>
                                </div>

                            </div>

                            <div
                                className="my-4 border-[0.5px] pt-4 shadow-2xl bg-slate-200 dark:bg-slate-900"
                            >
                                <div
                                    className="py-2 border-b border-b-1"
                                >
                                    <h1
                                        className="text-2xl font-bold shadow-2xl px-6 "
                                    >
                                        Basic Info
                                    </h1>
                                </div>
                                <div
                                    className="px-6 my-4 py-4 shadow-2xl grid md:grid-cols-2 lg:grid-cols-3"
                                >
                                    <h1>
                                        Email: {loginUserInfoUser?.email}
                                    </h1>
                                    <p>
                                        Religion: { }
                                    </p>
                                    <p>
                                        Phone No: {loginUserInfoUser?.mobile}
                                    </p>
                                    <p>
                                        Others:
                                    </p>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SeatBooking;








