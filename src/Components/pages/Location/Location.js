import React from 'react'
import maps from "../../../assets/maps.png"

function Location() {
    return (
        <div>
            <div>
                <h1>
                    LOCATION
                </h1>
            </div>
            <div>
                <div>
                    HOME <span> &gt; </span> LOCATION
                </div>
                <div>
                    <div>
                        <h1>
                            Google Maps
                        </h1>
                    </div>
                    <div
                        className='flex'
                    >
                        <img src={maps} alt="This is Green university on google maps" />
                        {/* google mappppppppppppp ----- */}
                        <div
                            className='w-full'
                        >
                            <iframe title="this is a google map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.78135417409!2d90.377549!3d23.786907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73586a94e75%3A0xa9ef83ac46e5f7fa!2sGreen%20University%20Of%20Bangladesh%2C%20Begum%20Rokeya%20Avenue%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679001223373!5m2!1sen!2sbd"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            >
                            </iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location