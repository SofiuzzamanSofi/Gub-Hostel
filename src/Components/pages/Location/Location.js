import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeImage from '../../Home/HomeImage';
import { FaGreaterThan } from 'react-icons/fa';
import maps from '../../../assets/maps.png';

function Location() {
    const location = useLocation();

    return (
        <div>
            <HomeImage />

            <div className='my-2'>
                <div className="container mx-auto">
                    <div className="py-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-[#35DC66] uppercase">
                                Location
                            </h1>
                        </div>

                        <div className="px-8 py-4 flex items-center justify-between pt-12 pb-6">
                            <div className="flex items-center space-x-2">
                                <Link to="/" className="text-blue-400 hover:text-blue-300 transition-all">
                                    HOME
                                </Link>
                                <span className="text-black dark:text-white">
                                    <FaGreaterThan />
                                </span>
                                <span className="text-black dark:text-white uppercase">{location.pathname.replace('/', '')}</span>
                            </div>
                        </div>



                        <div>
                            <div>
                                <h1 className='text-3xl font-semibold text-black dark:text-white pt-20 pb-12 '>Google Maps</h1>
                            </div>
                            <div className='flex flex-col md:flex-row gap-0'>
                                <img src={maps} alt="Green University on Google Maps" className="" />
                                <iframe
                                    title="Green University on Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.78135417409!2d90.377549!3d23.786907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73586a94e75%3A0xa9ef83ac46e5f7fa!2sGreen%20University%20Of%20Bangladesh%2C%20Begum%20Rokeya%20Avenue%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679001223373!5m2!1sen!2sbd"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-auto min-h-[360px] "
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Location;











// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';




// function Location() {

//     const location = useLocation();




//     return (
//         <div className="bg-gray-900 text-white">
//             <div className="px-8 py-6">
//                 <h1 className="text-3xl font-bold mb-4">LOCATION</h1>
//             </div>
//             <div className="px-8 py-4 flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                     <Link to="/" className="text-blue-400 hover:text-blue-300 transition-all">
//                         HOME
//                     </Link>
//                     <span>&gt;</span>
//                     <span className=" uppercase">{location.pathname.replace('/', '')}</span>
//                 </div>
//             </div>
//             <div className="px-8 py-6 bg-white text-gray-900">
//                 <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 mb-8">
//                     <img src={maps} alt="Green University on Google Maps" className="w-1/4" />
//                     <div className="w-full md:w-3/4">
//                         <iframe
//                             title="Green University on Google Maps"
//                             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.78135417409!2d90.377549!3d23.786907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73586a94e75%3A0xa9ef83ac46e5f7fa!2sGreen%20University%20Of%20Bangladesh%2C%20Begum%20Rokeya%20Avenue%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679001223373!5m2!1sen!2sbd"
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                             className="w-full h-auto md:min-h-[290px]"
//                             style={{ height: '100%', width: '100%' }}
//                         ></iframe>
//                     </div>
//                 </div>

//                 <div className="text-center">
//                     <p className="text-lg font-semibold mb-2">Green University of Bangladesh</p>
//                     <p className="mb-2">
//                         Begum Rokeya Avenue, Dhaka - 1207, Bangladesh <br />
//                         Phone: +880-2-9143361-5, +880-2-58157091-4 <br />
//                         Email: info@green.edu.bd
//                     </p>
//                     <p>Open 24 hours</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Location;
