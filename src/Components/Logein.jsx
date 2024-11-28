import React from 'react'
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Logein = () => {

   const [userSignUp,setUserSignUp]=useState({email:"",password:""})

   const handelChange  = (e) =>{
     setUserSignUp({...userSignUp,[e.target.name] : e.target.value})
      
   }
 
 const handelSubmit= (e) =>{
        e.preventDefault();
 
        if(!userSignUp.email && !userSignUp.password){
         return toast.error("Fill all the above fields")
        }
        
        else{
        
          
         if(userSignUp.email==""){
           return toast.error("Please enter your email")
         }else if(userSignUp.email.indexOf("@")<=0){
           return toast.error("Invalid '@' possition")
         }else if((userSignUp.email.charAt(userSignUp.email.length-4) != '.') && (userSignUp.email.charAt(userSignUp.email.length-3)!='.')) {
             return  toast.error("invalid '.' possition")
         }
         if(userSignUp.password==""){
           return toast.error("please enter your password")
         }else if(userSignUp.password.length<5 || userSignUp.password.length>15){
           return toast.error("password  must be between 5 to 15")
         
        }
       }
       if(userSignUp.email && userSignUp.password) {
         return toast.success("you are successfully Login")
         
 
        }
 
 }

  return (
     
     <div className='text-gray-600 body-font w-[90%] sm:w-[80%] mx-auto mt-[100px]'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
            <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
            <h1 className='title-font font-medium text-3xl text-gray-900'>
               Get Started with Your Account
            </h1>
            <p className='leading-relaxed mt-4'>
               Find Your Favorites Food On our platform . Just one step to order your Food
            </p>
            </div>
                 
             
              <div className='lg:w-2/6 md:1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0' >
              
             <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
                Login
             </h2>
              
              
             <div className='relative mb-4'>
              <label  className='leading-7 text-sm text-gray-600' >
                Email
              </label>
              <input
              type='email'
              name='email'
              autoComplete='off'
              value={userSignUp.email}
              onChange={handelChange}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus: ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
               
              </div>
             <div className='relative mb-4'>
              <label  className='leading-7 text-sm text-gray-600' >
                Password
              </label>
              <input
              type='password'
              autoComplete='off'
              value={userSignUp.password}
              onChange={handelChange}
               
               
              name='password'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus: ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
               
             </div>
              
             <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ' onClick={handelSubmit}>
                Login
             </button>
              <Link to="/signin">
                 <h1 className='text-gray-600 cursor-pointer hover:text-indigo-600 pt-[5px]'>Don't have any account?Sign in</h1>
              </Link>
               
            </div> 
            
        </div> 
        <Link to="/">
        <p class="flex font-semibold text-[black] text-sm mt-10 left-5 mb-10 cursor-pointer" ><MdHome size={20}/> Back to home</p>
        </Link>
    </div>
  


 


     
  )
}

export default Logein