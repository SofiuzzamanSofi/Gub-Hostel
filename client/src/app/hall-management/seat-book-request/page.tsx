"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";
import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineCheck } from 'react-icons/ai';
import { SeatBookReqTypes } from "@/workArea/types/allCommonTypes";





const SeatBookRequest: FC = () => {


    const router = useRouter();
    const [allSeatBookReq, setAllSeatBookReq] = useState<SeatBookReqTypes[]>([]);



    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));



    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/getSeatBookListRoute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            if (responseData) {
                setAllSeatBookReq(responseData);
                toast.success(`Welcome to Seat boooking request list, Be careful to accept.`)
            }
        }
        loadData()
    }, []);


    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Seat Book Request
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



                                {

                                    !allSeatBookReq ?

                                        <>
                                            <div className="text-center">
                                                <p> No Seat Book Request is Available.</p>
                                            </div>
                                        </>
                                        :
                                        <>
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
                                                            Semester
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Semester Year
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Student ID
                                                        </th>

                                                        <th scope="col" className="p-6">
                                                            Phone
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Hall/Level/Room
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allSeatBookReq.map((tableRow, index: number) => (
                                                            <tr
                                                                key={index}
                                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {index + 1}
                                                                </th>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.fullName}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.email}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.semester}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.semesterYear}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.studentId}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.mobile}
                                                                </td>

                                                                <td className="px-6 py-4">
                                                                    <p>
                                                                        {tableRow?.hall}
                                                                    </p>
                                                                    <p>
                                                                        Level/Floor: {tableRow?.level}
                                                                    </p>
                                                                    <p>
                                                                        Room No:  {tableRow?.room}
                                                                    </p>
                                                                    {/* <p>Hall 01/Level/07/E107</p> */}
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
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SeatBookRequest;