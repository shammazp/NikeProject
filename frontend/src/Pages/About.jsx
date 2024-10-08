import React from 'react'
import Title from '../Components/Title'
import NewsLetter from "../Components/NewsLetter.jsx"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[600px]' src="https://res.cloudinary.com/dmubfrefi/image/private/s--fFydpO-H--/c_crop,h_2813,w_5000,x_0,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/006-nike-logos-jordan-white.jpg?_a=BAAAV6Bs" alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-700'>Our Story</b>
          <p>Nike started in 1964 as Blue Ribbon Sports, founded by Bill Bowerman and Phil Knight to revolutionize athletic footwear. Renamed Nike in 1971, the brand became iconic with its Swoosh logo and innovative designs. Today, Nike is a global leader in sportswear, known for pushing boundaries in performance, sustainability, and style, inspiring athletes worldwide to reach their full potential.</p>
          <b className='text-gray-700'>Our Mission</b>
          <p>At Nike, we believe that if you have a body, you are an athlete. Our mission is to empower every individual to reach their full potential through groundbreaking innovation, unmatched performance, and a relentless commitment to sustainability and inclusivity.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Nike ensures that every product meets the highest standards of performance, durability, and innovation. From design to production, rigorous testing is conducted to guarantee the reliability and functionality of materials, ensuring they withstand the demands of athletes.</p>
        </div>

        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience</b>
          <p className='text-gray-600'>At Nike, we prioritize convenience to enhance your shopping experience. Our user-friendly website and mobile app provide seamless navigation, allowing you to easily browse, filter, and find the products you need. With features like personalized recommendations, quick checkout, and easy returns.</p>
        </div>

        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service</b>
          <p className='text-gray-600'>Nike is dedicated to providing exceptional customer service to ensure a positive experience for every athlete. Our knowledgeable and friendly support team is available through multiple channels, including phone, chat, and email, to assist with inquiries, product information, and order assistance.</p>
        </div>
      </div>

      <NewsLetter />
    </div>

  )
}

export default About