import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6'>

            <div>
            <h2 className='font-bold mb-3 text-[30px]'>Yummi<span className='text-[#Fbc531]'>Food</span></h2>
            <p className='text-[20px] text-[grey]'>© 2024 YummiFood Limited</p>
            </div>

            <div>
                <h2 className='font-bold mb-3  text-[20px] md:text-[25px]'>Company</h2>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>About Us</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>YummiFood Corporate</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Careers</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Team</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>YummiFood one</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>YummiFood Instamart</p>
            </div>

            <div>
                <h2 className='  font-bold mb-3  text-[20px] md:text-[25px]'>Contect us</h2>
                 
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Help & Support</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'> partner with us</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Raid with us</p>
            </div>

            <div>
            <h2 className='font-bold mb-3  text-[20px] md:text-[25px]'>Available in: </h2>
            <p className=' text-[15px] md:text-[20px] mb-2 text-[grey]'>Bangalore</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Gurgaon</p>
            <p  className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Hyderabad</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Delhi</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Puna</p>
            
            </div>

        </div>
    </div>
  )
}

export default Footer