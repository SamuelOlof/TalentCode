import React from 'react';
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-blue-900 flex flex-col items-center text-white text-center md:text-left'>
            <div className='flex flex-col md:flex-row w-11/12 sm:w-10/12 justify-between mt-16' >
                {/* company name */}
                <div className='md:w-52 '>
                    <a className="flex justify-center" href="/">
                        <img className="h-48" src='./images/logo-02.svg' alt="Talentcode_logo" />
                    </a>
                </div>

                {/* list items */}
                <div className='md:w-52' >
                    <ul>
                        <li className='mb-3'>
                            <a href='/'>
                                Home
                            </a>
                        </li>

                        <li className='mb-3'>
                            <a href='/about'>
                                About Us
                            </a>
                        </li>

                        <li className='mb-3'>
                            <a href='/services'>
                                Our Services
                            </a>
                        </li>

                        <li className='mb-3'>
                            <a href='/contact'>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* newsletter */}
                <div className='md:w-52 mt-8 md:mt-0 flex flex-col items-center' >
                    <div className='w-52'>
                        <h1 className='mb-3'>Email</h1>
                        <input className='px-2 py-1 rounded-md border-2 border-blue-600 bg-blue-900 block focus:outline-none w-52' type="email" name="mail" placeholder='your email here' />
                        <button className='mt-3 px-6 py-1 bg-blue-600 text-white rounded  hover:bg-blue-700 transition focus:outline-none' type="submit">Subscribe</button>
                        </div>
                </div>
            </div>

            {/* contact section */}
            <div className='flex flex-col md:flex-row w-11/12 sm:w-10/12 justify-between mt-8 mb-16'>
                <div className='md:w-52 '>
                    <h1 className='mb-3 md:mb-0'>Contact</h1>
                    <p>Email- <a href="mailto:info@talentcode.com"> info@talentcode.com</a>
                    {/* social icons */}
                    <div className='flex justify-center md:justify-start mt-2 '>
                        <a href="http://twitter.com">
                            <IoLogoTwitter className='mr-4'/>
                        </a>
                        <a href="http://instagram.com">
                            <IoLogoInstagram className='mr-4'/>
                        </a>
                        <a href="http://facebook.com" >
                            <IoLogoFacebook className='mr-4'/>
                        </a>
                    </div>
                    </p>
                </div>

                <div className='md:w-52 mt-2  md:mt-6'>
                    +234 706 957 6677
                </div>

                <div className='md:w-52 mt-2 md:mt-6'>
                    Alpha beach road, Lekki, Lagos.
                </div>
            </div>
        </div>
    )
}

export default Footer
