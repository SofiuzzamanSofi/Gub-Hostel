import React from 'react';
import { roomFacilitiesData } from './roomFacilitiesData';
import { FaGreaterThan } from 'react-icons/fa';
import { RoomFacilitiesDataTypes } from '@/workArea/types/allCommonTypes';



const RoomFacilitiesDataCart: React.FC = () => {
    const datas: RoomFacilitiesDataTypes[] = roomFacilitiesData;

    return (
        <div className='grid grid-cols-1 mt-[59px] mb-[73px] md:grid-cols-2 lg:grid-cols-3 gap-[75px] mx-[30px] lg:ml-[96px] lg:mr-[96px]'>
            {datas?.map((data, i) => (
                <div key={i}>
                    <h1 className='text-2xl text-[#35DC66] font-bold mb-[14px] uppercase'>{data.title}</h1>
                    <div>
                        {data.para.map((p, i) => (
                            <div key={i}>
                                <p className='text-xl'>
                                    <FaGreaterThan className='text-sm mr-[10px] inline' />
                                    {p}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoomFacilitiesDataCart;
