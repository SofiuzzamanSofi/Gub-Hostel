import React from 'react'
import headerimg from '../../assets/DSC_7898.jpg'



function HomeImage() {
    return (
        <div>
            <img className='w-full h-[500px] lg:h-[900px] mt-[50px] lg:mt-[150px]' src={headerimg} alt="" />
        </div>
    )
}

export default HomeImage