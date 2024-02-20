import React from 'react';

const NavigationBar = () => {
    return (
        <nav className='flex justify-around items-center w-full p-navspacing'>
            <h1 className='text-navfontsize font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600'>NetWorkStranger</h1>
            <div className='flex justify-between items-center w-3/4 text-navfontsize shadow-md rounded-navradius border-2 p-navpadding text-neutral-500'>
                <ul className='flex between items-center w-full gap-4'>
                    <li>About us</li>
                    <li>Platform Usage</li>
                    <li>Membership Plans</li>
                    <li>Blogs</li>
                    <li>Support</li>
                </ul>
                {/* buttons */}
                <div className='flex gap-4'>
                    <button className='p-btnpadding border-2 rounded-btnradius w-[99px]'>Login</button>
                    <button className='w-[211px] p-btnpadding rounded-btnradius bg-gradient-to-r from-sky-500 to-blue-600 text-white'>Get Started for Free</button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;