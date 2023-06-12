"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";
import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineCheck } from 'react-icons/ai';




const ChangeRoomRequest: FC = () => {


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
                            Student  Bill Information
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />
                    <div className="flex justify-center items-center gap-1">
                        <AiOutlineSearch className='w-6 ' />
                        <input type="text" className='p-1 pl-2 rounded-md dark:text-white' />
                        <button className="bg-green-600 text-white rounded-md px-2 py-1 cursor-no-drop">Search</button>
                    </div>


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] lg:max-w-full m-4 md:mx-auto p-4 md:p-16'>

                        <div>


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 gap-2">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="p-6">
                                                No
                                            </th>
                                            <th scope="col" className="p-6">
                                                Name
                                            </th>
                                            <th scope="col" className="p-6">
                                                Email
                                            </th>
                                            <th scope="col" className="p-6">
                                                Phone
                                            </th>
                                            <th scope="col" className="p-6">
                                                Student ID
                                            </th>
                                            <th scope="col" className="p-6">
                                                Semester
                                            </th>
                                            <th scope="col" className="p-6">
                                                Department
                                            </th>
                                            <th scope="col" className="p-6">
                                                Change From - to
                                            </th>
                                            <th scope="col" className="p-6">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...Array(6)?.keys()].map((tableRow: number, index: number) => (
                                                <tr
                                                    key={index}
                                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        1
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Rasheq Mohammad Shevik
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        sheviqhaque113@gmail.com
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        AOXS-1971
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        01751479585
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span>10 </span>
                                                        <span>semester</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        CSE
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <p>Hall 01/Level/07/E107</p>
                                                        <p>---</p>
                                                        <p>Hall 04/Level/05/E106</p>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {/* <button className="bg-green-600 text-white rounded-lg px-2 py-1 cursor-no-drop">Accept</button>
                                                        <button className="bg-green-600 text-white rounded-lg px-2 py-1 cursor-no-drop">Remark</button> */}
                                                        <AiOutlineCheckCircle className="bg-green-600 text-white w-6 h-6 rounded-full cursor-pointer p-1 mb-2" />
                                                        <AiOutlineCloseCircle className="bg-red-600 text-white w-6 h-6 rounded-full cursor-pointer p-1 mt-2" />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ChangeRoomRequest;








