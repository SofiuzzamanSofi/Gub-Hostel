"use client"

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';






const hallManageMent: FC = () => {


    const router = useRouter();
    const [studentId, setStudentId] = useState('');


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


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4 p-4 md:p-16'>
                        {/* <div>
                            <h1 className='text-center text-2xl dark:text-white font-semibold'>Sign up for seat</h1>
                            <hr className='mt-4 p-[0.05rem] bg-[#22B24C]' />
                        </div> */}
                        <div>

                            <div className="my-11 grid">
                                {/* <input
                                    className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                    type="text"
                                    name="studentId"
                                    placeholder="Student Id"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                />




                                <CommonButton buttonText="Sign Up" /> */}
                                {/* <input type="submit" value="Sign Up" /> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hallManageMent;








