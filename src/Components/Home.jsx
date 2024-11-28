import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'
import Ourfood from './Ourfood'

const Home = ({handelAdd}) => {
  return (
    <div>
        <Hero></Hero>
        <Delivery></Delivery>
        <TopPicks handelAdd={handelAdd}   ></TopPicks>
         
    </div>
  )
}

export default Home