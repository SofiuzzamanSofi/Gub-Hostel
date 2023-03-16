import React from 'react';
import HomeImage from '../../Home/HomeImage';

function Faq() {
    return (
        <div className="container mx-auto mt-4">
            <HomeImage />
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-8">FAQ</h1>
            </div>
            <div className="flex items-center text-gray-600 mb-6">
                <span>HOME</span>
                <span className="mx-2">&gt;</span>
                <span>FAQ</span>
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





