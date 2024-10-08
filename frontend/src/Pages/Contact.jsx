import React from 'react'
import Title from "../Components/Title"
import NewsLetter from "../Components/NewsLetter.jsx"
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:w-[600px]' src="https://res.cloudinary.com/dmubfrefi/image/private/s--y0Ax_FO6--/c_crop,h_2813,w_5000,x_0,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs" alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500 cursor-pointer'><CiLocationOn style={{fontSize:"24px"}} className='inline mr-3 text-black'/>Malappuram, Kerala</p>
          <p className='text-gray-500 cursor-pointer'><IoCallOutline style={{fontSize:"24px"}} className='inline mr-3 text-black'/>+91 8714535257</p>
          <p className='text-gray-500 cursor-pointer'><FiMail style={{fontSize:"24px"}} className='inline mr-3 text-black'/>NikeOfficial@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Nike</p>
          <p className='text-gray-500 cursor-pointer'>Learn more about our team</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact