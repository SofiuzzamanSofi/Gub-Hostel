import CommonButton from '@/workArea/components/CommonButton/CommonButton';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';
import { FC } from 'react';

const handleSignUp = () => {
    // Handle sign up logic here
};

const signup: FC = () => {
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

                    <div className='border rounded-md max-w-[60rem] items-center mx-auto p-16'>
                        <div>
                            <h1 className='text-center text-2xl dark:text-white'>Sign up for seat</h1>
                            <hr className='mt-4 p-[0.05rem] bg-[#22B24C]' />
                        </div>
                        <div>
                            <form onSubmit={handleSignUp}>
                                <div className='my-11 grid'>
                                    <input className='my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white' type="text" name="studentId" placeholder='Student Id' />
                                    <input className='my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white' type="text" name="studentName" placeholder='Student Name' />
                                    <input className='my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white' type="text" name="department" placeholder='Department' />
                                    <input className='my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white' type="text" name="semester" placeholder='Semester' />
                                    <input className='my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white' type="text" name="mobile" placeholder='Mobile No' />
                                    <input className='my-4 p-4 rounded-md bg-[#CDCDCD] dark:bg-gray-700 dark:text-white' type="text" name="mail" placeholder='Student Mail' />
                                </div>
                                <div>
                                    <CommonButton buttonText="Sign Up" />
                                    <input type="submit" value="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signup;
