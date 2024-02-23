import React from 'react';
import facebook from '../../assets/icons/facebook.svg'

const Footer = () => {
    return (
        <footer className='bg-black w-full sm:h-[498px] h-max flex justify-center items-center'>
            <div className='sm:m-20 m-5 w-full text-[#CECECE]'>
                <div className='flex sm:justify-around sm:items-start sm:flex-row justify-around items-center flex-col'>
                    {/* left section */}
                    <div className='flex justify-center sm:items-start items-center flex-col gap-5'>
                        <h1 className='text-f24 font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500'>NetWorkStranger</h1>
                        <div className='w-[277px] sm:text-navfontsize text-f12 sm:text-start text-center'>
                            Experience genuine connections tailored to your ambitions. Engage in real, unscripted conversations with industry peers. Find mentors, collaborators, and friends who inspire you.
                        </div>

                        {/* icons  */}
                        <div className='w-[220px] flex justify-around items-center'>
                            <div className='group w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center hover:bg-gradient-to-r from-blue-600 to-sky-500'>
                                <svg className="group-hover:fill-white" fill="#3F5EFB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
                                    <path className="hover:fill-url(`#grad2`)" d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" /></svg>
                            </div>
                            <div className='group w-[44px] h-[44px] rounded-full bg-white hover:bg-gradient-to-r from-blue-600 to-sky-500 flex justify-center items-center'>
                                <svg className="group-hover:fill-white" fill="#3F5EFB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                                    <path className="group-hover:fill-white" fill="#3F5EFB" d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
                            </div>
                            <div className='group w-[44px] h-[44px] rounded-full bg-white hover:bg-gradient-to-r from-blue-600 to-sky-500 flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                                    <path className="group-hover:fill-white" fill="#3F5EFB" d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" /></svg>
                            </div>
                            <div className='group w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center hover:bg-gradient-to-r from-blue-600 to-sky-500 hover:fill-'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                                    <path className="group-hover:fill-white" fill="#3F5EFB" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* right section */}
                    <div className='flex sm:justify-around sm:items-start w-full h-[290px] sm:p-0 p-5'>
                        {/* about us */}
                        <div className="h-full">
                            <h1 className='sm:text-f24 font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 text-footerfont'>About Us</h1>
                            <ul className='[&>*]:mt-4 h-full sm:text-navfontsize'>
                                <li className='hover:underline'>Company Overview</li>
                                <li className='hover:underline'>Key Features</li>
                                <li className='hover:underline'>Our Team</li>
                                <li className='hover:underline'>Careers</li>
                                <li className='hover:underline'>Your Guide</li>
                            </ul>
                        </div>
                        {/* Resources */}
                        <div className="h-full">
                            <h1 className='sm:text-f24 font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500'>Resources</h1>
                            <ul className='[&>*]:mt-4 h-full sm:text-navfontsize'>
                                <li className='hover:underline'>Membership Plans</li>
                                <li className='hover:underline'>Blogs</li>
                                <li className='hover:underline'>Latest News</li>
                            </ul>
                        </div>
                        {/* support  */}
                        <div className="h-full">
                            <h1 className='sm:text-f24 font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500'>Support</h1>
                            <ul className='[&>*]:mt-4 hover:[&>*]:underline h-full sm:text-navfontsize'>
                                <li className='hover:underline'>FAQ's</li>
                                <li className='hover:underline'>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* line   */}
                <div className="h-[3px] w-full mt-10 bg-gradient-to-r from-[#000] from-1% via-blue-600 via-[percentage:50%] to-[#000]"></div>
                {/* copyright info */}
                <div className='flex gap-[8px] justify-center items-center mt-5 sm:flex-row flex-col'>
                    <div className='flex items-center gap-[8px]'>
                        <h1 className='sm:text-navfontsize text-f12 font-masterbold text-white'>NetWorkStranger</h1>
                        <p className='sm:text-footerfont text-[10px]'>Copyright &#169; 2023 All Rights Reserved</p>
                    </div>
                    <div className='flex gap-[8px] sm:text-footerfont text-[10px]'>
                        <ul className="[&>*]:m-2 list-disc flex justify-center items-center sm:flex-nowrap flex-wrap gap-[8px]">
                            <li>Use Agreement</li>
                            <li>Terms &amp; Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Community Guidelines</li>
                            <li>Cookie Policy</li>
                            <li>Copyright Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;