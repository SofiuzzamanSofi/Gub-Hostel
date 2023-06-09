import React from 'react';
import Para from './Para';

const Data2 = ({ data }) => {
    const { title, para } = data
    return (
        <div>
            <h1 className='text-2xl text-[#35DC66] font-bold mb-[14px] uppercase'>{title}</h1>
            <div>
                {
                    para?.map(p => <Para
                        key={p.id}
                        p={p}
                    ></Para>)
                }
            </div>
        </div>
    );
};

export default Data2;