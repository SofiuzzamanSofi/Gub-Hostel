"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';





const hallManageMent: FC = () => {


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
        router.push("/faq");
    };



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

                            <form onSubmit={handleSeatBooking}>
                                <div className=" grid">

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="studentName"
                                        placeholder="Student Name"
                                        value={studentName}
                                        onChange={(e) => setStudentName(e.target.value)}
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="email"
                                        name="email"
                                        placeholder="Eail"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="mobile"
                                        placeholder="Mobile No"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="studentId"
                                        placeholder="Student ID"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                    />


                                    <div
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                    >
                                        <label htmlFor="semesterType">Semester Type <span className="text-red-500">*</span> </label>
                                        <select name="semesterType" id="semesterType" className="border border-red">
                                            <option value="First">First</option>
                                        </select>
                                    </div>


                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="semester"
                                        placeholder="Semester"
                                        value={semester}
                                        onChange={(e) => setSemester(e.target.value)}
                                    />




                                </div>
                                <div>
                                    <CommonButton buttonText="Sign Up" />
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

export default hallManageMent;








