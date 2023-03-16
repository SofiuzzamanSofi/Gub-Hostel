import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/green-university.png'
const Navbar = () => {
    const menuList = <>
        <li className='lg:ml-[147px] hidden lg:inline font-semibold'><div className="dropdown dropdown-hover">
            <label tabIndex={0} className="hover:text-green-400">FACILITIES</label>
            <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box mt-[210px] w-52">
                <li className='my-2'><Link>ROOM FACILITIES</Link></li>
                <li className='my-2'><Link>HALL FACILITIES</Link></li>
            </ul>
        </div></li>
        <li className='lg:ml-[147px] hover:text-green-400 font-semibold'><Link to=''>ADMISSION</Link></li>
        <li className='lg:ml-[147px] font-semibold hover:text-green-400'><Link to=''>LOCATION</Link></li>
        <li className='lg:ml-[147px] font-semibold hover:text-green-400'><Link to=''>FAQ</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 lg:pl-12 lg:pr-[75px] mt-[28px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuList}
                        </ul>
                    </div>
                    <img className='w-[75px] lg:w-[227px] h-[50px] lg:h-[83.99px]' src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown lg:dropdown-hover dropdown-end lg:hidden font-semibold mr-[30px]">
                        <label tabIndex={0} className="hover:text-green-400 font-semibold lg:text-xl ">FACILITIES</label>
                        <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-52">
                            <li className='my-2 lg:text-xl'><Link>ROOM FACILITIES</Link></li>
                            <li className='my-2 lg:text-xl'><Link>HALL FACILITIES</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">

                        <label tabIndex={0} className="  font-semibold lg:text-xl hover:text-green-400">Portal</label>
                        <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52">
                            <Link><li className='my-2 text-center hover:text-green-400'>LOGIN</li></Link>
                            <Link><li className='my-2 text-center hover:text-green-400'>SIGNUP</li></Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;