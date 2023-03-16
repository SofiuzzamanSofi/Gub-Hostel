import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeImage from '../../Home/HomeImage';

function Admission() {
    const location = useLocation();

    return (
        <div className="bg-gray-200 min-h-screen">
            <HomeImage />

            <div >
                <div className="container mx-auto">
                    <div className="py-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Admission</h1>
                        </div>
                        <div className="pt-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-gray-600">HOME</span>
                                    <span className="mx-2">&gt;</span>
                                    <span className="text-gray-600 uppercase">{location.pathname.replace('/', '')}</span>
                                </div>
                                <div>
                                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                                        Apply for your seat now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="bg-white shadow-md p-5 rounded-md">
                                <h1 className="text-xl font-bold pb-3">Admission Eligibility</h1>
                                <div className="ml-3 pb-3">
                                    <p className="flex items-center text-gray-700">
                                        <span>&gt;</span>
                                        <span className="pl-2">Regular Students of GUB</span>
                                    </p>
                                    <p className="flex items-center text-gray-700">
                                        <span>&gt;</span>
                                        <span className="pl-2">Minimum CGP: 3 in case of Readmission/existing students</span>
                                    </p>
                                    <p className="flex items-center text-gray-700">
                                        <span>&gt;</span>
                                        <span className="pl-2">No Accusation/ Conviction from University or Government</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Students have to pay BDT- 3000/- tk (Seat only). But mode of the payment will be semester wise and advance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="bg-white shadow-md p-5 rounded-md">
                                <h1 className="text-xl font-bold pb-3">Hall Fees</h1>
                                <div className="ml-3 pb-3">
                                    <p className="flex items-center text-gray-700">
                                        <span>&gt;</span>
                                        <span className="pl-2">Registration fee: BDT- 3000/-</span>
                                    </p>
                                    <p className="flex items-center text-gray-700">
                                        <span>&gt;</span>
                                        <span className="pl-2">One time admission fee, not applicable in every semester</span>
                                    </p>
                                    <p className="flex items-center text-gray-700">
                                        <span>&gt;</span>
                                        <span className="pl-2">Fee for students: BDT- 15000/- (for 4 month)</span>
                                    </p>
                                </div>
                                <div>
                                    <p>Student have to pay BDT- 18000/- only in 1st semester and after that BDT- 15000/- in every semester.</p>
                                </div>
                                <div>
                                    <p>The Hall payment should be done during academic registration (beginning in
                                        the semester)</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h1 className="text-xl font-bold">Payment Procedure</h1>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        You can deposit money Accounts section, at GUB online payment system BKash , Nogod and Rocket.
                                    </p>
                                    <p className="mt-4 font-bold">
                                        BKash Payment System
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <ol className='list-decimal'>
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
                                <div className="mt-4">
                                    <p>
                                        After above procedures collect transaction no & Sender mobile number for form fill up and further use. You have to preserve this message and show in the accounts section of Green University of Bangladesh before allotment of seat.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h1 className="text-xl font-bold">Seat Cancellation</h1>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        Students can cancel their seat twice in a year. In every semester Hall Authority will announce notice for seat cancelation for a specific time period. Interested students have to apply within the time frame.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                                Apply for your seat now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admission;




