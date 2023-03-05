import React from "react";
import styled from "styled-components";
//import SearchIcon from '@mui/icons-material/Search';
import {HiSearch} from 'react-icons/hi'
import {HiViewList} from 'react-icons/hi'
import { Link } from "react-router-dom";
import { mobile } from "../Page/Responsive";
import Logo from '../Images/logo.png'

import { Sidebar } from "./Sidebar";

import { useState } from "react";


const Container = styled.div`
  background-color: black;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  
  @media (max-width:600px){
  .icon{
    font-size: 20px;
  }
  .Search{
    display: none;
  }
  width: 100%;
};
@media (min-width:600px){
  .Nav{
    display: none;
  }


};

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items:center;

  `;
const Center = styled.div`
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  height: 24px;
  margin-right:5px;
  border-radius: 10px;
  margin-left: 10px;
  ${mobile({display:"none"})}
`
const Heading= styled.h1`
  font-weight: bold;
  font-family: san-serif;
  margin-right: 1rem;
  ${mobile({fontSize:"24px"})}
  color: ${props=>props.color};
`
const Para= styled.p`
 font-size: 16px;
 font-weight: lighter;
 padding: 10px;
 ${mobile({display:"none"})}

`
const LogoImg=styled.img`
  width: 20%;
  margin-bottom: 0.5rem;
`




const Navbar = () => {

  const [comp,setComp]=useState(false);
  const [openside,setOpenside]=useState(false);
  console.log(openside)
  return (
    <>
    <Container>
      <Right>
        <LogoImg src={Logo}/>
        <HiViewList style={{fontSize:"20px",margin:"0px 5px 2px 10px"} } className="Nav" onClick={()=>{setOpenside(!openside)}}/>
        <Para className="EN">EN</Para>
      <Input/>
      <HiSearch className="Search" fontSize="24px" />
      </Right>
      <Center>
      <div style={{display:"flex"}}><Heading color="aqua">Tech </Heading><Heading>Develoopers</Heading></div>
      </Center>
      <Left>
        <Para><Link style={{textDecoration:"none",color:"white"}} to={"/"}>HOME</Link></Para>
        <Para><Link style={{textDecoration:"none",color:"white"}} to={"Aboutus"}>ABOUT US</Link></Para>
        <Para><Link style={{textDecoration:"none",color:"white"}} to={"Team"}>TEAM</Link></Para>
        <Para><Link style={{textDecoration:"none",color:"white"}} to={"Services"}>SERVICES</Link></Para>
        <Para><Link style={{textDecoration:"none",color:"white"}} to={"Contact"}>CONTACT US</Link></Para>
     

      </Left>
    </Container>
      {openside && <Sidebar/>}
      </>
    
  );
};

export default Navbar;
