import React from 'react'

const NewsLetter = () => {

  const onSubmitHandler=(event)=>{
    event.preventDefault()
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subsribe Now & Get 10% Off</p>
      <p className='text-gray-400 mt-3 '>Stay ahead of the trends! Join our exclusive community to receive early access to new arrivals, special promotions, and style inspiration delivered straight to your inbox. As a thank-you for signing up, enjoy 10% off your first purchase..!</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full flex-1 outline-none' type="email" placeholder='Enter Your E-mail ID' />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter