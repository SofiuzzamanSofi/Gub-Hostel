"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState, useEffect } from 'react';
import { toast } from "react-hot-toast";
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { ParsedUrlQuery } from 'querystring';
import { usePathname } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai';
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { loginUserInfoUserTypes } from "@/workArea/types/allCommonTypes";



const StudentInfo: FC = () => {


    const router = useRouter();
    const [allUsers, setAllUsers] = useState<loginUserInfoUserTypes[]>([]);



    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));




    useEffect(() => {
        console.log("useEffect ")
        const loadData = async () => {
            const apiRes = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/allUsersRoute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (apiRes.status === 200) {
                const responseData = await apiRes.json();
                setAllUsers(responseData);
                toast.success(`Welcome to All User list, Be careful Baddy to accept.`)
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
                            Student Information
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />
                    <div className="flex justify-center items-center gap-1">
                        <AiOutlineSearch className='w-6 ' />
                        <input type="text" className='p-1 pl-2 rounded-md dark:text-white' />
                        <button className="bg-green-600 text-white rounded-lg px-2 py-1 cursor-no-drop">Search</button>
                    </div>

                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4 md:mx-auto p-4 md:p-16'>

                        <div>


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">


                                {

                                    !allUsers ?

                                        <>
                                            <div className="text-center">
                                                <p> No User / Studen is Available on Your Hostel.</p>
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
                                                            Student Id
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Student Name
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Email
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Department
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Semester
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Mobile
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Hall
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Level
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Room
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allUsers.map((tableRow, index: number) => (
                                                            <tr
                                                                key={index}
                                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {index + 1}
                                                                </th>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.studentId}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.fullName}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.email}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.department}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.semester}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.mobile}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {
                                                                        tableRow?.hall ?
                                                                            tableRow?.hall
                                                                            :
                                                                            "No-"
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {
                                                                        tableRow?.level ?
                                                                            tableRow?.level
                                                                            :
                                                                            "No-"
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {
                                                                        tableRow?.room ?
                                                                            tableRow?.room
                                                                            :
                                                                            "No-"
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    <button className="bg-green-600 text-white rounded-lg px-2 py-1 cursor-no-drop">Remark</button>
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

export default StudentInfo;








