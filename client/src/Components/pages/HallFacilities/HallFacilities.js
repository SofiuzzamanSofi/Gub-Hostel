import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import img from '../../../assets/hallfacilities.jpg'
import Data from './Data';

const HallFacilities = () => {
    const location = useLocation()
    const datas = [
        {
            'id': '01',
            'title': 'Smart Living Scope',
            'para': 'Students at Hall will have access to the Library, the same community, stay closer to the faculty and students. So our research says they usually get higher grades than others.'
        },
        {
            'id': '02',
            'title': 'Cost-Effective Living Option',
            'para': 'Living in a Hall saves the cost if you compare it with other living options. You will find all services together in the single Hall cost. Make your life easy.'
        },
        {
            'id': '03',
            'title': 'Safety & Security',
            'para': 'The safety of the students is the best priority. We have CCTV surveillance, 24/7 staff for any support and services.'
        },
        {
            'id': '04',
            'title': 'Close to the Class',
            'para': 'If you are planning to live in Hall then you are just 10 minutes away from your class, close to your library to study, Green Garden or Hall Dining, Sports Zone with friends.'
        },
        {
            'id': '05',
            'title': 'Leadership Development',
            'para': 'When you are living in the Hall you are automatically developing your lifesty le, getting involved in the community which helps in developing the leadership capacity.'
        },
        {
            'id': '06',
            'title': 'Enjoying the Wireless Life',
            'para': 'In your hall life, you will enjoy the Cable TV and WIFI Connections. So you can enjoy the Wireless Life at the Hall, Lab, and Library Compound.'
        }

    ];

    return (
        <div>
            <img className='lg:h-[673px] h-[400px] mt-[50px] lg:mt-[150px] w-full' src={img} alt="" />
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
                {
                    datas.map(data => <Data
                        key={data.id}
                        data={data}
                    ></Data>)
                }
            </div>
        </div>
    );
};

export default HallFacilities;