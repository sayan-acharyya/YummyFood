import React from 'react'
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div className='text-gray-600 body-font w-[80%] mx-auto mt-[120px]'>
        <div className='px-[16px]'>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>
            Deiving the force of <span className='text-[#fbc531]'>assortment</span>
        </h2>
        <p className='mb-8 leading-relaxed text-[20px]'>
          For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice
        </p>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'> 
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
           <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>
            Who are we?
            </h2>
            <p className='mb-8 leading-relaxed'>
            Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities
            </p>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            className=' object-cover object-center rounded'
            />
          </div>
         
        </div>
        <img src='https://st1.techlusive.in/wp-content/uploads/2022/04/Google-Maps.jpg' className='w-[100px] h-[100px] '/>
        <Link to="/">
        <p class="flex font-semibold text-[black] text-sm mt-10 left-5 mb-10 cursor-pointer hover:text-[#Fbc531]" ><MdHome size={20}/> Back to home</p>
        </Link>
    </div>
  )
}

export default Detail