import React from 'react'
import headerimg from '@layout/assets/DSC_7898.jpg'
import Image from 'next/image'



const HomeImage: React.FC = () => {
    return (
        <div>
            <Image className='w-full h-[500px] lg:h-[900px] mt-[50px] lg:mt-[150px]' src={headerimg} alt="" />
        </div>
    )
}

export default HomeImage