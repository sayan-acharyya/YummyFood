import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Ourfood from "./Components/Ourfood"
import Home from "./Components/Home"
import Signin from "./Components/Signin"
import Detail from "./Components/Detail"
import { useState } from "react"
import Cart from "./Components/Cart"
import Logein from "./Components/Logein"
import toast, { Toaster } from 'react-hot-toast';
 
 
 

function App() {
   
  const [isLoading, setIsLoading] = useState(true);
 
  setTimeout(() => {
      setIsLoading(false);
  }, 2000);




   const [count,setCount]=useState(0)
    
   
 const [discount,setDiscount]=useState(0);
    const  handelAdd=()=>{
      setCount(count+1)
     }
    
   const [cart,setCart]=useState([])

   //add to cart
    const AddToCart = (product) =>{
      
      const isProductExist=cart.find((findItem)=> findItem.id===product.id)
      if(isProductExist){
          const upDateCart= cart.map((item)=>(
              item.id===product.id?{...item,quantity:item.quantity+1}:item
              
            ))
            
          setCart(upDateCart)
          
         
      }else{
        setCart([...cart,{...product,quantity:1}])
        
      }

      // setCart([...cart,{...product,quantity:1}])
       setCount(cart.length+1)
    }
// update the quantity
    const handelInc = (id) =>{
         const incQuantity=cart.map((item)=>(
          item.id===id ? {...item, quantity:item.quantity+1}:item
         ))
         setCart(incQuantity)
    }
    const handelDec = (id) =>{
      const decQuantity=cart.map((item)=>(
       item.id===id && item.quantity>1? {...item, quantity:item.quantity-1}:item
      ))
      setCart(decQuantity)
 }
 //remove form cart
 const handelRemove=(id)=>{
  const isComform= window.confirm("are you sure you want to delete this")
  if(isComform){
      
    const updatteByFilter=cart.filter((filterItem)=> filterItem.id != id)
     setCart(updatteByFilter)
      setCount(cart.length-1)
      return toast.success("successfully romoved from your cart")

  }
     
 }
//calculate  total items
 const getTotalPrice = () =>{
   const totalprice=cart.reduce((total,cartReduceItem) =>{
    return total + cartReduceItem.price*cartReduceItem.quantity
   },0)
    return totalprice;
 }

 
 


  









  return (

 <>
      
        <BrowserRouter>
        <Header count={count}/>
        <Routes>
          <Route path="/" element={<Home handelAdd={handelAdd} />}/>
          <Route path="/AboutUS" element={<Detail/>}/>
           
          <Route path="/ourfood" element={<Ourfood  AddToCart={AddToCart}/>}/>
          <Route path="/signIn" element={<Signin/>}></Route>
          <Route path="/logeIn" element={<Logein/>}></Route>
          <Route path="/cart" element={<Cart cart={cart} handelDec={handelDec} handelInc={handelInc} handelRemove={handelRemove} getTotalPrice ={getTotalPrice}/>}></Route>
         </Routes>
         <Toaster/>
         <Footer/>
         </BrowserRouter>


      
    </>
  )
}

export default App

 