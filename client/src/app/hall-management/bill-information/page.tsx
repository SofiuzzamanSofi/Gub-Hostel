"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";





const BillInformation: FC = () => {


    const router = useRouter();
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [mobile, setMobile] = useState('');
    const [mail, setMail] = useState('');


    const pathname = usePathname()
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));

    const handleSeatBooking = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("this is console.log");
        // router.push("/" as string, undefined,  {shallow: true});
        // router.replace("/")
        toast.success('Successfully toasted!')
        router.push("/hall-management");
    };



    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            File A Complain
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4 md:mx-auto p-4 md:p-16'>

                        <div>

                            <form
                                onSubmit={handleSeatBooking}
                            >
                                <div className="my-11 grid gap-4">

                                    <div
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between"
                                    >
                                        <p>Complain About Food</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between"
                                    >
                                        <p>Complain About Environment</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between"
                                    >
                                        <p>Complain About Management</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between"
                                    >
                                        <p>Complain About Service</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div
                                        className="my-4 rounded-md  dark:text-white grid gap-2"
                                    >
                                        <label htmlFor="others">Others:</label>
                                        <textarea name="others" id="others" className="p-4 rounded-md min-h-[10rem] bg-[#CDCDCD] dark:bg-gray-700">

                                        </textarea>
                                    </div>

                                </div>

                                <div>
                                    <CommonButton buttonText="Submit" />
                                    {/* <input type="submit" value="Sign Up" /> */}
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BillInformation;








