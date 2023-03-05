import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Headimage from '../Images/Amazonimg.jpg'
import Icon from '../Images/sidedesign.png'
import Wholesale from '../Images/wholesalefba.jpg'
import Dropshipping from '../Images/dropship.jpg'
import Label from '../Images/privatelabel.jpg'
import Arbitrage from '../Images/onlinerbitrage.jpg'
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
    left: 30rem;
    font-size: 2.5rem;
`
const ParaText=styled.span`
    color: white;
    display: block;
    font-size: 1.2rem;
    margin: 2rem;
    animation: spin_word 5s infinite;
   //border: 1pt solid white;
    width: 100%;
    word-wrap: normal;
    @keyframes spin_word {
        /* 10%{
           transform: translateX(-50%);
        } */
        30%{
            transform: translateX(-130%);
        }
        50%{
            transform: translateX(-400%);
        }        
        70%{
            transform: translateX(-550%);
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
    right: 37rem;
    display: flex;
  //  border: 1pt solid white;
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
    {id:1,head:"Wholesale FBA",paragraph:" Develoopers can help you take your e-commerce operation to the next level with Amazon Wholesale FBA service. Our team of experts will handle all aspects of your Amazon FBA operation, including inventory management, order fulfillment, customer service, and shippin",image:Wholesale},
    {id:2,head:"Dropshipping",paragraph:"Develoopers can help you with our Amazon Dropshipping service. Our team of professionals will work with you to identify high-quality suppliers and products that meet Amazon's strict guidelines. We will then list these products on your Amazon account and handle all aspects of the sales process, including order fulfillment and shipping.",image:Dropshipping},
    {id:3,head:"Private Label",paragraph:"Develoopers can help you with our Amazon Private Label service. Our team of experts will work with you to develop and source high-quality products that align with your brand's values and customer needs. We will then create customized packaging and branding for your products, allowing you to stand out from the competition. We will list your products on your Amazon account and handle all aspects of the sales process, including order fulfillment and shipping.",image:Label},
    {id:4,head:"Online Arbitrage",paragraph:"Develoopers can help you with our Amazon Online Arbitrage service. Our team of experts will work with you to identify and source high-quality products at low prices from online retailers. We will then list these products on your Amazon account and handle all aspects of the sales process, including order fulfillment and shipping. By utilizing our Online Arbitrage service",image:Arbitrage},
    
]
const Services = () => {
  return (
    <>
     <Navbar/> 
     <Section>
     <Image src={Headimage}/>
     <ColoredDiv/>
     <TextMain>Amazon Services</TextMain>
     <ParaDiv>
        <div style={{width:"100%"}}><ParaText>Wholesale FBA</ParaText></div>
        <div style={{width:"100%",marginLeft:"6rem"}}><ParaText>Dropshipping</ParaText></div>
        <div style={{width:"100%",marginLeft:"6rem"}}><ParaText>Private Label</ParaText></div>
        <div style={{width:"100%",marginLeft:"10rem"}}><ParaText>Online Arbitrage</ParaText></div>
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
