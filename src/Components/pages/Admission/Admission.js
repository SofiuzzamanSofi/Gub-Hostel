import React from 'react'
import { useLocation } from 'react-router-dom'

function Admission() {


    const location = useLocation();


    return (
        <div>
            <div>
                <h1>
                    Admission
                </h1>
            </div>
            <div>
                <div>
                    HOME <span> &gt; </span> <span className='uppercase'>{location.pathname.replace("/", "")}</span>
                </div>

                <div>
                    <div>
                        <div>
                            <h1>Admission Eligibility</h1>
                        </div>
                        <div>
                            <p>
                                <span> &gt; </span> <span>Regular Students of GUB</span>
                            </p>
                            <p>
                                <span> &gt; </span> <span>Minimum CGP: 3 in case of Readmission/existing students</span>
                            </p>
                            <p>
                                <span> &gt; </span> <span>No Accusation/ Conviction from University or Government</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Students have to pay BDT- 3000/- tk (Seat only). But mode of the payment will be semester wise and advance.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                Hall Fees
                            </h1>
                        </div>
                        <div>
                            <p>
                                <span> &gt; </span> <span>Registration fee: BDT- 3000/-</span>
                            </p>
                            <p>
                                <span> &gt; </span> <span> One time admission fee, not applicable in every semester</span>
                            </p>
                            <p>
                                <span> &gt; </span> <span>Fee for students: BDT- 15000/- (for 4 month)</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Student have to pay BDT- 18000/- only in 1st semester and after that BDT- 15000/- in every semester.
                            </p>
                        </div>
                        <div>
                            <p>
                                The Hall payment should be done during academic registration (beginning in the semester)
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Payment Procedure</h1>
                        </div>
                        <div>
                            <p>
                                You can deposit money Accounts section, at GUB online payment system BKash , Nogod and Rocket.
                            </p>
                            <p>
                                BKash Payment System
                            </p>
                        </div>
                        <div>
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
                        <div>
                            <p>
                                After above procedures collect transaction no & Sender mobile number for form fill up and further use. You have to preserve this message and show in the accounts section of Green University of Bangladesh before allotment of seat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                Seat Cancellation
                            </h1>
                        </div>
                        <div>
                            <p>
                                Students can cancel their seat twice in a year. In every semester Hall Authority will announce notice for seat cancelation for a specific time period. Interested students have to apply within the time frame.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <button>Apply for your seat now</button>
                </div>
            </div>
        </div>
    )
}

export default Admission