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


    const pathname = usePathname() ?? '';
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
                            Bill Information
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4 md:mx-auto p-4 md:p-16'>

                        <div>


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 gap-2">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="p-6">
                                                No
                                            </th>
                                            <th scope="col" className="p-6">
                                                Fee Type
                                            </th>
                                            <th scope="col" className="p-6">
                                                Amount
                                            </th>
                                            <th scope="col" className="p-6">
                                                Discount
                                            </th>
                                            <th scope="col" className="p-6">
                                                Payment
                                            </th>
                                            <th scope="col" className="p-6">
                                                Payable
                                            </th>
                                            <th scope="col" className="p-6">
                                                Late Fee
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...Array(10)?.keys()].map((tableRow: number, index: number) => (
                                                <tr
                                                    key={index}
                                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        1
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Hostel Fee
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span>15000</span>
                                                        <span>Tk</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span>500</span>
                                                        <span>Tk</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span>7500</span>
                                                        <span>Tk</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span>7500</span>
                                                        <span>Tk</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span>00</span>
                                                        <span>Tk</span>
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

export default BillInformation;








