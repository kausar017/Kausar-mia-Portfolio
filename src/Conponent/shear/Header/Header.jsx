import { useEffect, useState } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
import { IoMdContact, IoMdHome, IoMdInformationCircle } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme === 'dark' : true
    })

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [isDarkMode])

    return (
        <div className='bg-base-300 text-base-content sticky top-0 z-50 box-shadow-lg'>
            <div className="navbar w-full max-w-[1200px] mx-auto px-3 py-2 sm:px-5 sm:py-4">
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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-200 text-base-content">
                            <li><a>Home</a></li>
                            <li><a>Service</a></li>
                            <li><a>About me</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                    <a className="shrink-0 text-xl text-[#f03613]"><img className='w-20 sm:w-24' src="https://i.postimg.cc/SxrqzBBZ/download.png" alt="kauser" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 text-md text-base-content font-semibold">
                        <li className='hover:text-[#ed2519]'><a href='#hero'><IoMdHome />Home</a></li>
                        <li className='hover:text-[#ed2519]'><a href='#service'><IoSettingsSharp />Service</a></li>
                        <li className='hover:text-[#ed2519]'><a href='#about'><IoMdInformationCircle />About me</a></li>
                        <li className='hover:text-[#ed2519]'><a href='#portfolio'><AiFillProject />Portfolio</a></li>
                        <li className='hover:text-[#ed2519]'><a href='#contact'><IoMdContact/>Contact me</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-2 sm:gap-4">
                    <div>
                        <input
                            type="checkbox"
                            className="toggle toggle-error"
                            checked={isDarkMode}
                            onChange={(event) => setIsDarkMode(event.target.checked)}
                            aria-label="Toggle dark mode"
                        />
                    </div>
                    <a href="#contact" className="btn btn-sm border-none bg-[#ed2519] px-3 text-sm text-white hover:bg-white hover:text-black sm:px-6 sm:py-5">Hire Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header