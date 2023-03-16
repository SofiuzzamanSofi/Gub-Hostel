import React from 'react';
import headerimg from '../../assets/DSC_7898.jpg'
import Body from './Body';


const Home = () => {

    return (
        <div className=''>
            <img className='w-full h-[500px] lg:h-[900px] mt-[50px] lg:mt-[150px]' src={headerimg} alt="" />
            <Body></Body>

            <button className='btn ml-[60px] lg:ml-[555px] mt-[115px] mb-[81px] w-[253px] h-[66px] btn-ghost bg-[#E9E9E9] text-2xl'>apply now</button>
        </div>
    );
};

export default Home;