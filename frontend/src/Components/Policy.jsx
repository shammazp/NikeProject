import React from 'react'
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const Policy = () => {
  return (

    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div>
            <FaExchangeAlt style={{fontSize:"24px"}} className='w-20 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer Hassle-Free Exchange Policy</p>
        </div>

        <div>
            <MdOutlineVerified style={{fontSize:"24px"}} className='w-20 m-auto mb-5'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We Provide 7 Days Free Return Policy</p>
        </div>

        <div>
            <RiCustomerService2Line style={{fontSize:"24px"}} className='w-20 m-auto mb-5'/>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We Provide 24x7 Customer Support</p>
        </div>

    </div>
  )
}

export default Policy