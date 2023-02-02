import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Headimage from '../Images/devimg.jpg'

const Section=styled.div`
    height: 100vh;
    background-color: white;
    position: relative;

`
const Image=styled.img`
    width: 100%;
    object-fit: cover;
    height: 70vh;
   // opacity: 80%;
   
`
const TextMain=styled.h1`
    color: white;
    position: absolute;
    top: 10rem;
    left: 20rem;
    font-size: 2.5rem;
`
const ParaText=styled.span`
    color: white;
    display: block;
    font-size: 1.2rem;
    margin: 2rem;
    animation: spin_word 5s infinite;
  //  border: 1pt solid white;
    width: 100%;
    @keyframes spin_word {
        10%{
           transform: translateX(-100%);
        }
        50%{
            transform: translateX(-120%);
        }

    }
`
const ColoredDiv=styled.div`
    background-color: #00000060;
    position: absolute;
    height: 70vh;
    width: 100%;
    top: 0;
`
const ParaDiv=styled.div`
    position: absolute;
    top: 13rem;
    right: 40rem;
    display: flex;
 //   border: 1pt solid white;
    width: 15%;
    overflow: hidden;
`
const Services = () => {
  return (
    <>
     <Navbar/> 
     <Section>
     <Image src={Headimage}/>
     <ColoredDiv/>
     <TextMain>Company's Development Services</TextMain>
     <ParaDiv>
        <div style={{width:"100%"}}><ParaText>Web Development</ParaText></div>
        <div style={{width:"100%",marginLeft:"1rem"}}><ParaText>App Development</ParaText></div>
     </ParaDiv>
     </Section>
    </>
  )
}

export default Services
