import React from 'react'
import { Link } from 'react-router-dom'

const Delivery = () => {
  return (
    <div className='w-full py-16 px-4'>
       <h3 className='text-[#fbc531] font-bold text-2xl text-center'>Quick Delivary App</h3>
       <div className='grid grid-cols-2 w-[70%] mx-auto my-10 gap-10'>
        <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp
' alt='' className='w-[550px]'/>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-[green] text-[30px]'>Get The App</p>
            <h2 className='md:text-3xl lg:text-5xl py-2 font-bold'>The Fastest Food Delivery in India </h2>
            <Link to='/signIn'>
            <button className='bg-black sm:w-[100px] md:w-[150px] text-white rounded-md my-6 py-[20px] hover:text-[#fbc531] font-semibold'> Get Started</button>
            </Link>
          </div>
       </div>
    </div>
  )
}

export default Delivery