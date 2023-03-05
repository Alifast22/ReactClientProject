import React, { useState } from 'react'
import styled from 'styled-components'
import Countup from 'react-countup'

const Container=styled.div`
    margin-top: 0;
    height: 70vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const TextCont=styled.div`
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const TextHead=styled.text`
    font-size: 3rem;
    font-weight: 2rem;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 2rem;
    color: ${props=>props.color};
`
const Text=styled.span`
    font-size: 2rem;
    color: #646161;
    font-family: sans-serif;
    margin-left: 0.5rem;
    margin-top: 2rem;
`
const Wordings=styled.span`
    font-size: 4rem;
    
`
const Detail=styled.div`
    display: flex;
    flex-direction: column;
    border-left: 5pt solid  #1a9ccf;
    padding: 1rem;
`
const Caption=styled.span`
    font-size: 2rem;
    color: gray;
    display: flex;
`
const Cont=styled.div`
    display: flex;
    width: 60rem;
    justify-content:space-between;   
 //   border: 1pt solid black;
    margin-top: 4rem;
`
const Circle=styled.div`
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin-top: 1rem;
    margin-right: 0.5rem;
`

const ProjectsPage = () => {

    const [count,setCount]=useState(false)
  return (
    <Container onMouseEnter={()=>{setCount(true)}}>
    <TextCont>
     <TextHead>We Have Completed Around <TextHead color=' #1a9ccf'>50+</TextHead > Projects <TextHead color=' #1a9ccf'>Succesfully</TextHead></TextHead>
    
      <Cont>
      <Detail>
       <Wordings>{count ?  <Countup start={0} end={50} duration={2} delay={0}/> : 50}+</Wordings>
       <Caption><Circle color='green'/>Projects</Caption>
       </Detail>      
       <Detail>
        
       <Wordings>{count ?  <Countup start={0} end={10} duration={2} delay={0}/> : 10}+</Wordings>
       <Caption><Circle color='red'/>Employees</Caption>
       </Detail>       
       <Detail>
       <Wordings>{count ?  <Countup start={0} end={5} duration={2} delay={0}/> : 5}+</Wordings>
       <Caption><Circle color='blue'/>Companies Served</Caption>

       </Detail>
       </Cont>
     </TextCont>
    </Container>
  )
}

export default ProjectsPage
