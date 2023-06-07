import React from 'react';
import Body from './Body';
import HomeImage from './HomeImage';


const HomePage: React.FC = () => {

    return (
        <div className=''>
            <HomeImage />
            <Body></Body>

            <button className='btn ml-[60px] lg:ml-[555px] mt-[115px] mb-[81px] w-[253px] h-[66px] btn-ghost bg-[#E9E9E9] text-2xl'>apply now</button>
        </div>
    );
};

export default HomePage;