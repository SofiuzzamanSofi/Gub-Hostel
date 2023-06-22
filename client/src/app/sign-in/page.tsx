"use client"

import Link from 'next/link';
import { FC, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { loginUser } from '@/workArea/nextAuth/helpers';


const SignIn: FC = () => {


    const [mail, setMail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));




    const handleSignIn = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const logInputUserData = {
            email: mail,
            password,
        }

        setLoading(true);
        try {
            const loginRes = await loginUser(logInputUserData)
            if (loginRes && !loginRes.ok) {
                setSubmitError(loginRes.error || "Error Login Function");
            }
            else {
                toast.success(`Successfully ${mail}`);

                // Set user's full name and email in localStorage
                localStorage.setItem('fullName', "");
                localStorage.setItem('email', mail);

                // router.push('/hall-management'); // Reload the window
                window.location.replace('/hall-management'); // Reload the window

            }
        } catch (error) {
            if (error) {
                console.log("error?.response?.data?.error: handleSignIn 57page:", error)
                setSubmitError('Error: on Catch block');
                toast.error('Something went wrong on the catch block');

            }
            setLoading(false);
        };
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
                                        type="email"
                                        name="email"
                                        id='email'
                                        placeholder="Student Mail"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                    <div>
                                        {
                                            submitError &&
                                            <p className='text-sm text-red-600'>{submitError}</p>
                                        }
                                    </div>

                                </div>
                                <div>
                                    <CommonButton buttonText={`${loading ? "Loading..." : "Sign In"}`} isDisabled={loading ? true : false} />
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