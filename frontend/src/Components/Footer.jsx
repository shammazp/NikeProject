import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <h1 style={{ fontSize: "25px" }}>━ 𝓝𝓲𝓴𝓮 ━</h1>
                    <p className='w-full md:w-2/3 text-gray-600 mt-5'>Nike is a global leader in athletic footwear, apparel, and equipment, offering innovative products that enhance performance and inspire athletes around the world. With a commitment to sustainability, Nike pushes the boundaries of design, technology, and community impact.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
                        <li className='mb-2'>Home</li>
                        <li className='mb-2'>About Us</li>
                        <li className='mb-2'>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>KEEP IN TOUCH</p>
                    <ul className='flex gap-1 text-gray-600'>
                        <li className='mr-3'><FaInstagram style={{ fontSize: "26px", cursor: "pointer" }} /></li>
                        <li className='mr-3' ><AiOutlineYoutube style={{ fontSize: "26px", cursor: "pointer" }} /></li>
                        <li className='mr-3'><CiFacebook style={{ fontSize: "26px", cursor: "pointer" }} /></li>
                        <li><RiTwitterXFill style={{ fontSize: "26px", cursor: "pointer" }} /></li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyrights © 2024 Nike - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer