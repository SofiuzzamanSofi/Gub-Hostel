"use client"

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";
import { UserLocalStorageTypes } from "@/workArea/types/allCommonTypes";

const Complain = () => {
    const router = useRouter();

    const [userLocalStorage, setUserLocalStorage] = useState<UserLocalStorageTypes>()
    const [loginUserInfoUser, setLoginUserInfoUser] = useState<{}>("");
    const [checkedComplaint, setCheckedComplaint] = useState<string | null>(null);
    const [textAreaData, setTextAreaData] = useState<string>("");

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaData(event.target.value);
    };

    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);

    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/");
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));

    const handleComplainSubmission = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();



        if (!loginUserInfoUser) return toast.error("User null | login First")

        try {
            setLoading(true);
            const comPlainData = { ...loginUserInfoUser, complainFor: checkedComplaint, complainDetails: textAreaData }
            const response = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/createComplainRoute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comPlainData }),
            });
            if (response.ok) {
                toast.success('Complaint submitted successfully!');
                router.push("/hall-management");
            } else {
                window.alert('Duplicate complain,\nYou have complained before.\nOne student should only have one complain.');
                toast.error('Failed to submit complaint');
            }


        } catch (error) {
            setSubmitError("see the error message.")
            console.error(error);
            toast.error('An error occurred while submitting the complaint');
        } finally {
            setLoading(false);
        }
    };




    // get user from DB other wise route will be protected 
    useEffect(() => {
        const fetchData = async () => {
            const fullName = localStorage.getItem('fullName');
            const email = localStorage.getItem('email');
            if (!email) {
                toast.error('Please login first');
                return window.location.replace('/');
            } else {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/oneUserRoute`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email }),
                        }
                    );
                    const responseData = await response.json();
                    if (!responseData._id) {
                        toast.error('Please login first/user not found in the database');
                        return window.location.replace('/');
                    } else {
                        setLoginUserInfoUser(responseData);
                        setUserLocalStorage({
                            fullName: fullName || '',
                            email: email || '',
                        });
                    }
                } catch (error) {
                    // Handle error
                }
            }
        };

        fetchData();

        // Cleanup function (if necessary)
        return () => {
            // Cleanup code
        };
    }, []);




    return (
        <div className='my-12'>
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            File A Complain
                        </h1>
                    </div>

                    <CommonHomeButton pathNameArray={pathNameArray} />

                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] m-4 md:mx-auto p-4 md:p-16'>
                        <div>
                            <form onSubmit={handleComplainSubmission}>
                                <div className="my-11 grid gap-4">


                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between">
                                        <p>Complain About Food</p>
                                        <input
                                            type="checkbox"
                                            name="foodComplaint"
                                            checked={checkedComplaint === "foodComplaint"}
                                            onChange={() => setCheckedComplaint("foodComplaint")}
                                        />
                                    </div>
                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between">
                                        <p>Complain About Environment</p>
                                        <input
                                            type="checkbox"
                                            name="environmentComplaint"
                                            checked={checkedComplaint === "environmentComplaint"}
                                            onChange={() => setCheckedComplaint("environmentComplaint")}
                                        />
                                    </div>
                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between">
                                        <p>Complain About Management</p>
                                        <input
                                            type="checkbox"
                                            name="managementComplaint"
                                            checked={checkedComplaint === "managementComplaint"}
                                            onChange={() => setCheckedComplaint("managementComplaint")}
                                        />
                                    </div>
                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between">
                                        <p>Complain About Service</p>
                                        <input
                                            type="checkbox"
                                            name="serviceComplaint"
                                            checked={checkedComplaint === "serviceComplaint"}
                                            onChange={() => setCheckedComplaint("serviceComplaint")}
                                        />
                                    </div>
                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between">
                                        <p>Others Complain</p>
                                        <input
                                            type="checkbox"
                                            name="othersComplaint"
                                            checked={checkedComplaint === "othersComplaint"}
                                            onChange={() => setCheckedComplaint("othersComplaint")}
                                        />
                                    </div>


                                    <div>
                                        <label htmlFor="textArea " className="dark:text-white">Brifly Write About The Complain:</label>
                                        <div className="my-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white cursor-pointer flex justify-between">

                                            <div className="rounded-md dark:text-white grid gap-2 w-full">
                                                <textarea
                                                    name="textArea"
                                                    id="textArea"
                                                    className="p-4 rounded-md min-h-[10rem] bg-[#CDCDCD] dark:bg-gray-700"
                                                    placeholder="Food is wasy .. Environment is wasty .."
                                                    value={textAreaData}
                                                    onChange={handleTextAreaChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        {
                                            submitError &&
                                            <p className='text-sm text-red-600'>{submitError}</p>
                                        }
                                    </div>

                                </div>
                                <div>
                                    <CommonButton buttonText={`${loading ? "Loading..." : "Submit"}`} isDisabled={checkedComplaint && textAreaData ? false : loading ? false : true} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complain;

