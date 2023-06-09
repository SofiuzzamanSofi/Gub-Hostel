import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import img from '@layout/assets/roomfacilities.jpg'
import Image from 'next/image';
import Link from 'next/link';

import RoomFacilitiesDataCart from '@/workArea/components/roomFacilitiesData/roomFacilitiesDataCart';

const RoomFacilities = () => {

    // const location = useLocation()
    return (
        <div className="">
            <Image className='h-[400px] lg:h-[673px] w-full mt-[50px] lg:mt-[150px]' src={img} alt="roomPhoto" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66] '>
                Room Facilities
            </h1>
            <div className="flex items-center ml-[23px] space-x-2 mt-[48px]">
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-all">
                    HOME
                </Link>
                <span className="text-black dark:text-white">
                    <FaGreaterThan />
                </span>
                {/* <span className="text-black dark:text-white uppercase">{location.pathname.replace('/', '')}</span> */}
            </div>

            <RoomFacilitiesDataCart />
        </div>
    );
};

export default RoomFacilities;