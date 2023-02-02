import React from 'react'
import styled from 'styled-components'
import {BsCheckCircleFill} from 'react-icons/bs'

const Container=styled.div`
position:relative ;
overflow: hidden;

`
const Image=styled.img`
   
  height: 100vh;
object-fit: cover;
//border: 1pt solid white;

`
const WrittenCont=styled.div`
    position: absolute;
  //  border: 1pt solid;
    top: 15rem;
    left: 5rem;
    text-align: left;
    color: #22094b;
    width: 70%;
    box-shadow: 4px 4px 10px #22094b;
    padding: 0rem 2rem 2rem 2rem;
`
const Heading=styled.h1`
    font-size: ${props=>props.fontSize};
    font-family: monospace;
    font-stretch: narrower;
`
const Paragraph=styled.span`
    font-size: ${props=>props.fontSize};
    max-width: 80%;
    align-self: center;
    font-family:sans-serif;
    font-weight: 10;
  //  border: 1pt solid;
`
const Cont2=styled.div`
    background-color: white;  
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
`
const WriteCont2=styled.div`
   display: flex;
   flex-direction: column;
//   border: 1pt solid black;
   width: 70%;
   align-self: center;
   margin-top: 3rem;
   margin-bottom: 3rem;
   color: #646262;
 //  height: 10vh;
`
const Cont=styled.div`
    display: flex;
    
`
const Textdiv=styled.div`
   flex :1;
   //border: 1pt solid black;
`
const Image2=styled.img`
    flex: 1;
   // border: 1pt solid black;
    height: 100vh;
    margin-bottom: 10rem;
    width: 20%;
    
`
const ListCont=styled.ul`
  list-style: none;
  margin-top: 5rem;
`
const ListItem=styled.li`
  text-align: left;
  margin-top: 2rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #575252;
`
export const Details = () => {
  return (
    <Container>
    <Image src='https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-f7ec6d5/blog/wp-content/uploads/sites/2/2021/09/siginificance-of-app-development-1-1170x508.jpg'/>
    <WrittenCont>
        <Heading fontSize="2.5rem">Delivering On Demand App Development Services</Heading>
        <Paragraph fontSize="1.5rem">we specialize in creating custom, high-quality mobile applications that are tailored to the specific needs of our clients</Paragraph>
    </WrittenCont>
    <Cont2>
     <WriteCont2>
     <Heading fontSize="2.4rem">OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES</Heading>
     <Paragraph fontSize="1.2rem">We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.</Paragraph>
     </WriteCont2>
     <Cont>
      <Textdiv>
        <ListCont>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Custom iOS and Android apps development</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Native and cross-platform solutions</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>UI/UX design</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Consulting and prototyping</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Automated QA and testing</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Power management, notification and geofencing</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Embedded Android & AOSP customizations</ListItem>
<ListItem><BsCheckCircleFill color='cyan' fontSize='1.5rem' style={{marginRight:"1rem"}}/>Maintenance and post-warranty support</ListItem>
          
        </ListCont>
        </Textdiv>
         <Image2 src='https://img.freepik.com/free-vector/realistic-smartphone-display-with-apps_23-2148374064.jpg?w=740&t=st=1674853391~exp=1674853991~hmac=5a8f294b24d95cfd9c7295ed7eaff9e1238e93b9e51f567cbc64f7ac598f411f'/>
     </Cont>
    </Cont2>
    </Container>
  )
}
