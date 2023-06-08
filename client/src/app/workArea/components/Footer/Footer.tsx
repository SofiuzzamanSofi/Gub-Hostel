


import React from 'react';
import logo from '../../assets/footerlogo1.png'
import logo2 from '../../assets/footerlogo2.jpg'
import logo3 from '../../assets/footerlogo3.jpg'
import logo4 from '../../assets/footerlogo4.jpg'
import logo5 from '../../assets/footerlogo5.jpg'
import logo6 from '../../assets/footerlogo6.jpg'
import logo7 from '../../assets/footerlogo7.jpg'
import logo8 from '../../assets/footerlogo8.jpg'
import logo9 from '../../assets/footerlogo9.jpg'
import logo10 from '../../assets/footerlogo10.jpg'
import Subfooter from './Subfooter';
import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {

    return (
        <div>
            <footer className="footer lg:h-[462px] py-[30px] px-[10px] lg:py-[60px] lg:pl-[35px] bg-black text-white">
                <div>
                    <span className="footer-title text-white">ACADEMIC COLLABORATION & INSTITUTIONAL MEMBERSHIPS</span>
                    <div className='grid grid-cols-2 gap-5'>
                        <Image className='w-[288.55px] h-[49.47px]' src={logo} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo2} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo3} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo4} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo5} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo6} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo7} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo8} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo9} alt="" />
                        <Image className='w-[288.55px] h-[49.47px]' src={logo10} alt="" />
                    </div>
                </div>

                <div className='w-[267px] h-[333px]'>
                    <span className="footer-title text-white">quick contact</span>
                    <Link className="link link-hover font-thin" href={''}>Main Campus:  <br />220/D, Begum Rokeya Sarani (300 meter North Side of IDB Bhaban), Dhaka -1207, Bangladesh</Link>
                    <Link className="link link-hover font-thin" href={''}>Phone: 90104725, 8031031, 8060116 Cell: 01324713502, 01324713503, 01324713504, 01324713505, 01324713506</Link>
                    <Link className="link link-hover font-thin" href={''}>Cell: 01324713502, 01324713503, 01324713504, 01324713505, 01324713506 </Link>
                    <Link className="link link-hover font-thin" href={''}>Permanent campus: <br />
                        Purbachal American City (Kanchon, Rupgonj).</Link>
                    <Link className="link link-hover font-thin" href={''}>Cell: 01324713507, 01324713508</Link>
                    <p className="link link-hover font-thin">Email: <a href="" className='text-[#22B24C]'>admission@green.edu.bd</a></p>
                </div>
                <div>
                    <span className="footer-title text-white">connect with us</span>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <span className=''>|</span>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <span className=''>|</span>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
            <Subfooter></Subfooter>
        </div>
    );
};

export default Footer;