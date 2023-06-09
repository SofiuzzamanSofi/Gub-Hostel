import Link from 'next/link';
import { FaGreaterThan } from 'react-icons/fa';
import HomeImage from '@/workArea/components/Home/HomeImage';
// import { useNavigation } from 'next/navigation';
import CommonButton from './../../workArea/components/CommonButton/CommonButton';




const Admission: React.FC = () => {
    // const navigation = useNavigation();


    return (
        <div>
            <HomeImage />

            <div className='my-2'>
                <div className="container mx-auto">
                    <div className="py-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                                Admission Page
                            </h1>
                        </div>

                        <div className="px-8 py-4 flex items-center justify-between pt-12 pb-6">
                            <div className="flex items-center space-x-2">
                                <Link href={"/"} className="text-blue-400 hover:text-blue-300 transition-all">
                                    HOME
                                </Link>
                                <span className="text-black dark:text-white">
                                    <FaGreaterThan />
                                </span>
                                {/* <span className="text-black dark:text-white uppercase">{router.pathname.replace('/', '')}</span> */}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Admission Eligibility
                            </h1>
                            <div className="ml-3 pb-3 text-black dark:text-white">
                                <p className="flex items-center">
                                    <FaGreaterThan />
                                    <span className="pl-2">Regular Students of GUB</span>
                                </p>
                                <p className="flex items-center ">
                                    <FaGreaterThan />
                                    <span className="pl-2">Minimum CGP: 3 in case of Readmission/existing students</span>
                                </p>
                                <p className="flex items-center ">
                                    <FaGreaterThan />
                                    <span className="pl-2">No Accusation/ Conviction from University or Government</span>
                                </p>
                            </div>
                            <div className='text-black dark:text-white'>
                                <p>
                                    Students have to pay BDT- 3000/- tk (Seat only). But mode of the payment will be semester wise and advance.
                                </p>
                            </div>
                        </div>


                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Hall Fees
                            </h1>
                            <div className="ml-3 pb-3 text-black dark:text-white">
                                <p className="flex items-center">
                                    <FaGreaterThan />
                                    <span className="pl-2">Registration fee: BDT- 3000/-</span>
                                </p>
                                <p className="flex items-center">
                                    <FaGreaterThan />
                                    <span className="pl-2">One time admission fee, not applicable in every semester</span>
                                </p>
                                <p className="flex items-center">
                                    <FaGreaterThan />
                                    <span className="pl-2">Fee for students: BDT- 15000/- (for 4 month)</span>
                                </p>
                            </div>
                            <div className='text-black dark:text-white'>
                                <p>Student have to pay BDT- 18000/- only in 1st semester and after that BDT- 15000/- in every semester.</p>
                            </div>
                            <div className='text-black dark:text-white pt-4'>
                                <p>The Hall payment should be done during academic registration (beginning in
                                    the semester)</p>
                            </div>
                        </div>



                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Payment Procedure
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    You can deposit money Accounts section, at GUB online payment system BKash , Nogod and Rocket.
                                </p>
                                <p className="mt-4 font-bold">
                                    BKash Payment System
                                </p>
                            </div>
                            <div className="mt-4 text-black dark:text-white">
                                <ol className='list-decimal px-5'>
                                    <li>
                                        Dial *247#
                                    </li>
                                    <li>
                                        Choose option 03- Payment
                                    </li>
                                    <li>
                                        Enter the merchant Bkash Account number you want to pay- 01811458901
                                    </li>
                                    <li>
                                        Enter the amount 13156/- (1.2% charges included)
                                    </li>
                                    <li>
                                        Enter a reference (Input your GUB ID number without –( High fen))
                                    </li>
                                    <li>
                                        Enter the counter number: HALL
                                    </li>
                                    <li>
                                        Enter Menu PIN to complete
                                    </li>
                                </ol>
                            </div>
                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    After above procedures collect transaction no & Sender mobile number for form fill up and further use. You have to preserve this message and show in the accounts section of Green University of Bangladesh before allotment of seat.
                                </p>
                            </div>
                        </div>


                        <div className="bg-white dark:bg-slate-700  shadow-md p-5 rounded-md my-5">
                            <h1 className="text-xl font-bold pb-3 text-[#35DC66]">
                                Seat Cancellation
                            </h1>

                            <div className="mt-4 text-black dark:text-white">
                                <p>
                                    Students can cancel their seat twice in a year. In every semester Hall Authority will announce notice for seat cancelation for a specific time period. Interested students have to apply within the time frame.
                                </p>
                            </div>
                        </div>


                        <CommonButton buttonText="Apply for your seat now" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Admission;




