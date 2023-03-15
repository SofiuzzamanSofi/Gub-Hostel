import React from 'react';
import img1 from '../../assets/boy-walkingalone.jpg'
import img2 from '../../assets/hallwithchairtable.jpg'
import { IconName, MdKeyboardArrowRight } from "react-icons/md";
const Body = () => {
    return (
        <div>
            <div className="hero bg-transparent lg:h-[499px] mt-[50px]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="w-[541px] h-[353px] rounded-lg shadow-2xl" alt='boy walking' />
                    <div className='ml-[65px] px-[82px]'>
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
                    <img src={img2} className="w-[541px] h-[353px] rounded-lg shadow-2xl" alt='boy walking' />
                    <div className=''>
                        <h1 className='text-[40px] font-extrabold text-[#35DC66] uppercase'>facilities</h1>
                        <ul className=' mr-[120px]'>
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