import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Headimage from '../Images/devimg.jpg'
import App from '../Images/appdev.png'
import Icon from '../Images/sidedesign.png'
import Webapp from '../Images/webapp.png'
const Section=styled.div`
    height: auto;
    min-height: 110vh;
    background-color: white;
    position: relative;
    padding-bottom: 2rem;
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
const Cont=styled.div`
   // background-color: #bfd5e7;
    display: flex;
    width: 80%;
    box-align: center;
    margin: auto;
    margin-bottom: 5rem;
    border-radius: 1rem 0 1rem 0 ;
    box-shadow: 2px 2px 10px 1px rgba(27, 73, 92, 0.829) ;
`
const ImgCont=styled.div`
    flex: 1;
    height: 60vh;
   // border: 1pt solid black;
    
`
const DevImage=styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`
const TextCont=styled.div`
    flex: 1;
    display: flex;
  border: 1pt solid darkblue;
  width: 50vw;
  background-color: aliceblue;
  border-radius: 1rem 0 1rem 0;
`
const Head=styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`
const IconCont=styled.div`
    height: 10vh;
    margin-top: 2rem;
    margin-left: 1rem;
`
const IconImage=styled.img`
  height: 10vh;  
`
const Para=styled.span`
    font-weight: 100;
    font-size: 1.2rem;
   
`
const Words=styled.div`
    text-align: left;
    margin-left: 1.5rem;
    width: 70%;
    
`
const data=[
    {id:1,head:"Mobile Development",paragraph:"With expertise in the latest technologies and a user-centered design approach, we build high-quality, intuitive, and engaging mobile applications for iOS, Android, and the web. Our process is agile, allowing us to quickly iterate and refine your app until it exceeds your expectations.whether you're looking to increase productivity, streamline operations, or launch the next big thing.",image:App},
    {id:2,head:"Web Development",paragraph:"At Develoopers, we are dedicated to providing the best web development solutions to our clients. Our team of experienced developers is skilled in creating customized websites and web applications that meet the unique needs of each business.",image:Webapp},
    {id:3,head:"Web Development",paragraph:"At Develoopers, we are dedicated to providing the best web development solutions to our clients. Our team of experienced developers is skilled in creating customized websites and web applications that meet the unique needs of each business.",image:Webapp}

]
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
     <Section>
        {/* container start */}
       { data.map(item=>(
        item.id % 2 ===0 ?
        <Cont>
        <TextCont>
         <IconCont><IconImage src={Icon}/></IconCont>
          <Words>      
         <Head>{item.head}</Head>
         <Para>{item.paragraph}</Para>
         </Words>
        </TextCont>
        <ImgCont >
         <DevImage src={item.image}/>
        </ImgCont>
        </Cont>
        :
        <Cont>
        <ImgCont >
         <DevImage src={item.image}/>
        </ImgCont>
        <TextCont>
         <IconCont><IconImage src={Icon}/></IconCont>
          <Words>      
         <Head>{item.head}</Head>
         <Para>{item.paragraph}</Para>
         </Words>
        </TextCont>
        </Cont>        
       ))
    }

    {/* container end */}
     </Section>
    </>
  )
}

export default Services
