import CommonButton from '@/workArea/components/CommonButton/CommonButton'
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton'
import { FC } from 'react'


interface signupProps {

}

const signup: FC<signupProps> = ({ }) => {
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
                            <h1 className='text-center text-2xl '>Sign up for seat</h1>
                            <hr className='mt-4' />
                        </div>
                        <div>
                            <form>
                                <div className='my-11 grid'>

                                    <input className='my-4 p-4 rounded-md' type="text" name="studentId" id="" placeholder='Student Id' />
                                    <input className='my-4 p-4 rounded-md' type="text" name="studentName" id="" placeholder='Student Name' />
                                    <input className='my-4 p-4 rounded-md' type="text" name="department" id="" placeholder='Department' />
                                    <input className='my-4 p-4 rounded-md' type="text" name="semester" id="" placeholder='Semester' />
                                </div>
                                <div>
                                    <CommonButton buttonText="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default signup