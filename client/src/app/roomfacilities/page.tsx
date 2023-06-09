import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import img from '@layout/assets/roomfacilities.jpg'
import Data2 from './Data2';
import Image from 'next/image';
import Link from 'next/link';
import { roomFacilitiesData } from './../../workArea/components/roomFacilitiesData/roomFacilitiesData';

const RoomFacilities = () => {
    const datas = roomFacilitiesData;
    // const location = useLocation()
    return (
        <div className=" border-red-600 border-8">
            <Image className='h-[400px] lg:h-[673px] w-full mt-[50px] lg:mt-[150px]' src={img} alt="roomPhoto" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66] '>Room Facilities</h1>
            <div className="flex items-center ml-[23px] space-x-2 mt-[48px]">
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-all">
                    HOME
                </Link>
                <span className="text-black dark:text-white">
                    <FaGreaterThan />
                </span>
                {/* <span className="text-black dark:text-white uppercase">{location.pathname.replace('/', '')}</span> */}
            </div>
            <div className='grid grid-cols-1 mt-[59px] mb-[73px] md:grid-cols-2 lg:grid-cols-3  gap-[75px] mx-[30px] lg:ml-[96px] lg:mr-[96px]'>
                {datas.map(data => <Data2
                    key={data.id}
                    data={data}
                ></Data2>)}
            </div>
        </div>
    );
};

export default RoomFacilities;