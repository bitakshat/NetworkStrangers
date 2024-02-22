import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    return (
        <nav className='flex sm:justify-around justify-center items-center w-full p-navspacing'>
            <h1 className='sm:text-navfontsize text-f12 font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600'>NetWorkStranger</h1>
            <div className='flex justify-between items-center sm:w-3/4 w-full text-navfontsize sm:shadow-md rounded-navradius sm:border-2 border-0 p-navpadding text-neutral-500 '>
                <ul className='sm:flex sm:justify-start sm:items-center sm:w-full sm:gap-4 hidden'>
                    <li><div className="group relative">
                        <a href="#" className="px-3 py-2">About Us <FontAwesomeIcon icon={faAngleDown} /></a>
                        <div className="hidden group-hover:block absolute z-10 bg-gray-200 text-[#555555] mt-2 p-2 rounded-md">
                            <a href="#" className="block w-max h-max px-4 py-2">Some Link One</a>
                            <a href="#" className="block px-4 py-2">Some Link One</a>
                            <a href="#" className="block px-4 py-2">Some Link One</a>
                        </div>
                    </div></li>
                    <li>Platform Usage <FontAwesomeIcon icon={faAngleDown} /></li>
                    <li>Membership Plans</li>
                    <li>Blogs</li>
                    <li>Support <FontAwesomeIcon icon={faAngleDown} /></li>
                </ul>
                {/* buttons */}
                <div className='flex gap-4 justify-center items-center text-f12'>
                    <button className='p-btnpadding border-2 sm:text-navfontsize text-[10px] rounded-btnradius  text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 relative '>Login</button>
                    <button className='sm:w-[211px] w-[131px] sm:text-navfontsize text-[10px] sm:p-btnpadding rounded-btnradius bg-gradient-to-r from-sky-500 to-blue-600 text-white'>Get Started for Free</button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
