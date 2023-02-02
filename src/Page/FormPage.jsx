import { FaPhone } from 'react-icons/fa'
import { MdEmail,MdLocationPin } from 'react-icons/md'


import React from 'react'
import styled from 'styled-components'
import { Form } from '../Components/Form'
import { fontSize } from '@mui/system'


const PageCont=styled.div`
    width: 100%;
    height: 100vh;
   
`
const Head=styled.div`

   height: 20vh;
   display: flex;
   position: relative;
`
const Heading=styled.h1`
    font-size: 3rem;
    color: white;
    font-family: sans-serif;
    margin-left:1rem;
 //   border-bottom: 1pt solid #5b40bb;
`
const LineCont=styled.div`
  height: 0.5vh;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 1rem;
`
const Container=styled.div`
    display: flex; 
    margin-left :2rem ;
    margin-top: 4rem;
`
const Display=styled.div`
    flex: 1;
    position: relative;
`
const Paragraph=styled.span`
    font-size: 2.5rem;
    color: white;
    font-family: sans-serif;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    border-top: 1pt solid white;
`
const FormCont=styled.div`
    border: 1pt solid black;
    flex: 1.5;
`
const IconDetail=styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`
const IconDes=styled.span`
  color: white;
  font-size: 1.15rem;
  margin-top: 0.5rem;

`
const IconCont=styled.div`
   background-color: #5b40bb ;
   height: 15vh;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`
const ArrowDiv=styled.div`
    border-right: 1pt solid white;
    border-top: 1pt solid white;
    height: 3vh;
    width: 3vh;
    position: absolute;
    transform: rotate(45deg);
    animation: scroll 2s infinite;

    &:nth-child(2){
        animation-delay: -2s;
    }   
     &:nth-child(3){
        animation-delay: -2s;
    }

    @keyframes scroll {
        0%{
            opacity: 1;
            transform: rotate(45deg) translate(-10px, 10px) ;
        }

}    
`
export const FormPage = () => {
  return (
    <PageCont>
        <Head><Heading>Contact Us</Heading><LineCont/></Head>
        <IconCont>
           <IconDetail><FaPhone style={{color:"rgb(4, 17, 59)",fontSize:"1.8rem"}}/><IconDes>+923312357382</IconDes></IconDetail>
           <IconDetail><MdEmail style={{color:"rgb(4, 17, 59)",fontSize:"2.3rem"}}/><IconDes>abc.020@gmail.com</IconDes></IconDetail>
           <IconDetail><MdLocationPin style={{color:"rgb(4, 17, 59)",fontSize:"2.3rem"}}/><IconDes>Main Shahrah e faisal </IconDes></IconDetail>
        </IconCont>
        <Container>
          <Display>
<Paragraph>Get started & tell us about your requirements</Paragraph>
<ArrowDiv style={{right:"6rem",top:"5rem"}}/>
<ArrowDiv style={{right:"7rem",top:"5rem"}}/>
<ArrowDiv style={{right:"8rem",top:"5rem"}}/>
          </Display>
          <FormCont>
            <Form/>
          </FormCont>
        </Container>
    </PageCont>
  )
}
