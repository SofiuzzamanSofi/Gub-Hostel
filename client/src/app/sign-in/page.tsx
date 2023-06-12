"use client"

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import Link from 'next/link';


const SignIn: FC = () => {


    const [studentId, setStudentId] = useState('');
    const [mail, setMail] = useState('');

    const router = useRouter();
    const pathname = usePathname()
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));




    const handleSignIn = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("this is console.log");
        // router.push("/" as string, undefined,  {shallow: true});
        // router.replace("/")
        router.push("/hall-management");
    };




    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Hostel Portal Sign In
                        </h1>
                    </div>



                    <CommonHomeButton pathNameArray={pathNameArray} />


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] md:mx-auto p-4 md:p-16'>
                        <div>
                            <h1 className='text-center text-2xl dark:text-white font-semibold'>Student Portal Sign In</h1>
                            <hr className='mt-4 p-[0.05rem] bg-[#22B24C]' />
                        </div>
                        <div>
                            <form onSubmit={handleSignIn}>
                                <div className="my-11 grid">
                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="studentId"
                                        placeholder="Inter Your Id"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="password"
                                        name="mail"
                                        placeholder="Enter Your Password"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
                                    />

                                </div>
                                <div>
                                    <CommonButton buttonText="Sign In" />
                                    {/* <input type="submit" value="Sign Up" /> */}
                                </div>
                            </form>
                            < div className="text-center mx-auto hover:text-red-500 text-xs mt-4 underline">
                                <Link href="/" className="cursor-not-allowed disabled:">
                                    Forget Password
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;   