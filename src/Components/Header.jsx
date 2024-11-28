import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({count}) => {

     const [sideNav,setSideNav]=useState(false)

       
    
      

  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-white '>
    <div className=' flex justify-between py-[20px] px-[25px] text-[21px] font-semibold border-b relative '>
        <div  className='cursor-pointer'>
            <Link to="/">
            <p className='cursor-pointer'>Yummi<span className='text-[#Fbc531]'>Food</span></p>
            </Link>
        </div>
        <div className=' '>
        
            <ul className='sm:flex gap-5 hidden cursor-pointer'>
                <Link to ="/">
                <li className='hover:text-[#Fbc531] hover:border-b-4 hover:border-[#fbc531]'>Home</li>
                </Link>
                <Link to='/AboutUS'>
                <li className='hover:text-[#Fbc531] hover:border-b-4 hover:border-[#fbc531]'>About us</li>
                </Link>
                <Link to='/ourfood'>
                <li className='hover:text-[#Fbc531] hover:border-b-4 hover:border-[#fbc531]'>Our Food</li>
                </Link>
                <Link to='/signIn'>
                <li className='hover:text-[#Fbc531] hover:border-b-4 hover:border-[#fbc531]'>Sign in</li>
                </Link>
                <Link to='/logein'>
                <li className='hover:text-[#Fbc531] hover:border-b-4 hover:border-[#fbc531]'>Log in</li>
                </Link>
            </ul>
        </div>
         {
            sideNav? (
            <div className=' bg-gray-100 absolute w-[270px] top-0 right-0 text-center h-[50vh] flex items-center justify-center z-10'>
            <RxCross2 size={25} className='absolute cursor-pointer top-2 right-2'  onClick={()=> setSideNav(!sideNav)} />
                <ul className='flex gap-12   cursor-pointer flex-col   '>
                    {/* <li className='hover:text-[#Fbc531]'>Home</li>
                    <li className='hover:text-[#Fbc531]'>About us</li>
                    <li className='hover:text-[#Fbc531]'>Offers</li>
                    <li className='hover:text-[#Fbc531]'>Sign in</li> */}
                    <Link to ="/">
                <li className='hover:text-[#Fbc531]'  onClick={()=> setSideNav(!sideNav)}>Home</li>
                </Link>
                <Link to='/AboutUS'>
                <li className='hover:text-[#Fbc531]'  onClick={()=> setSideNav(!sideNav)}>About us</li>
                </Link>
                <Link to='/ourfood'>
                <li className='hover:text-[#Fbc531]'  onClick={()=> setSideNav(!sideNav)}>Our Food</li>
                </Link>
                <Link to='/signIn'>
                <li className='hover:text-[#Fbc531]'  onClick={()=> setSideNav(!sideNav)}>Sign in</li>
                </Link>
                </ul>
            </div>) : ""
         }
        
          
        
    
         <div className='flex gap-5 '>
        
         <p><GiHamburgerMenu size={30} className='cursor-pointer block md:hidden sm:hidden ' onClick={()=> setSideNav(!sideNav)}/></p>
         <Link to="/cart">
          <p>{count}<FaCartShopping size={25} className='hover:text-[#fbc531]'/></p>   
          </Link>
            </div>
     </div>
     </div>
  )
}

export default Header



 