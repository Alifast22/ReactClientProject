import React from 'react'
import styled from 'styled-components'
import {FaInstagram, FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import { useState } from 'react'


const Container=styled.div`
    display: flex;
    flex-direction: column;
    border: 1pt solid black;
    align-items: center;
    background-color: rgba(50, 26, 114, 0.548);
    border-radius: 1.0rem;
    width: 20vw;
    height: 50vh;
    box-shadow: 0 0 19rem -4rem;
    position: relative;
    & :hover{
        box-shadow: 1rem 1rem 50rem;
}    

`
const IconCont=styled.div`
background-color: #6f52d6;
border-radius: 1rem 0rem 0rem 1rem;
 float: right;
 height: 25vh;
 width: 4vw;
 position: absolute;
 top: 3rem;
 right: 0rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 transition: 0.5s;
`
const IconsMargin=styled.div`
    margin-top: 1rem;
`
const Image=styled.img`
object-fit: cover;
margin: 1.25rem;
border-radius: 1.0rem;
width: 17vw;
height: 30vh;

`
const TextCont=styled.div`
    margin-bottom: 1.25rem;
`
const Text=styled.span`
    color: white;
    font-size: 1.25rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Write=styled.span`
    font-size: 1rem;
   color: rgba(162, 173, 207, 0.548);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const TeamCard = () => {

   const [icons,setIcons]=useState(false)

  return (
    <>
    <Container  onMouseEnter={()=>{setIcons(true)}}  onMouseLeave={()=>{setIcons(false)}}> 
      {icons &&  (<IconCont >
            <IconsMargin> <FaFacebook color='white' fontSize="2rem"  /></IconsMargin>
            <IconsMargin><FaInstagram color='white' fontSize="2rem" /></IconsMargin>
            <IconsMargin><FaTwitter color='white' fontSize="2rem" /></IconsMargin>
            
        </IconCont>)}
        <Image src='data:image/jpeg;base64,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'/>
        <TextCont>
        <Text>Emma John</Text>
        </TextCont>
        <Write>Web Developer</Write>
    </Container>
    </>
  )
}
