import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import img from '../../../assets/roomfacilities.jpg'
import Data2 from './Data2';

const RoomFacilities = () => {
    const datas = [
        {
            'id': '01',
            'title': 'Security',
            'para': [
                'CCTV Cameras',
                ' Security Guard',
                ' 24 Hour Security',
                '(include CCTV)'
            ]
        },
        {
            'id': '02',
            'title': 'In-room Amenities',
            'para': [
                'One Bed per Student shall',
                'be offered',
                'One Bed per Student shall be offered Fully furnished rooms with',
                'beds & underbed drawers',
                ' Study tables & Chair',
                'Tube lights & LED, Fan',
                ' Dustbin in each room'
            ]

        },
        {
            'id': '03',
            'title': 'Self Help Amenities',
            'para': [

                'Laundry Service',
                'Filter Water facility to be provided',
                'Medical facility available',
                'with first aid/ provided to',
                'sick Residents',
                'Dinning area'
            ]

        },
        {
            'id': '04',
            'title': 'Entertainment',
            'para': [
                'Mini lounge area with ',
                'sitting arrangement',
                'Common TV',
                ' Indoor games like carrom ,',
                ' chess, table tennis etc.'
            ]

        },
        {
            'id': '05',
            'title': 'Electricity',
            'para': [
                'Electricity Facility in each room',
                'Generator facility 24/7'
            ]

        },
        {
            'id': '06',
            'title': 'Broadband & WiFi',
            'para': [
                'High speed internet for',
                'each students'

            ]

        },
    ]
    const location = useLocation()
    return (
        <div>
            <img className='h-[400px] lg:h-[673px] w-full mt-[50px] lg:mt-[150px]' src={img} alt="roomPhoto" />
            <h1 className='uppercase text-center text-[40px] mt-[48px] font-extrabold text-[#35DC66]'>hall facilities</h1>
            <div className="flex items-center ml-[23px] space-x-2 mt-[48px]">
                <Link to="/" className="text-blue-400 hover:text-blue-300 transition-all">
                    HOME
                </Link>
                <span className="text-black dark:text-white">
                    <FaGreaterThan />
                </span>
                <span className="text-black dark:text-white uppercase">{location.pathname.replace('/', '')}</span>
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