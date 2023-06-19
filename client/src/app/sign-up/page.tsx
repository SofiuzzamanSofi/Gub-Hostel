"use client"


import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { toast } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { loginUser } from 'helpers';



const Signup: FC = () => {
    const router = useRouter();
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [mobile, setMobile] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);

    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split('/');
    const pathNameArray = pathNameTotalArray
        .filter((path) => path !== '')
        .map((name) => name.replace('-', ' '));

    const handleSignUp = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // validate form
        if (
            studentId.trim() === '' ||
            studentName.trim() === '' ||
            department.trim() === '' ||
            semester.trim() === '' ||
            mobile.trim() === '' ||
            mail.trim() === '' ||
            password.trim() === ''
        ) {
            // Display an error message or handle the validation failure
            console.log('Please fill out all fields');
            return toast.error('Please fill out all fields properly');
        } else {
            setLoading(true);
            try {
                const userInputData = {
                    fullName: studentName,
                    email: mail,
                    password,
                    studentId,
                    department,
                    semester,
                    mobile,
                    mail,
                };

                const apiRes = await axios.post(
                    `http://localhost:3000/api/auth/signup`,
                    userInputData
                );
                if (apiRes?.data?.success) {

                    const loginRes = await loginUser({
                        email: userInputData.email,
                        password: userInputData.password
                    })
                    if (loginRes && !loginRes.ok) {
                        setSubmitError(loginRes.error || "Error Login Function");
                    }
                    else {
                        toast.success(`Successfully signed up. Please check your email and sign up ${studentName}`);
                        router.push('/verify-email');
                    }
                }
            } catch (error: unknown) {
                console.log(error);
                if (error instanceof AxiosError) {
                    setSubmitError(error.response?.data?.error);
                } else {
                    setSubmitError('Error: on Catch block');
                    toast.error('Something went wrong on the catch block');
                }
            }
            setSubmitError("")
            setLoading(false);
        }
    };


    return (
        <div className="my-12">
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#35DC66] uppercase">Sign Up</h1>
                    </div>

                    <CommonHomeButton pathNameArray={pathNameArray} />

                    <div className="shadow-2xl dark:border border-black rounded-md max-w-[60rem] content-center m-4 md:mx-auto p-4 md:p-16">
                        <div>
                            <h1 className="text-center text-2xl dark:text-white font-semibold">Sign up for seat</h1>
                            <hr className="mt-4 p-[0.05rem] bg-[#22B24C]" />
                        </div>
                        <div>
                            <form onSubmit={handleSignUp}>
                                <div className="my-11 grid">
                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="studentId"
                                        placeholder="Student ID"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                        required
                                    />
                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="studentName"
                                        placeholder="Student Name"
                                        value={studentName}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        required
                                    />
                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="department"
                                        placeholder="Department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="semester"
                                        placeholder="Semester"
                                        value={semester}
                                        onChange={(e) => setSemester(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="text"
                                        name="mobile"
                                        placeholder="Mobile No"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white"
                                        type="email"
                                        name="email"
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
                                    <CommonButton buttonText={`${loading ? "Loading..." : "Sign Up"}`} isDisabled={loading ? true : false} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
