import React from 'react';
import img1 from '../../assets/boy-walkingalone.jpg'
import img2 from '../../assets/hallwithchairtable.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';



const Body: React.FC = () => {
    return (
        <div>
            <div className="hero bg-transparent lg:h-[499px] mt-[50px]">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={img1} className="lg:w-[541px] lg:h-[353px] rounded-lg shadow-2xl" alt='boy walking' />
                    <div className='lg:ml-[65px] lg:px-[82px]'>
                        <h1 className='text-[40px] font-extrabold text-[#35DC66] uppercase'>gub student hall</h1>
                        <ul>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight> Safe & Secure</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  Cost-Effective Living Option</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  Fully Furnished Rooms</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight> Broadband & Wifi</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  Housekeeping</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  In Campus</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  Medical Facility</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* another hero section  */}

            <div className="hero bg-transparent lg:h-[499px] mt-[50px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={img2} className=" lg:w-[541px] lg:h-[353px] rounded-lg shadow-2xl" alt='boy walking' />
                    <div className=''>
                        <h1 className='text-[40px] font-extrabold text-[#35DC66] uppercase'>facilities</h1>
                        <ul className=' lg:mr-[120px]'>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight> In Room Amenities</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>   Self Help Amenities</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  Cost-Effective Living Option</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight> Electricity & Internet</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight>  Housekeeping</li>
                            <li className='text-[24px] font-semibold'> <MdKeyboardArrowRight className='inline'></MdKeyboardArrowRight> Entertainment</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;