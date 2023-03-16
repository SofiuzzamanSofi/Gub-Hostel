import React from 'react';
import Sofi from '../../Components/Home/Sofi';

const Subfooter = () => {
    return (
        <div>
            <footer className="footer h-[93px] footer-center p-4 bg-[#0C1037] text-white">
                <div>
                    <p>Copyright © 2003-2022 <a href=""><span className='text-[#22B24C]'>Green University of Bangladesh</span></a> || All rights reserved.</p>
                </div>
            </footer>
            <Sofi></Sofi>
        </div>
    );
};

export default Subfooter;