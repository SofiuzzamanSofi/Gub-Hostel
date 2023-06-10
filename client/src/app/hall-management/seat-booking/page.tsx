"use client"

import Link from 'next/link';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { FaHandPointUp, FaRecycle } from 'react-icons/fa';
import { AiFillFile, AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { MdNotificationsActive, MdOutlineCancel } from 'react-icons/md';
import { BsFillInfoSquareFill, BsFillPersonFill } from 'react-icons/bs';





const hallManageMent: FC = () => {


    const router = useRouter();


    const pathname = usePathname()
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));





    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Hall Management
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4  md:mx-auto p-4 md:p-16'>

                        <div className="my-11 grid gap-16 justify-center sm:flex sm:flex-wrap sm:justify-between">

                            {/* <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <AiFillInfoCircle className='w-14 h-16' />
                                <p>Student Info</p>
                            </Link> */}
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <FaHandPointUp className='w-14 h-16' />
                                <p>Seat Booking</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <FaRecycle className='w-14 h-16' />
                                <p>Seat Renew</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <MdOutlineCancel className='w-14 h-16' />
                                <p>Seat Cancel</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <BsFillPersonFill className='w-14 h-16' />
                                <p>Personal Info</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <AiFillFile className='w-14 h-16' />
                                <p>File a Complain</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <AiFillHome className='w-14 h-16' />
                                <p>Room Sharing</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <BsFillInfoSquareFill className='w-14 h-16' />
                                <p>Bill Information</p>
                            </Link>
                            <Link href="seat-booking" className="p-4 w-44 border-[0.05rem] rounded-md flex justify-center items-center flex-col gap-2 hover:shadow-2xl hover:scale-105 dark:text-white">
                                <MdNotificationsActive className='w-14 h-16' />
                                <p>Change Room</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hallManageMent;








