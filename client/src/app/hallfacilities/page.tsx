import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import hallFacilitiesImage from '@layout/assets/hallfacilities.jpg'
import Link from 'next/link';
import Image from 'next/image';
import HallFacilitiesDataCart from '@/workArea/components/hallFacilitiesData/hallFacilitiesDataCart';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';





// import { Link, useLocation } from 'react-router-dom';

// import { hallFacilitiesDataTypes } from './../../workArea/types/allCommonTypes';
// import { hallFacilitiesData } from '@/workArea/components/hallFacilitiesData/hallFacilitiesData';










const HallFacilities = () => {
    // const location = useLocation()

    // const datas: hallFacilitiesDataTypes[] = hallFacilitiesData;

    return (
        <div className='my-12'>
            <Image className='lg:h-[673px] h-[400px] w-full ' src={hallFacilitiesImage} alt="" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66]'>hall facilities</h1>




            <div className="mx-[30px] lg:ml-[96px] lg:mr-[96px]">

                <CommonHomeButton />
            </div>


            <HallFacilitiesDataCart />

        </div>
    );
};

export default HallFacilities;