"use client"

import React from "react"
import Link from 'next/link';
import { FC, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation'
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from "react-hot-toast";
import axios from "axios";





const SeatBooking: FC = () => {


    const router = useRouter();
    const searchParams = useSearchParams()


    const [studentName, setStudentName] = useState(
        searchParams?.get('fullName') ?? ''
    );
    const [mail, setMail] = useState(
        searchParams?.get('email') ?? ''
    );
    const [mobile, setMobile] = useState(
        searchParams?.get('mobile') ?? ''
    );
    const [studentId, setStudentId] = useState(
        searchParams?.get('studentId') ?? ''
    );
    const [regular, setRegular] = useState('');
    const [semester, setSemester] = useState('');
    const [semesterYear, setSemesterYear] = useState('');
    const [hall, setHall] = useState('');
    const [level, setLevel] = useState('');
    const [room, setRoom] = useState('');
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);



    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));

    const handleSeatBooking = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();


        // validate form
        if (
            studentName.trim() === '' ||
            mail.trim() === '' ||
            mobile.trim() === '' ||
            studentId.trim() === '' ||
            regular.trim() === '' ||
            semester.trim() === '' ||
            semesterYear.trim() === '' ||
            hall.trim() === '' ||
            level.trim() === '' ||
            room.trim() === ''
        ) {

            // Display an error message or handle the validation failure
            return toast.error('Please fill out all fields properly');
        }

        try {
            setLoading(true);
            const handleSeatBookingData = {
                fullName: studentName,
                email: mail,
                mobile,
                studentId,
                regular,
                semester,
                semesterYear,
                hall,
                level,
                room,
            }


            const apiRes = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_TYPESCRIPT_API_URL}/createSeatBookRoute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ handleSeatBookingData }),
            });
            if (apiRes.status === 200) {
                toast.success(`Successfully submit your from for mail: ${mail}`)
                router.push("/hall-management");
            }
            else {
                toast.error(`Dublicate seat book request or your are trying to spaming on email: ${mail}`)
                console.log("are you a cheater", "response from DB: ", apiRes)
            }




        } catch (error: unknown) {
            setLoading(false);
            console.log(error);
            toast.error("error on catch ")
        }
        setLoading(false);
    };

    // const email = searchParams?.get('email') ?? '';
    // const fullName = searchParams?.get('fullName') ?? '';
    // const mobileFromDB = searchParams?.get('mobile') ?? '';
    // const studentIdFromDB = searchParams?.get('studentId') ?? '';
    // setStudentName(fullName);
    // setMail(email);
    // setMobile(mobileFromDB);
    // setStudentId(studentIdFromDB);

    // console.log("seat booking from page line 45:", email)

    return (
        <div className='my-12'>
            {/* <HomeImage /> */}
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                            Seat Booking Form
                        </h1>
                    </div>


                    <CommonHomeButton pathNameArray={pathNameArray} />


                    <div className='shadow-2xl dark:border border-black rounded-md max-w-[60rem] lg:max-w-[75rem] m-4 md:mx-auto p-4 md:p-16'>

                        <div>

                            <form
                                onSubmit={handleSeatBooking}
                            >
                                <div className="my-11 grid gap-12 justify-center sm:grid-cols-2 xl:grid-cols-3">

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center"
                                        type="text"
                                        name="studentName"
                                        placeholder="Student Name"
                                        value={studentName}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center"
                                        type="email"
                                        name="email"
                                        placeholder="Eail"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center"
                                        type="number"
                                        name="mobile"
                                        placeholder="Mobile No"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center"
                                        type="text"
                                        name="studentId"
                                        placeholder="Student ID"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                        required
                                    />


                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center">
                                        <label htmlFor="studentType">
                                            Student Type <span className="text-red-500">*</span>{' '}
                                        </label>
                                        <select
                                            name="studentType"
                                            id="studentType"
                                            className="bg-[#CDCDCD] dark:bg-gray-700 text-center"
                                            value={regular}
                                            onChange={(e) => setRegular(e.target.value)}
                                            required
                                        >
                                            <option disabled value="">
                                                Choose One
                                            </option>
                                            <option value="Regular">Regular</option>
                                            <option value="Irregular">Irregular</option>
                                        </select>
                                    </div>

                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center">
                                        <label htmlFor="semesterType">
                                            Semester<span className="text-red-500">*</span>{' '}
                                        </label>
                                        <select
                                            name="semesterType"
                                            id="semesterType"
                                            className="bg-[#CDCDCD] dark:bg-gray-700 text-center"
                                            value={semester}
                                            onChange={(e) => setSemester(e.target.value)}
                                        >
                                            <option disabled value="">
                                                Choose One
                                            </option>
                                            <option value="First">First</option>
                                            <option value="Second">Second</option>
                                            <option value="Third">Third</option>
                                            <option value="Fourth">Fourth</option>
                                            <option value="Fifth">Fifth</option>
                                            <option value="Sixth">Sixth</option>
                                            <option value="Seventh">Seventh</option>
                                            <option value="Eighth">Eighth</option>
                                        </select>
                                    </div>

                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center">
                                        <label htmlFor="semesterYear">
                                            Semester Year<span className="text-red-500">*</span>{' '}
                                        </label>
                                        <select
                                            name="semesterYear"
                                            id="semesterYear"
                                            className="bg-[#CDCDCD] dark:bg-gray-700 text-center"
                                            value={semesterYear}
                                            onChange={(e) => setSemesterYear(e.target.value)}
                                        >
                                            <option disabled value="">
                                                Choose One
                                            </option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                        </select>
                                    </div>

                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center">
                                        <label htmlFor="hall">
                                            Hall<span className="text-red-500">*</span>{' '}
                                        </label>
                                        <select
                                            name="hall"
                                            id="hall"
                                            className="bg-[#CDCDCD] dark:bg-gray-700 text-center"
                                            value={hall}
                                            onChange={(e) => setHall(e.target.value)}
                                        >
                                            <option disabled value="">
                                                Choose One
                                            </option>
                                            <option value="Shahid Jiya Hall">Shahid Jiya Hall</option>
                                            <option value="Mawlana Vasani Hall">Mawlana Vasani Hall</option>
                                            <option value="Shere E Bangla Hall">Shere E Bangla Hall</option>
                                            <option value="Krishnochura Hall">Krishnochura Hall</option>
                                            <option value="Shekh Fajilatun Nesha Hall">Shekh Fajilatun Nesha Hall</option>
                                            <option value="Shekh Rashel Hall">Shekh Rashel Hall</option>
                                            <option value="Dr Shohidullah Hall">Dr Shohidullah Hall</option>
                                            <option value="Birsherstho Sohid Kamal Hall">Birsherstho Sohid Kamal Hall</option>
                                        </select>
                                    </div>


                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center">
                                        <label htmlFor="level">
                                            Level<span className="text-red-500">*</span>{' '}
                                        </label>
                                        <select
                                            name="level"
                                            id="level"
                                            className="bg-[#CDCDCD] dark:bg-gray-700 text-center"
                                            value={level}
                                            onChange={(e) => setLevel(e.target.value)}
                                        >
                                            <option disabled value="">Chose One</option>
                                            <option value="First">First</option>
                                            <option value="Second">Second</option>
                                            <option value="Third">Third</option>
                                            <option value="Fourth">Fourth</option>
                                            <option value="Fifth">Fifth</option>
                                            <option value="Sixth">Sixth</option>
                                            <option value="Seventh">Seventh</option>
                                            <option value="Eighth">Eighth</option>
                                        </select>
                                    </div>


                                    <div className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white text-center">
                                        <label htmlFor="room">
                                            Room<span className="text-red-500">*</span>{' '}
                                        </label>
                                        <select
                                            name="room"
                                            id="room"
                                            className="bg-[#CDCDCD] dark:bg-gray-700 text-center"
                                            value={room}
                                            onChange={(e) => setRoom(e.target.value)}
                                        >
                                            <option disabled value="">Chose One</option>
                                            <option value="101">101</option>
                                            <option value="102">102</option>
                                            <option value="103">103</option>
                                            <option value="104">104</option>
                                            <option value="201">101</option>
                                            <option value="202">202</option>
                                            <option value="203">203</option>
                                            <option value="204">204</option>
                                            <option value="301">301</option>
                                            <option value="302">302</option>
                                            <option value="303">303</option>
                                            <option value="304">304</option>
                                            <option value="401">401</option>
                                            <option value="402">402</option>
                                            <option value="403">403</option>
                                            <option value="404">404</option>
                                            <option value="501">501</option>
                                            <option value="502">502</option>
                                            <option value="503">503</option>
                                            <option value="504">504</option>
                                            <option value="601">601</option>
                                            <option value="602">602</option>
                                            <option value="603">603</option>
                                            <option value="604">604</option>
                                        </select>
                                    </div>


                                </div>
                                <div>
                                    {
                                        submitError &&
                                        <p className='text-sm text-red-600'>{submitError}</p>
                                    }
                                </div>
                                <div>

                                    <p className="text-sm">Star(*) Marked are mandatory fields.</p>
                                </div>
                                <div>
                                    <CommonButton buttonText={`${loading ? "Loading..." : "Submit"}`} isDisabled={loading ? true : false} />

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SeatBooking;








