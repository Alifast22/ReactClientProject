import React from 'react'
import Navbar from '../Components/Navbar'
import { Pricing } from '../Components/Pricing'
import { Team } from './Team'
import Carousel from './ClientPage'
import { FormPage } from './FormPage'
import { AboutUs } from './AboutUs'
import { Details } from './Details'

export const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Details/>
        <AboutUs/>
        <Pricing/>
        <Team/>
        <Carousel/>
        <FormPage/>
    </div>
  )
}
