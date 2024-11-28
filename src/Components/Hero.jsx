import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Hero = () => {
    const imgData=[
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
        //   {
        //     url: ' https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY='
        //   },
      
    ];

    const [slider,setSlider]=useState(0);

    const handelPlus =() =>{
        setSlider(slider===imgData.length-1? 0 :  slider+1);
    };

    const handelMinus =() =>{
        setSlider(slider===0? imgData.length-1 :  slider-1);
    };

    useEffect(()=>{
       
        const sliderclear=setInterval(()=>{
            handelPlus();
        },2000) 
        return()=> clearInterval(sliderclear)

    },[slider])

  return (
    <div className='mt-[115px]'>
        < div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
            {
                imgData.map((item,i)=>(
                    <div key={i} className={`${slider===i ? "block":"hidden"}`}>
                      <img src={item.url} alt="" className=' w-full h-[80vh] rounded-2xl object-cover'/> 
                    </div>    
                ))}
                <div className='w-full mx-auto h-[80vh] rounded-2xl bg-black opacity-50 absolute top-0 left-0  '></div> 
                <div className='absolute top-[50%] text-center text-white w-full font-semibold flex justify-center lg:text-[40px] md:text-[15px]   '>
                <p className=' '>Get upto 20% off in every order </p>
                </div>
        <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
        <FaAngleLeft size={45} className='cursor-pointer' onClick={handelMinus} />
        <FaAngleRight size={45} className='cursor-pointer' onClick={handelPlus}/>
        </div>
    </div>
    </div>
    
  )
}

export default Hero