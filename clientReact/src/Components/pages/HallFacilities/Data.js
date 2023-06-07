import React from 'react';

const Data = ({ data }) => {
    const { title, para } = data
    return (
        <div>
            <h1 className='text-2xl text-[#35DC66] font-bold mb-[14px]'>{title}</h1>
            <p className='text-xl'>{para}</p>
        </div>
    );
};

export default Data;