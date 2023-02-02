import React, { useState } from 'react'

import styled from 'styled-components'




const Container=styled.div`
    display: flex;
    flex-direction: column;
    border: 1pt solid black;
    align-items: center;
    background-color: ${props=>props.backgroundColor};
    width: 25%;
    height: 60vh;
  //  max-height: 40vh;
    border-radius: 1rem 0 1rem 0;
    margin: 1rem;
    position: relative;
    overflow: hidden;

`
const Image=styled.img`
object-fit: cover;
margin: 0.625rem;
margin-bottom: 1.25rem;
height: 10vh;
`
const TextCont=styled.div`
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
  //  border: 1pt solid black;
    width: 90%;
    align-items: center;
`
const Text=styled.h1`
    color: ${props=>props.color};
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-family: sans-serif;
    margin-top: 0%;
   
`

const Paragraph=styled.span`
    font-size: 1.15rem;
    color: ${props=>props.color};
    font-family: sans-serif;

`
const Link=styled.a`
    font-style: normal;
    cursor: pointer;
    font-size: 1.05rem;
    color: ${props=>props.color};
    font-weight: bold;
    margin-bottom: 1rem;
    
`
const BlueDiv=styled.div`
  background-color: #1a9cc7;
  height: ${props=>props.height};
  width: 100%;
  top: 0px;
  transition: 0.5s ease;
  position: absolute;
 overflow: hidden;
`
export const Card = (props) => {
    console.log(props)
    const [blue,setBlue]=useState(false);
  return (
    <>
    
    <Container  onMouseEnter={()=>{setBlue(true)}} onMouseLeave={()=>{setBlue(false)}} backgroundColor="white">
        {blue ? <BlueDiv height="100%" >
        <Image src={props.logo}/>
        <TextCont style={{marginLeft:"1.3rem"}}>
        <Text color='white'>{props.name}</Text>
        <Paragraph color='white'>{props.des}</Paragraph>
        </TextCont>
        <Link id='#' color='white'>Read More</Link> 
        </BlueDiv> :
         <BlueDiv height="0%" />}

        {!blue && <>
        <Image src={props.logo}/>
        <TextCont>
        <Text>{props.name}</Text>
        <Paragraph>{props.des}</Paragraph>
        </TextCont>
        <Link id='#' color='#575454'>Read More</Link></> }     
    </Container>
    {/* :
    <Container onMouseLeave={()=>{setBlue(false)}} style={{position:"absolute",bottom:"0"}} backgroundColor="blue">
        <Image src={props.logo}/>
        <TextCont>
        <Text>{props.name}</Text>
        <Paragraph>{props.des}</Paragraph>
        </TextCont>
        <Link id='#'>Read More</Link> 
    </Container> */}
    
    </>
  )
}
