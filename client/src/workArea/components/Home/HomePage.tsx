import React from 'react';
import Body from './Body';
import HomeImage from './HomeImage';
import CommonButton from '../CommonButton/CommonButton';


const HomePage: React.FC = () => {

    return (
        <div className=''>
            <HomeImage />
            <Body></Body>

            <CommonButton buttonText="Apply Now" />
        </div>
    );
};

export default HomePage;