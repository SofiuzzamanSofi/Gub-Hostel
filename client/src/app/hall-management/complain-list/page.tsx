"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from 'react-icons/ai';
import { ComplainTypes } from "@/workArea/types/allCommonTypes";









const ComplainList: FC = () => {


    const router = useRouter();
    const [allComPlain, setAllComPlain] = useState<ComplainTypes[]>([]);


    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));

    const handleSeatBooking = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        toast.success('Successfully toasted!')
        router.push("/hall-management");
    };







    useEffect(() => {
             const loadData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/getAllComplainRoute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            if (responseData) {
                setAllComPlain(responseData?.data);
                toast.success(`Welcome to Seat boooking request list, Be careful to accept.`)
            }
        }
        loadData()
    }, []);

    // console.log("allComPlain ln55", allComPlain)















    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Complain List
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

                                    !allComPlain ?

                                        <>
                                            <div className="text-center">
                                                <p> No Complains is Available right now.</p>
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
                                                            Hall
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Level
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Room/Seat
                                                        </th>
                                                        <th scope="col" className="p-6 uppercase font-semibold">
                                                            Complain For
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Complain
                                                        </th>
                                                        <th scope="col" className="p-6">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allComPlain.map((tableRow, index: number) => (
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
                                                                    {tableRow?.hall ? tableRow?.hall : "Heneral Shahid Jiya Hall"}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.level ? tableRow?.level : "-"}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.room ? tableRow?.room : "205"}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.complainFor ? tableRow?.complainFor : "-"}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {tableRow?.complainDetails ? tableRow?.complainDetails : "-"}
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

export default ComplainList;








