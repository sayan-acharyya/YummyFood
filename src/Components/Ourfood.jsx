import React, { useState } from 'react'
import {mealData} from "../Data/data"
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
 
 

const Ourfood = ({AddToCart}) => {

   
 const [searchTerm,setSearchTerm]=useState("");
  const [minPrice,setMinprice]=useState("");
  const [maxPrice,setMaxprice]=useState("");
  

 


  return (
    <div className='w-[90%] mx-auto mt-[110px]'>
     <div>
        <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Our Food</h2>
     </div >
         <div className="text-center text-xl mb-3 ">
          
          <input placeholder='Search item'  type='text'  className='border-2 text-black px-2 py-2 w-[350px]'onChange={(event) => { setSearchTerm(event.target.value)
          }}/>
          <button className=' ml-1 px-3 py-3   bg-black text-[#fbc531]'> <IoSearchSharp /></button>
         </div>
         
          
     <div className=' grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2'>
       {mealData
       
       .filter((val)=>{//search item
         if(searchTerm==""){
             return val;
         }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
         }
       })
       .map((meal)=> (
        <div className='flex justify-center flex-col items-center'>
            <div>
            <img src={meal.image} alt='' className='w-[250px] rounded-lg h-[200px] object-cover'/>
            </div>
            <div className='flex justify-center py-2 px-4 flex-col items-center'>
                <p className='text-xl font-semibold uppercase'>{meal.name}</p>
                <p className='text-xl font-semibold uppercase'>₹{meal.price}</p>
                <button className='bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531]' onClick={()=> AddToCart(meal)}   >
                    Add to cart
                </button>

            </div>
        </div>

       ))}
     </div>
     <div className='flex justify-between'>
     <Link to="/">
        <p class="flex font-semibold text-[black] text-sm mt-10 left-5 mb-10 cursor-pointer hover:text-[#Fbc531]" ><MdHome size={20}/> Back to home</p>
        </Link>
        <Link to="/cart">
        <p class="flex font-semibold text-indigo-600  text-sm mt-10 left-5 mb-10 cursor-pointer uppercase hover:text-indigo-800"  ><FaArrowRight size={20} /> Checkout</p>
        </Link>
        </div>
    </div>
  )
}

export default Ourfood