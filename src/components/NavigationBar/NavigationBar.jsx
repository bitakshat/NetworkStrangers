import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    return (
        <nav className='flex sm:justify-around justify-center items-center w-full p-navspacing'>
            <h1 className='sm:text-navfontsize w-max text-f12 font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500'>NetWorkStranger</h1>
            <div className='text-navfontsize sm:shadow-md rounded-navradius sm:border-2 border-0  text-[#6C6C6C] bg-gradient-to-r from-blue-600 to-sky-500'>
                <div className="flex justify-between items-center bg-white p-navinsidepadding gap-[28px] rounded-navradius m-[1px] max-[1414px]:p-[10px] max-[1369px]:gap-[2px] max-[1358px]:text-f14">
                    <ul className='sm:flex sm:justify-start sm:items-center sm:w-full sm:gap-[28px] '>
                        <li>
                            <div className="group relative">
                                <a href="#">About Us <FontAwesomeIcon icon={faAngleDown} /></a>
                                <div className="hidden group-hover:block absolute z-10 bg-gray-200 rounded-md">
                                    <a href="#" className="hover:underline block w-max h-max px-4 py-2">Link Here</a>
                                    <a href="#" className="hover:underline block px-4 py-2">Link Here</a>
                                    <a href="#" className="hover:underline block px-4 py-2">Link Here</a>
                                </div>
                            </div>
                        </li>
                        <li>Platform Usage <FontAwesomeIcon icon={faAngleDown} /></li>
                        <li>Membership Plans</li>
                        <li>Blogs</li>
                        <li>Support <FontAwesomeIcon icon={faAngleDown} /></li>
                    </ul>
                    {/* buttons */}
                    <div className='flex gap-4 justify-center items-center text-f12'>
                        <div class="p-[1px] rounded-btnradius bg-gradient-to-r from-blue-600 to-sky-500 ">
                            <button class="sm:w-[99px] sm:h-[48px] rounded-btnradius text-blue-600 sm:text-navfontsize text-[10px] bg-white ">Login</button>
                        </div>
                        <button className='sm:w-[211px] sm:h-[48px] w-[131px] sm:text-navfontsize text-[10px] sm:p-btnpadding rounded-btnradius bg-gradient-to-r from-blue-600 to-sky-500 text-white'>Get Started for Free</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
