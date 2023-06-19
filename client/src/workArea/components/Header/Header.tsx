"use client"

import React from 'react';
import logo from '../../assets/green-university.png';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Header: React.FC = () => {
    const { data: session } = useSession();

    console.log("session:", session)

    const menuList = (
        <>
            <li className='hidden lg:inline font-semibold'>
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="">FACILITIES</label>
                    <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box mt-44 w-52">
                        <li className='my-2'><Link href='/room-facilities'>ROOM FACILITIES</Link></li>
                        <li className='my-2'><Link href='/hall-facilities'>HALL FACILITIES</Link></li>
                    </ul>
                </div>
            </li>
            <li className='font-semibold'><Link href='/admission'>ADMISSION</Link></li>
            <li className='font-semibold'><Link href='/location'>LOCATION</Link></li>
            <li className='font-semibold'><Link href='/faq'>FAQ</Link></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuList}
                        </ul>
                    </div>
                    <Link href="/">
                        <Image className='w-[75px] lg:w-[227px] h-[50px] lg:h-[83.99px]' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end pr-2">
                    <div className="dropdown lg:dropdown-hover dropdown-end lg:hidden font-semibold mr-[30px]">
                        <label tabIndex={0} className="hover:text-green-400 font-semibold lg:text-xl ">FACILITIES</label>
                        <ul tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-52">
                            <li className='my-2 lg:text-xl'><Link href='/room-facilities'>ROOM FACILITIES</Link></li>
                            <li className='my-2 lg:text-xl'><Link href='/hall-facilities'>HALL FACILITIES</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        {session ? (
                            <>
                                <label tabIndex={0} className="  font-semibold lg:text-xl hover:text-green-400">
                                    <span className='bordar p-4 bg-green-500 hover:bg-green-600 rounded-md text-white'>Active</span>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52">
                                    <Link href="/sign-in"><li className='my-2 text-center hover:text-green-400'>SIGN IN</li></Link>
                                    <Link href="/sign-up"><li className='my-2 text-center hover:text-green-400'>SIGN UP</li></Link>
                                </ul>
                            </>
                        ) : (
                            <>
                                <label tabIndex={0} className="  font-semibold lg:text-xl hover:text-green-400">
                                    <span className='bordar p-4 bg-green-500 hover:bg-green-600 rounded-md text-white'>PORTAL</span>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52">
                                    <Link href="/sign-in"><li className='my-2 text-center hover:text-green-400'>SIGN IN</li></Link>
                                    <Link href="/sign-up"><li className='my-2 text-center hover:text-green-400'>SIGN UP</li></Link>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

