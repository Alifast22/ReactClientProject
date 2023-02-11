import React from 'react'
import styled from 'styled-components'
import {FaInstagram, FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {MdLocationOn,MdPhone} from 'react-icons/md'

const Container=styled.div`
  background-color: #120368;
  width: 100%;
  height: 50vh;
  position: relative;
`
const TextCont=styled.div`
  //border: 1pt solid black;
  display: flex;
  width: 80%;
  margin: auto;
  text-align: left;
`
const Box=styled.div`
 // border: 1pt solid black;
  flex: 1;
  margin: 0 1rem 0 1rem;
`
const Heading=styled.h1`
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
`
const Text=styled.span`
  color: #bbb7b7;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
 
`
const Wrapper=styled.div`
    display: flex;
    margin-top: 1rem;
`
const EndDiv=styled.div`
    position: absolute;
    background-color: #0c0535;
    height: 10vh;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
`
const Footer = () => {
  return (
    <Container>
    <TextCont>
    <Box>
    <Heading>About Develoopers</Heading>
    <Text>We are a team of highly skilled software professionals dedicated to delivering innovative and cutting-edge software solutions to our clients</Text>
     <FaFacebook color='#bbb7b7' fontSize="1.5rem" style={{margin:"1rem 0.5rem 0 0"}}/>
    <FaInstagram  color='#bbb7b7' fontSize="1.5rem" style={{margin:"1rem 0.5rem 0 0"}}/>
    <FaTwitter  color='#bbb7b7' fontSize="1.5rem" style={{margin:"1rem 0.5rem 0 0"}}/>
    </Box>  
    <Box >
    <Heading>Sitemap</Heading>
    <Text>About Us</Text>
    <Text>Services</Text>
    <Text>Our Team</Text>
    <Text>Payment Plans</Text>
    <Text>Contact Us</Text>
    </Box>  
    <Box>
    <Heading>Contact</Heading>
    <Wrapper><MdLocationOn color='#bbb7b7' fontSize="1.5rem" style={{margin:"0 0.5rem 0 0"}}/><Text>Address:B-109 Karimabad,Karachi</Text>  </Wrapper> 
    <Wrapper><MdEmail color='#bbb7b7' fontSize="1.5rem" style={{margin:"0 0.5rem 0 0"}}/><Text>Develooper@gmail.com</Text>   </Wrapper> 
    <Wrapper><MdPhone color='#bbb7b7' fontSize="1.5rem" style={{margin:"0 0.5rem 0 0"}}/><Text>+92-3313226743</Text>  </Wrapper>  
    </Box>
     </TextCont> 
     <EndDiv>© Copyright CORE 2022. All Right Reserved.</EndDiv>
    </Container>
  )
}

export default Footer
