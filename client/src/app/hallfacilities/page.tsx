import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import hallFacilitiesImage from '@layout/assets/hallfacilities.jpg'
import Link from 'next/link';
import Image from 'next/image';



// import { Link, useLocation } from 'react-router-dom';
import hallFacilitiesDataCart from './../../workArea/components/hallFacilitiesData/hallFacilitiesDataCart';






const HallFacilities = () => {
    // const location = useLocation()


    return (
        <div>
            <Image className='lg:h-[673px] h-[400px] mt-[50px] lg:mt-[150px] w-full' src={hallFacilitiesImage} alt="" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66]'>hall facilities</h1>
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
                {/* {
                    datas.map(data => <hallFacilitiesDataCart
                        key={data.id}
                        data={data}
                    />)
                } */}
                <hallFacilitiesDataCart />
            </div>
        </div>
    );
};

export default HallFacilities;