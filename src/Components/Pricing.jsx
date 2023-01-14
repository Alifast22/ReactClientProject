import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
`
const BoxBasic=styled.div`
    box-shadow: 0px 0px 20px -8px #fffafabf;
    background-color: white;
    height: 60vh;
    width: 60vh;
    border-radius: 1.25rem;
`
const BoxRegular=styled.div`
    box-shadow: 0px 0px 20px -8px #fffafabf;
    background-color: white;
    height: 60vh;
    width: 60vh;
    border-radius: 1.25rem;
`
const BoxPremium=styled.div`
    box-shadow: 0px 0px 20px -8px #fffafabf;
    background-color: white;
    height: 60vh;
    width: 60vh;
    padding: 3rem 1.3rem;
    border-radius: 1.25rem;
`
const Data=styled.div`
    display: flex;
    flex-direction: column;
`
const Heading=styled.h1`
    font-size: 1.5rem;
`
const Price=styled.span`
    font-size: 3rem;
    font-family: 43.75rem;
    font-weight: bold;
    margin-bottom: 2rem;
   
`
const Line=styled.div`
    width: 50vh;
    align-self: center;
    height: 0.25vh;
    background-color: #4100f5;
`
const Description=styled.span`
    margin-bottom: 1.5rem;
`
const Button=styled.button`
    background-color: #5b40bb;
    width: 50%;
    border:none;
    height: 5vh;
    margin-bottom: 1.25rem;
    margin-top: 1.75rem;
`
const ButtonFont=styled.span`
    font-size: 20px;
    font-family:monospace ;
    color: white;
`
export const Pricing = () => {
  return (
    <>
    <Container>
<BoxBasic>
    <Data>
    <Heading>Basic</Heading>
    <Price>$10.00</Price>
    <Description>1GB Free Storage</Description><Line/>
    <Description>2 Users Only</Description><Line/>
    <Description>2GB Sending </Description><Line/>
    </Data>
    <Button><ButtonFont>Book Now</ButtonFont></Button>
</BoxBasic>
<BoxPremium>
    <Data>
    <Heading>Premium</Heading>
    <Price>$30.00</Price>
    <Description>Unlimited Storage</Description><Line/>
    <Description>Unlimited Users </Description><Line/>
    <Description>Unlimited Sending </Description><Line/>
    </Data>
    <Button><ButtonFont>Book Now</ButtonFont></Button>         
</BoxPremium>
<BoxRegular>
<Data>
    <Heading>Regular</Heading>
    <Price>$20.00</Price>
    <Description>3GB Free Storage</Description><Line/>
    <Description>5 Users Only</Description><Line/>
    <Description>5GB Sending </Description><Line/>
    </Data> 
    <Button><ButtonFont>Book Now</ButtonFont></Button>  
</BoxRegular>
    </Container>
    </>
  )
}
