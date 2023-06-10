"use client"

import React from 'react';
import { usePathname } from 'next/navigation'
import HomeImage from '@/workArea/components/Home/HomeImage';
import CommonButton from './../../workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';



const Faq: React.FC = () => {


    const pathname = usePathname()
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "")

    return (
        <div className='my-12'>
            <HomeImage />

            <div className=''>
                <div className="container mx-auto">
                    <div className="py-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                                Faq
                            </h1>
                        </div>

                        <CommonHomeButton pathNameArray={pathNameArray} />




                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Why choose Green University hostel?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    Insure friendly environment for student.
                                </p>
                                <p>
                                    Compact with various advantages such as high speed internet, indoor sports facilities.
                                </p>
                                <p>
                                    24/7 security surveillance
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                How do I apply for Hostel?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    Registration fee: BDT- 3000/- (One time admission fee, not applicable in every semester)
                                </p>
                                <p>
                                    Fee for students: BDT- 15000/- (for 4 months)
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                How can I change my room after applying?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    You can request to change your room at the hostel office.
                                </p>
                                <p>
                                    Fee for room change: BDT- 2000/-
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                How can I proceed a complaint about the hostel?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    You can submit a complaint to the hostel office or contact the hostel authority.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Where can I find my payment information?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    You can find your payment information on your hostel account or by contacting the hostel office.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Can I choose my roommate?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    You can request to choose your roommate at the time of application.
                                </p>
                                <p>
                                    Note: Requests are subject to availability.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Is the hostel separate for girls?
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    Yes, we have separate hostels for girls and boys.
                                </p>
                            </div>
                        </div>


                        <CommonButton buttonText="Apply for your seat now" />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Faq





