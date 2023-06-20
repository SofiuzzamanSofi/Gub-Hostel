import { hallFacilitiesDataTypes } from '@/workArea/types/allCommonTypes';
import React from 'react';
import { hallFacilitiesData } from './hallFacilitiesData';



const HallFacilitiesDataCart: React.FC = () => {
    // const { title, para } = data

    const datas: hallFacilitiesDataTypes[] = hallFacilitiesData;

    return (
        <div className='grid grid-cols-1 mt-[59px] mb-[73px] md:grid-cols-2 lg:grid-cols-3 gap-[75px] mx-[30px] lg:ml-[96px] lg:mr-[96px]'>
            {datas.map((data, i) => <div
                key={i}
            >
                <h1 className='text-2xl text-[#35DC66] font-bold mb-[14px]'>{data?.title}</h1>
                <p className='text-xl'>{data?.para}</p>
            </div>
            )}
        </div>
    )

};

export default HallFacilitiesDataCart;