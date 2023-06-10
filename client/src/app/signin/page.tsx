"use client"


import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';





const SignIn: FC = () => {


    const router = useRouter();
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [mobile, setMobile] = useState('');
    const [mail, setMail] = useState('');




    const handleSignUp = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("this is console.log");
        // router.push("/" as string, undefined,  {shallow: true});
        // router.replace("/")
        router.push("/verify-email");
    };




    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Sign Up
                        </h1>
                    </div>

                    <CommonHomeButton />

                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] items-center mx-auto p-4 md:p-16'>
                        <div>
                            <h1 className='text-center text-2xl dark:text-white font-semibold'>Sign up for seat</h1>
                            <hr className='mt-4 p-[0.05rem] bg-[#22B24C]' />
                        </div>
                        <div>
                            <form onSubmit={handleSignUp}>
                                <div className="my-11 grid">
                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="studentId"
                                        placeholder="Student Id"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                    />
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
                                        type="text"
                                        name="department"
                                        placeholder="Department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="semester"
                                        placeholder="Semester"
                                        value={semester}
                                        onChange={(e) => setSemester(e.target.value)}
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
                                        name="mail"
                                        placeholder="Student Mail"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
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
            </div>
        </div>
    );
};

export default SignIn;   