"use client"

import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import hallFacilitiesImage from '@layout/assets/hallfacilities.jpg'
import HallFacilitiesDataCart from '@/workArea/components/hallFacilitiesData/hallFacilitiesDataCart';
import CommonHomeButton from '@/workArea/components/CommonHomeButton/CommonHomeButton';



const HallFacilities = () => {

    const pathname = usePathname() ?? '';
    const pathNameTotalArray = pathname.split("/")
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "").map((name) => name.replace("-", " "));



    return (
        <div className='my-12'>
            <Image className='lg:h-[673px] h-[400px] w-full ' src={hallFacilitiesImage} alt="" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66]'>hall facilities</h1>




            <div className="mx-[30px] lg:ml-[96px] lg:mr-[96px]">
                <CommonHomeButton pathNameArray={pathNameArray} />
            </div>


            <HallFacilitiesDataCart />

        </div>
    );
};

export default HallFacilities;