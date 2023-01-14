import React from 'react'
import Navbar from '../Components/Navbar'
import { Pricing } from '../Components/Pricing'
import { Team } from './Team'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Pricing/>
        <Team/>
    </div>
  )
}
