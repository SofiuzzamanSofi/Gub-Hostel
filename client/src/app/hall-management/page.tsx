"use client"

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import React, { createContext, useEffect, useState } from 'react'


import { GrFolderCycle } from 'react-icons/gr';
import { GoGitCompare, GoGitPullRequest } from 'react-icons/go';
import { BsFillInfoSquareFill, BsFillPersonFill } from 'react-icons/bs';
import { FaHandPointUp, FaRecycle, FaQuestionCircle } from 'react-icons/fa';
import { MdNotificationsActive, MdOutlineCancel, MdFreeCancellation } from 'react-icons/md';
import { AiFillFile, AiFillHome, AiFillInfoCircle, AiOutlineUnorderedList } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { loginUserInfoUserTypes, userLocalStorageTypes } from './../../workArea/types/allCommonTypes';





const HallManagement: FC = () => {


    const [userLocalStorage, setUserLocalStorage] = useState<userLocalStorageTypes>()
    const [loginUserInfoUser, setLoginUserInfoUser] = useState<loginUserInfoUserTypes>();
    const { data: session } = useSession();
    // const session = useSession();
    console.log("session:", session,)
    console.log("session er nicha userLocalStorage:", userLocalStorage?.email,)

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

                    console.log("loginUserInfo: 62", loginUserInfo?.data)
                    setLoginUserInfoUser(loginUserInfo?.data)
                    setUserLocalStorage({
                        fullName: fullName || '',
                        email: email || '',
                    });
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




    // const getHrefFunction = (urlToGo: string) => {
    const data = {
        email: "9sofiuzzaman.sf@gmail.com",
        fullName: "sofi1"
    };

    const queryString = new URLSearchParams(data).toString();
    const href = `/hall-management/student-info?${queryString}`;
    // }







    return (
        <div className='my-12'>
            <div className="container mx-auto">

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                        Hall Management
                    </h1>
                </div>

                <CommonHomeButton pathNameArray={pathNameArray} />


                <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4  md:mx-auto p-4 md:p-16'>
                    <div className="my-11 grid gap-16 justify-center sm:flex sm:flex-wrap sm:justify-between">

                        {
                            userLocalStorage?.email === "admin@gmail.com" ?


                                <>
                                    <Link
                                        href={{
                                            pathname: "/hall-management/student-info",
                                            query: data
                                        }}
                                        className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <AiFillInfoCircle className='w-14 h-16' />
                                        <p>Student Info</p>
                                    </Link>
                                    <Link href="/hall-management/student-bill-info" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <AiOutlineUnorderedList className='w-14 h-16' />
                                        <p>Student Bill Info</p>
                                    </Link>
                                    <Link href="/hall-management/complain-list" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <FaQuestionCircle className='w-14 h-16' />
                                        <p>Complain List</p>
                                    </Link>
                                    <Link href="/hall-management/cancellation-list" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <MdFreeCancellation className='w-14 h-16' />
                                        <p>Cancellation List</p>
                                    </Link>
                                    <Link href="/hall-management/renewal-list" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <GrFolderCycle className='w-14 h-16 bg-white' />
                                        <p>Renewal List</p>
                                    </Link>
                                    <Link href="/hall-management/change-room-request" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <GoGitCompare className='w-14 h-16' />
                                        <p>Change Room Request</p>
                                    </Link>
                                    <Link href="/hall-management/seat-book-request" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <GoGitPullRequest className='w-14 h-16' />
                                        <p>Seat Book Request</p>
                                    </Link>
                                    <Link href="/hall-management/change-room" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <BsFillPersonFill className='w-14 h-16' />
                                        <p>Personal Info</p>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link href="/hall-management/seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <FaHandPointUp className='w-14 h-16' />
                                        <p>Seat Booking</p>
                                    </Link>
                                    <Link href="/hall-management/seat-renewal" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <FaRecycle className='w-14 h-16' />
                                        <p>Seat Renew</p>
                                    </Link>
                                    <Link href="/hall-management/seat-cancelletion" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <MdOutlineCancel className='w-14 h-16' />
                                        <p>Seat Cancel</p>
                                    </Link>

                                    <Link href="/hall-management/change-room" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <BsFillPersonFill className='w-14 h-16' />
                                        <p>Personal Info</p>
                                    </Link>
                                    <Link href="/hall-management/complain" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <AiFillFile className='w-14 h-16' />
                                        <p>File a Complain</p>
                                    </Link>
                                    <Link href="/hall-management/change-room" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <AiFillHome className='w-14 h-16' />
                                        <p>Room Sharing</p>
                                    </Link>
                                    <Link href="/hall-management/bill-information" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <BsFillInfoSquareFill className='w-14 h-16' />
                                        <p>Bill Information</p>
                                    </Link>
                                    <Link href="/hall-management/change-room" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                        <MdNotificationsActive className='w-14 h-16' />
                                        <p>Change Room</p>
                                    </Link>
                                </>
                        }



                    </div>
                </div>

            </div>
        </div>
    );
};

export default HallManagement;