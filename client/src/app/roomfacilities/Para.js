import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';

const Para = ({ p }) => {
    return (
        <div>
            <p className='text-xl'><FaGreaterThan className='text-sm mr-[10px] inline' />{p}</p>
        </div>
    );
};

export default Para;