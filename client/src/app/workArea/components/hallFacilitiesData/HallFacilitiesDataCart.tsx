import { hallFacilitiesDataTypes } from '@/workArea/types/allCommonTypes';
import React from 'react';
import { hallFacilitiesData } from './hallFacilitiesData';



const HallFacilitiesDataCart: React.FC = () => {
    // const { title, para } = data

    const datas: hallFacilitiesDataTypes[] = hallFacilitiesData;

    return (
        <div>
            {datas.map(data => <div
                key={data.id}
            >
                <h1 className='text-2xl text-[#35DC66] font-bold mb-[14px]'>{data?.title}</h1>
                <p className='text-xl'>{data?.para}</p>
            </div>
            )}
        </div>
    )

};

export default HallFacilitiesDataCart;