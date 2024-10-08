import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>LATEST ARRIVALS</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      <img className='w-full sm:w-1/2' src="https://i.pinimg.com/originals/f4/05/f5/f405f5f351fd1845d611f8e4ade11381.jpg" alt="" />

    </div>
  )
}

export default Hero