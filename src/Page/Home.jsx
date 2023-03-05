import React from 'react'
import Navbar from '../Components/Navbar'
import { Pricing } from '../Components/Pricing'
import { Team } from './Team'
import Carousel from './ClientPage'
import { FormPage } from './FormPage'
import { AboutUs } from './AboutUs'
import { Details } from './Details'
import Slider from '../Components/Slider'
import ProjectsPage from './ProjectsPage'
import Footer from '../Components/Footer'
import { Categories } from './Categories'

export const Home = () => {
  return (
    <div>
        <Slider/>
        <AboutUs/>
        <Categories/>
        <Pricing/>
        <ProjectsPage/>        
        <Carousel/>
  
        {/* <FormPage/> */}
    </div>
  )
}
