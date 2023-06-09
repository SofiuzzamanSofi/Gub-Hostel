import React from 'react';
import img from '@layout/assets/roomfacilities.jpg'
import Image from 'next/image';


import RoomFacilitiesDataCart from '@/workArea/components/roomFacilitiesData/roomFacilitiesDataCart';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';

const RoomFacilities = () => {

    // const location = useLocation()
    return (
        <div className='my-12'>
            <Image className='h-[400px] lg:h-[673px] w-full' src={img} alt="roomPhoto" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66] '>
                Room Facilities
            </h1>

            <div className="mx-[30px] lg:ml-[96px] lg:mr-[96px]">

                <CommonHomeButton />
            </div>

            <RoomFacilitiesDataCart />
        </div>
    );
};

export default RoomFacilities;