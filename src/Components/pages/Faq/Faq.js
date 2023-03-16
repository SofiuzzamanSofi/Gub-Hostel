import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeImage from '../../Home/HomeImage';



function Faq() {

    const location = useLocation();


    return (
        <div className="container mx-auto mt-4">
            <HomeImage />

            <div className="px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-blue-400 hover:text-blue-300 transition-all">
                        HOME
                    </Link>
                    <span>&gt;</span>
                    <span className=" uppercase">{location.pathname.replace('/', '')}</span>
                </div>
            </div>


            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Why choose Green University hostel?
                    </h1>
                    <div className="text-gray-700">
                        <p>Insure friendly environment for student.</p>
                        <p>Compact with various advantages such as high speed internet, indoor sports facilities.</p>
                        <p>24/7 security surveillance</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        How do I apply for Hostel?
                    </h1>
                    <div className="text-gray-700">
                        <p>Registration fee: BDT- 3000/- (One time admission fee, not applicable in every semester)</p>
                        <p>Fee for students: BDT- 15000/- (for 4 months)</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        How can I change my room after applying?
                    </h1>
                    <div className="text-gray-700">
                        <p>You can request to change your room at the hostel office.</p>
                        <p>Fee for room change: BDT- 2000/-</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        How can I proceed a complaint about the hostel?
                    </h1>
                    <div className="text-gray-700">
                        <p>You can submit a complaint to the hostel office or contact the hostel authority.</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Where can I find my payment information?
                    </h1>
                    <div className="text-gray-700">
                        <p>You can find your payment information on your hostel account or by contacting the hostel office.</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Can I choose my roommate?
                    </h1>
                    <div className="text-gray-700">
                        <p>You can request to choose your roommate at the time of application.</p>
                        <p>Note: Requests are subject to availability.</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Is the hostel separate for girls?</h1>
                    <div>
                        <p>
                            Yes, we have separate hostels for girls and boys.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Apply for your seat now
                </button>
            </div>
        </div>
    )
}

export default Faq





