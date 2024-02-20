import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    return (
        <nav className='flex justify-around items-center w-full p-navspacing'>
            <h1 className='text-navfontsize font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600'>NetWorkStranger</h1>
            <div className='flex justify-between items-center w-3/4 text-navfontsize shadow-md rounded-navradius border-2 p-navpadding text-neutral-500'>
                <ul className='flex between items-center w-full gap-4'>
                    <li><div className="group relative">
                        <a href="#" className="px-3 py-2">About Us <FontAwesomeIcon icon={faAngleDown} /></a>
                        <div className="hidden group-hover:block absolute z-10 bg-gray-200 text-[#555555] mt-2 p-2 rounded-md opacity-70">
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
                <div className='flex gap-4 '>
                    <button className='p-btnpadding border-2 rounded-btnradius w-[99px] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 relative'>Login</button>
                    <button className='w-[211px] p-btnpadding rounded-btnradius bg-gradient-to-r from-sky-500 to-blue-600 text-white'>Get Started for Free</button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
