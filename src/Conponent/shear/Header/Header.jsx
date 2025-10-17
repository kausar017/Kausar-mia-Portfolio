import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
import { IoMdContact, IoMdHome, IoMdInformationCircle } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'

function Header() {
    return (
        <div className='bg-[#121212] text-primary-content sticky top-0 z-50 box-shadow-lg'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-gray-800 text-primary-content">
                            <li><a>Home</a></li>
                            <li><a>Service</a></li>
                            <li><a>About me</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                    <a className="text-xl text-[#f03613]"><img className='w-100% max-w-28' src="https://i.postimg.cc/SxrqzBBZ/download.png" alt="kauser" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 text-lg text-white font-semibold">
                        <li className='hover:text-[#ed2519]'><a href='#hero'><IoMdHome />Home</a></li>
                        <li className='hover:text-[#ed2519]'><a><IoSettingsSharp />Service</a></li>
                        <li className='hover:text-[#ed2519]'><a href='#about'><IoMdInformationCircle />About me</a></li>
                        <li className='hover:text-[#ed2519]'><a><AiFillProject />Portfolio</a></li>
                        <li className='hover:text-[#ed2519]'><a><IoMdContact/>Contact me</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 flex items-center">
                    <div>
                        <input type="checkbox" className="toggle toggle-error" defaultChecked />
                    </div>
                    <a className="btn bg-[#ed2519] px-6 py-5 text-white hover:bg-white hover:text-black border-none">Hire Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header