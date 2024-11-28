import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const Cart = ({cart,handelDec,handelInc,handelRemove,getTotalPrice}) => {
 



  return (
    <div className='mt-[100px] mx-auto w-[90%] cursor-pointer'>
         <div class="container mx-auto mt-10">
    <div class="flex flex-col lg:flex-row shadow-md my-10">
      <div class="w-full lg:w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl uppercase">{cart.length} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total
          </h3>
        </div>
           
           {/* cart section start here*/}

           {
            cart.map((cartItem) => (
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={cartItem.id}>
              <div class="flex w-2/5"> 
                <div class="w-20">
                  <img
                   class="h-24" 
                   src={cartItem.image} alt=""/>
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{cartItem.name}</span>
                  <span class="text-red-500 text-xs">{cartItem.category}</span>
                  <p  
                   class="font-semibold hover:text-[#fbc531] text-gray-500 text-xs cursor-pointer" onClick={()=>handelRemove(cartItem.id)}>
                    Remove</p>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                 <button className='border px-2 py-1' onClick={()=>handelDec(cartItem.id)}>-</button>
                 <button className='px-2'>{cartItem.quantity}</button>
                 <button className='border px-2 py-1' onClick={()=>handelInc(cartItem.id)}>+</button>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">
              {cartItem.price} Rs.
              </span>
              <span class="text-center w-1/5 font-semibold text-sm">
              {cartItem.price*cartItem.quantity} Rs.
              </span>
            </div>
            ))
           }

       

         {/* cart section start here*/}

        {/* <a href="#"
         class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg 
          class="fill-current mr-2 text-indigo-600 w-4" 
          viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
            </svg>
          Continue Shopping
        </a> */}
        <Link to="/ourfood">
        <p class="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer" ><FaArrowLeft size={20}/> Continue Shopping</p>
        </Link>
        <Link to="/">
        <p class="flex font-semibold text-[black] text-sm mt-10 cursor-pointer" ><MdHome size={20}/> Back to home</p>
        </Link>
      </div>

      <div 
      id="summary"
     class="w-full lg:w-1/4 px-8 py-10 bg-[#f6f6f6]"
     >
        <h1 class="font-semibold text-2xl border-b pb-8">
          Order Summary
          </h1>
        <div class="flex justify-between mt-10 mb-5">

          <span class="font-semibold text-sm uppercase">
            Items {cart.length}
            </span>
          <span class="font-semibold text-sm">{getTotalPrice()} Rs.</span>
        </div>

        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">
            Shipping
            </label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - 10.00 Rs.</option>
          </select>
        </div>
        <div class="py-10">
          <label 
          for="promo" 
          class="font-semibold inline-block mb-3 text-sm uppercase"
          >
            Handeling Fees
            </label>
          <input 
          type="text" 
          id="promo" 
          placeholder="  handeling fees- 15 Rs."
          class="p-2 text-sm w-full"
           
          />
        </div>
        <p className='text-gray-500'>Place order your order Now.</p>
        {/* <button class="bg-red-500 hover:bg-[#fbc531] px-5 py-2 text-sm text-white uppercase" >
          Apply
          </button> */}
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{getTotalPrice()+10+15} Rs.</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          >Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
 </div>
  )
}

export default Cart